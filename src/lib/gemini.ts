/// <reference types="vite/client" />
import { GoogleGenerativeAI } from '@google/generative-ai';
import { UGCData, generatePerTakePrompts } from './promptGenerator';
import { generateLocalScript } from './localScriptGenerator';

export interface ScriptGenerationInput {
    productTitle: string;
    style: string | null;           // 'influencer' | 'review'
    influencerName: string | null;  // Nome do avatar selecionado
    scenario: string | null;        // Cenário escolhido
    videoModel: string | null;      // Modelo do vídeo
    tone: string | null;            // Tom visual
    duration: string | null;        // Duração
    voiceGender: string | null;     // 'fem' | 'masc'
    voiceTone: string | null;       // Tonalidade de voz
    numTakes: number;
}

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;
if (apiKey) {
    genAI = new GoogleGenerativeAI(apiKey);
}

// ─────────────────────────────────────────────────────────
// GEMINI: Enriquecer prompts de DIREÇÃO DE IMAGEM por take
// ─────────────────────────────────────────────────────────

export async function generateGeminiPerTakePrompts(data: UGCData): Promise<string[]> {
    const baseTakePrompts = generatePerTakePrompts(data);

    if (!genAI || !data.takes.some(t => t.trim())) {
        return baseTakePrompts;
    }

    const validTakes = data.takes.filter(t => t.trim() !== '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const enrichedPrompts: string[] = [];

    for (let i = 0; i < validTakes.length; i++) {
        try {
            const geminiInstruction = `
Você é um diretor de vídeos UGC de elite. Com base nas informações abaixo, crie um PROMPT DE DIREÇÃO DE VÍDEO extremamente detalhado em português para ferramentas de IA (Veo 3, Runway, Luma).

Produto: ${data.productTitle}
Estilo: ${data.style === 'review' ? 'POV/Review' : 'Influencer em cena'}
Criador: ${data.influencer || 'Avatar'} (${data.voiceGender === 'masc' ? 'masculino' : 'feminino'})
Cenário: ${data.scenario || 'neutro'}
Modelo: ${data.videoModel || 'UGC'}
Tom: ${data.tone || 'natural'}
Fala exata: "${validTakes[i]}"
Take: ${i + 1} de ${validTakes.length} — ${i === 0 ? 'ABERTURA' : i === validTakes.length - 1 ? 'ENCERRAMENTO com CTA' : 'DESENVOLVIMENTO'}

Gere APENAS o prompt finalizado, com seções organizadas com emojis. Sem explicações extras.
`;
            const result = await model.generateContent(geminiInstruction);
            enrichedPrompts.push(result.response.text().trim());
        } catch {
            enrichedPrompts.push(baseTakePrompts[i]);
        }
    }

    return enrichedPrompts;
}

// ─────────────────────────────────────────────────────────
// GEMINI: Gerar ROTEIRO (falas) para os takes
// Usa Gemini se disponível; fallback local de alta qualidade
// ─────────────────────────────────────────────────────────

export async function generateGeminiScript(input: ScriptGenerationInput): Promise<string[]> {
    // Sem SDK carregado → usa gerador local direto
    if (!genAI) {
        console.info('Gemini não configurado — usando gerador local profissional.');
        return generateLocalScript(input);
    }

    const videoModelDescs: Record<string, string> = {
        ugc: 'UGC Autêntico — estilo casual e orgânico',
        review: 'Review Clássico — análise detalhada do produto',
        pov: 'POV Review — foco nas mãos e no produto',
        depoimento: 'Depoimento pessoal — relato emocional',
        problema: 'Problema → Solução — narrativa de transformação',
    };
    const toneDescs: Record<string, string> = {
        animado: 'animado e energético',
        calmo: 'calmo e confiante',
        urgente: 'urgente com senso de escassez',
        divertido: 'divertido e bem-humorado',
    };
    const scenarioDescs: Record<string, string> = {
        quarto: 'quarto — íntimo e doméstico',
        sala: 'sala de estar — familiar',
        cozinha: 'cozinha — prático',
        escritorio: 'setup profissional',
        externa: 'área externa com luz natural',
        carro: 'interior do carro',
        personalizado: 'cenário neutro',
    };

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const isInfluencer = input.style === 'influencer';

    const instruction = `
Você é um copywriter de elite para TikTok Shop e Reels.

Crie um roteiro VIRAL em Português do Brasil para um vídeo UGC de venda.

PRODUTO: "${input.productTitle}"
FORMATO: ${isInfluencer ? `Influencer em cena (${input.influencerName || 'criador(a)'})` : 'POV/Review — foco nas mãos'}
MODELO: ${videoModelDescs[input.videoModel || ''] || 'UGC Autêntico'}
CENÁRIO: ${scenarioDescs[input.scenario || ''] || 'neutro'}
TOM: ${toneDescs[input.tone || ''] || 'natural'}
TAKES: ${input.numTakes}
VOZ: ${input.voiceGender === 'masc' ? 'masculina' : 'feminina'}, ${input.voiceTone || 'natural'}

REGRAS:
- Cada take = máximo 26 palavras (8 segundos)
- Take 1: gancho de impacto nos primeiros 2 segundos
- Takes intermediários: benefício real e persuasivo
- Último take: CTA direto ("clica no carrinho laranja", "pega o teu agora")
- Apenas as falas, nada mais

FORMATO OBRIGATÓRIO — responda SOMENTE assim:
TAKE 1:
[fala do take 1]

TAKE 2:
[fala do take 2]

TAKE 3:
[fala do take 3]

(continue para todos os ${input.numTakes} takes)
`;

    try {
        const result = await model.generateContent(instruction);
        const raw = result.response.text().trim();

        const parsedTakes: string[] = [];
        for (let i = 1; i <= input.numTakes; i++) {
            // Regex flexível: suporta "TAKE 1:", "**TAKE 1:**", "Take 1 -", etc.
            const regex = new RegExp(
                `\\*{0,2}TAKE\\s*${i}[\\s:*-]+([\\s\\S]*?)(?=\\*{0,2}TAKE\\s*${i + 1}[\\s:*-]|$)`,
                'i'
            );
            const match = raw.match(regex);
            const extracted = match?.[1]
                ?.trim()
                .replace(/^\[|\]$/g, '')
                .replace(/^\*+|\*+$/g, '')
                .trim();

            if (extracted && extracted.length > 10) {
                parsedTakes.push(extracted.slice(0, 200));
            } else {
                // Take não parseado — usa gerador local para esse take específico
                const localFill = generateLocalScript({ ...input, numTakes: input.numTakes });
                parsedTakes.push(localFill[i - 1] || `Take ${i}.`);
            }
        }
        return parsedTakes;
    } catch (err) {
        console.error('Gemini falhou — usando gerador local profissional:', err);
        return generateLocalScript(input);
    }
}
