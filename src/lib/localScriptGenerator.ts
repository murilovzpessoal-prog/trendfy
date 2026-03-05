import type { ScriptGenerationInput } from './gemini';

// ─────────────────────────────────────────────────────────────────────────────
// GERADOR LOCAL DE ROTEIROS UGC – ALTA QUALIDADE
// Funciona 100% offline. Usa todas as etapas do UGC Criador.
// ─────────────────────────────────────────────────────────────────────────────

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ── ABERTURAS ─ gancho nos primeiros 2 segundos ─────────────────────────────

function buildOpening(input: ScriptGenerationInput): string {
    const p = input.productTitle || 'esse produto';

    const hooks: Record<string, string[]> = {
        animado: [
            `Gente, eu precisei parar tudo pra falar do ${p} porque ele mudou minha vida de verdade!`,
            `Não acredito que fiquei tanto tempo sem usar o ${p} — olha que diferença incrível!`,
            `Para tudo! Preciso te contar o que o ${p} fez pela minha rotina agora!`,
            `Que produto é esse?! Eu fiquei completamente apaixonada no ${p} e preciso que você veja!`,
        ],
        calmo: [
            `Deixa eu te contar sobre o ${p} — ele fez uma diferença silenciosa, mas real na minha rotina.`,
            `Se você ainda não conhece o ${p}, hoje é o dia de mudar isso. Eu precisei te mostrar.`,
            `Tem um produto aqui que tem sido meu segredinho ultimamente — o ${p}.`,
            `Faz tempo que eu quero falar do ${p} com você. Ele simplesmente funciona.`,
        ],
        urgente: [
            `CORRE! O ${p} está em promoção agora e você não pode perder isso, olha!`,
            `Para o que você tá fazendo — o ${p} está com preço absurdo hoje e preciso te contar!`,
            `Estoque acabando do ${p}! Deixa eu te mostrar por que todo mundo tá comprando!`,
            `Você ainda não tem o ${p}?! Eu precisei vir avisar antes que acabe de vez!`,
        ],
        divertido: [
            `Ok, finalmente encontrei o produto que eu nem sabia que precisava tanto: o ${p}!`,
            `Minha vida antes e depois do ${p}? Duas pessoas completamente diferentes, juro!`,
            `Alguém precisava me avisar antes do ${p} existir porque agora não consigo mais parar!`,
            `Sabe aquele produto que você compra e fica feliz demais com você mesmo? É o ${p}.`,
        ],
    };

    const pool = hooks[input.tone || 'animado'] || hooks.animado;
    return pick(pool);
}

// ── DESENVOLVIMENTOS ─ benefício + detalhe natural ──────────────────────────

function buildMiddle(input: ScriptGenerationInput, takeIndex: number): string {
    const p = input.productTitle || 'ele';

    const frameworks: Record<string, string[][]> = {
        ugc: [
            [
                `Uso o ${p} todo dia e simplesmente não decepciona. A qualidade é impressionante pro preço.`,
                `O que mais me surpreendeu no ${p} foi o acabamento — dá pra sentir que é produto de verdade.`,
                `Comprei o ${p} com um pouco de medo, mas chegou exatamente como mostrava e superou.`,
            ],
            [
                `Depois de dias usando o ${p}, posso confirmar: o resultado aparece mesmo, sem exagero.`,
                `O ${p} é daqueles produtos que você recomenda antes mesmo de terminar de usar. Top demais.`,
                `Minha família toda já pediu o link do ${p} — isso fala por si só, né?`,
            ],
        ],
        review: [
            [
                `Testei o ${p} por alguns dias. Textura ótima, acabamento perfeito e entrega rápida.`,
                `Em comparação com outras opções do mercado, o ${p} ganhou em qualidade e custo-benefício.`,
                `A relação custo-benefício do ${p} é fora do comum — muito acima do que eu esperava.`,
            ],
            [
                `Design funcional, fácil de usar e resultado visível já nos primeiros dias com o ${p}.`,
                `Fiz um teste real com o ${p}: durou, funcionou, superou. 10 de 10.`,
                `O que mais me impressionou no ${p} foi a consistência — não decepcionou nem uma vez.`,
            ],
        ],
        pov: [
            [
                `Olha só de perto o acabamento do ${p} — impossível não se impressionar com a qualidade.`,
                `Só de segurar o ${p} você já percebe que não é aquele produto meia-boca não.`,
                `Veja como é simples de usar o ${p} — prático, intuitivo e com resultado imediato.`,
            ],
            [
                `O unboxing do ${p} já diz tudo: embalagem caprichada, produto de verdade.`,
                `Usando aqui ao vivo o ${p} e olha o resultado — fala sério, que produto!`,
                `Mostrando aqui o ${p} de pertinho porque foto não faz jus à qualidade real.`,
            ],
        ],
        depoimento: [
            [
                `Quando recebi o ${p}, fiquei surpresa com quanto superou minhas expectativas.`,
                `Já tinha ouvido falar do ${p}, mas não imaginava que fosse tão bom assim na prática.`,
                `Comprei o ${p} com um pouco de medo, mas chegou exatamente como mostrava.`,
            ],
            [
                `Uso o ${p} há semanas e posso dizer com certeza: foi dinheiro muito bem gasto.`,
                `O ${p} resolveu algo que eu tentava resolver há tempos com outros produtos.`,
                `Não indico qualquer coisa, mas o ${p} eu recomendo de olhos fechados.`,
            ],
        ],
        problema: [
            [
                `Eu estava cansada de gastar dinheiro com coisas que não resolviam — aí encontrei o ${p}.`,
                `Tentei várias opções no mercado. Nenhuma chegou perto do que o ${p} entregou.`,
                `O problema que eu tinha todo dia simplesmente sumiu depois que comecei a usar o ${p}.`,
            ],
            [
                `Antes achava que não existia solução — o ${p} me provou o contrário.`,
                `Não precisei esperar muito pra notar a diferença: o ${p} age rápido e funciona de verdade.`,
                `Meses tentando resolver isso até o ${p} aparecer na minha vida. Nunca mais sem ele.`,
            ],
        ],
    };

    const modelKey = (input.videoModel || 'ugc') as keyof typeof frameworks;
    const pool = (frameworks[modelKey] || frameworks.ugc)[takeIndex % 2];
    return pick(pool);
}

// ── ENCERRAMENTOS ─ CTA direto e forte ──────────────────────────────────────

function buildClosing(input: ScriptGenerationInput): string {
    const p = input.productTitle || 'esse produto';

    const ctas: Record<string, string[]> = {
        animado: [
            `Eu te garanto: vale cada centavo! Clica no carrinho laranja agora e pega o teu!`,
            `Não perde tempo — link tá aqui em cima! Aproveita enquanto tem estoque!`,
            `Se tá esperando um sinal, esse é ele. Pega o ${p} agora e me conta depois!`,
            `Corre lá antes de acabar! Promoção de hoje tá imperdível, vai por mim!`,
        ],
        calmo: [
            `Se ficou interessado, o link tá aqui pra você. Tem parcelamento e entrega rápida.`,
            `Vale cada centavo investido no ${p}. Clica e descobre por que todo mundo tá amando.`,
            `Recomendo de verdade. O link tá disponível — aproveita a condição de hoje.`,
            `Vai lá conhecer o ${p} — tem opções ótimas de pagamento e entrega que chega rápido.`,
        ],
        urgente: [
            `Estoque ACABANDO! Clica agora no carrinho laranja antes que saia do ar!`,
            `Último aviso — promoção do ${p} é por tempo limitado. Vai lá AGORA!`,
            `Não deixa pra depois. Depois não tem. Clica lá e garante o teu!`,
            `Aproveita AGORA! Amanhã esse preço pode não existir mais. Vai!`,
        ],
        divertido: [
            `Tô esperando você no clube dos que amam o ${p}. Clica no carrinho laranja e vem!`,
            `Futuro você vai agradecer muito. Clica lá, pega o ${p} e me conta depois!`,
            `Tudo que você precisa agora: clicar. Vai. Eu espero. Link aqui em cima!`,
            `Sabe aquele arrependimento de não ter comprado antes? Evita já — pega o teu!`,
        ],
    };

    const pool = ctas[input.tone || 'animado'] || ctas.animado;
    return pick(pool);
}

// ── TAKE ÚNICO ─ completo em 1 fala ─────────────────────────────────────────

function buildSingleTake(input: ScriptGenerationInput): string {
    const p = input.productTitle || 'esse produto';
    const templates: string[] = [
        `Preciso te falar do ${p} — uso todo dia e simplesmente transforma. Clica no carrinho laranja e pega o teu!`,
        `O ${p} superou tudo que eu esperava. Qualidade real, resultado real. Aproveita o link aqui em cima!`,
        `Não sabia que precisava tanto do ${p} até começar a usar. Pega o teu agora — link aqui!`,
        `Finalmente um produto que entrega o que promete: o ${p}. Clica e garante o teu antes de acabar!`,
    ];
    return pick(templates);
}

// ── FUNÇÃO PRINCIPAL ─────────────────────────────────────────────────────────

export function generateLocalScript(input: ScriptGenerationInput): string[] {
    const scripts: string[] = [];

    for (let i = 0; i < input.numTakes; i++) {
        const isFirst = i === 0;
        const isLast = i === input.numTakes - 1;

        if (input.numTakes === 1) {
            scripts.push(buildSingleTake(input).slice(0, 200));
        } else if (isFirst) {
            scripts.push(buildOpening(input).slice(0, 200));
        } else if (isLast) {
            scripts.push(buildClosing(input).slice(0, 200));
        } else {
            scripts.push(buildMiddle(input, i - 1).slice(0, 200));
        }
    }

    return scripts;
}
