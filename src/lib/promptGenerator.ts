export interface UGCData {
    style: string | null;
    influencer: string | null;
    productTitle: string | null;
    scenario: string | null;
    videoModel: string | null;
    tone: string | null;
    duration: string | null;
    voiceGender: string | null;
    voiceTone: string | null;
    takes: string[];
}

// ─── Mapeamentos de contexto ──────────────────────────────────────────────────

const scenarioDescriptions: Record<string, string> = {
    quarto: 'filmed in a cozy modern bedroom, warm ambient lighting, aesthetic minimal setup in the background',
    sala: 'filmed in a modern living room, soft ambient light, clean minimal decor',
    cozinha: 'filmed in a contemporary kitchen, natural light, clean aesthetic countertop in the background',
    escritorio: 'filmed in a professional home office setup, cool soft LED lighting, blurred monitors in the background',
    externa: 'filmed outdoors with natural daylight, garden or terrace in the background',
    carro: 'filmed inside a car, natural window lighting, blurred dashboard in the background',
    personalizado: 'filmed in front of a neutral clean background with shallow depth of field (bokeh)',
};

const toneDescriptions: Record<string, string> = {
    animado: 'excited and enthusiastic — high energy authentic delivery',
    calmo: 'calm, gentle and confident — soft persuasive tone',
    urgente: 'urgent and fast-paced — strong sense of impact and scarcity',
    divertido: 'fun, light-hearted and relatable — playful authentic energy',
};

const voiceGenderMap: Record<string, string> = {
    fem: 'female voice',
    masc: 'male voice',
};

// ─────────────────────────────────────────────────────────────────────────────
// BASE PROMPT — esqueleto fixo aprovado em 04/03/2026 (versão v3 — final)
// Template compliant com as políticas do Google Flow / Veo 3.
// NÃO alterar a estrutura sem aprovação do usuário.
// ─────────────────────────────────────────────────────────────────────────────
function buildBasePrompt(params: {
    product: string;
    influencerName: string;
    isInfluencerStyle: boolean;
    sceneDescription: string;
    script: string;
    energyTone: string;
    voiceTone: string;
    voiceGender: string;
    takeContext: string;
    totalTakes: number;
}): string {
    const {
        product,
        isInfluencerStyle,
        sceneDescription,
        script,
        energyTone,
        voiceTone,
        voiceGender,
        takeContext,
        totalTakes,
    } = params;

    return `Brazilian Portuguese selfie product review video.

Two images are attached.

IMAGE 1:
This image already shows the final photorealistic AI-generated human character.
This is not a real-world person.
This is not a celebrity.
This is not based on a real individual.
It is a fully synthetic human created with AI.

The video must use the same face appearance from Image 1.
Do not redesign the face.
Do not stylize it.
Do not convert it into a cartoon or 3D avatar.
Keep the same photorealistic human appearance.

The body can move naturally for video purposes,
but the facial appearance must remain visually consistent with Image 1.

IMAGE 2:
This image shows the product that must appear in the video: ${product}.
The product must match the reference in shape, packaging, color, and branding.

The AI-generated human from Image 1 is holding the product from Image 2
while recording a selfie-style review.

Language:
The character speaks Brazilian Portuguese only.

Style:
Realistic.
UGC.
Front camera (selfie angle).
Natural hand movements.
Natural facial expressions.
${sceneDescription}

Tone and delivery: ${energyTone}.
Voice: ${voiceGender}, ${voiceTone}.

Take context: ${takeContext}
${totalTakes > 1 ? `\nMaintain visual continuity of the character and product across all takes.\nKeep environmental consistency throughout.\n` : ''}
Now perform the following script naturally in Brazilian Portuguese:

"${script}"`;
}

// ─── Gerador principal por take ───────────────────────────────────────────────

/**
 * Gera um prompt individual por take usando o base prompt fixo (v3 — final).
 * Injeta dinamicamente: produto, criadora, cenário, roteiro, tom e posição do take.
 */
export function generatePerTakePrompts(data: UGCData): string[] {
    const {
        style,
        influencer,
        productTitle,
        scenario,
        tone,
        voiceGender,
        voiceTone,
        takes,
    } = data;

    const product = productTitle || 'the featured product';
    const influencerName = influencer || 'the creator';
    const sceneDescription = scenarioDescriptions[scenario || ''] || 'filmed in front of a neutral clean background with shallow depth of field (bokeh)';
    const energyTone = toneDescriptions[tone || ''] || 'natural and authentic';
    const voiceGenderLabel = voiceGenderMap[voiceGender || 'fem'];
    const voiceToneLabel = voiceTone || 'natural';
    const isInfluencerStyle = style !== 'review';
    const validTakes = takes.filter(t => t.trim() !== '');

    return validTakes.map((takeScript, index) => {
        const takeNum = index + 1;
        const totalTakes = validTakes.length;

        let takeContext = '';
        if (totalTakes === 1) {
            takeContext = 'Single-take video — 8 seconds. Full arc: Hook → Benefit → Call-to-Action.';
        } else if (takeNum === 1) {
            takeContext = `Take ${takeNum} of ${totalTakes} — HOOK / OPENING. Duration: 8 seconds. Start with an engaging, expressive reaction before delivering the first line.`;
        } else if (takeNum === totalTakes) {
            takeContext = `Take ${takeNum} of ${totalTakes} — CALL-TO-ACTION / CLOSING. Duration: 8 seconds. End with a warm, inviting gesture pointing toward the purchase button.`;
        } else {
            takeContext = `Take ${takeNum} of ${totalTakes} — BENEFIT / MIDDLE. Duration: 8 seconds. Present the product naturally and expand on its key benefit.`;
        }

        return buildBasePrompt({
            product,
            influencerName,
            isInfluencerStyle,
            sceneDescription,
            script: takeScript.trim(),
            energyTone,
            voiceTone: voiceToneLabel,
            voiceGender: voiceGenderLabel,
            takeContext,
            totalTakes,
        });
    });
}

/**
 * Gera um único prompt geral (resumo completo) para salvar no Supabase.
 */
export function generateUGCPrompt(data: UGCData): string {
    const perTake = generatePerTakePrompts(data);
    return perTake.join('\n\n' + '─'.repeat(60) + '\n\n');
}
