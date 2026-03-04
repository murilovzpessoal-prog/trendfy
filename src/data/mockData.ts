import {
    ProductViral,
    ProductExplore,
    HackItem,
    VideoViral,
    CreatorViral,
    AvatarItem,
    PromptItem
} from '../types';

export const viralProducts: ProductViral[] = [
    {
        id: '1',
        title: 'Pulseira Magnética de Terapia',
        category: 'SAÚDE',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&h=400&auto=format&fit=crop',
        revenue: 'R$ 67.842,00',
        sales: '1.243',
        priceRange: 'R$ 89 - R$ 129'
    },
    {
        id: '2',
        title: 'Mini Projetor Portátil 4K',
        category: 'TECH',
        image: 'https://images.unsplash.com/photo-1535016120720-40c646bebbfc?q=80&w=400&h=400&auto=format&fit=crop',
        revenue: 'R$ 143.921,00',
        sales: '842',
        priceRange: 'R$ 299 - R$ 399'
    },
    {
        id: '3',
        title: 'Moedor de Café Elétrico Profissional',
        category: 'CASA',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400&h=400&auto=format&fit=crop',
        revenue: 'R$ 42.156,00',
        sales: '564',
        priceRange: 'R$ 159 - R$ 199'
    },
    {
        id: '4',
        title: 'Smartwatch Ultra Series 9',
        category: 'TECH',
        image: 'https://images.unsplash.com/photo-1544117518-30dd0575cfa4?q=80&w=400&h=400&auto=format&fit=crop',
        revenue: 'R$ 89.432,00',
        sales: '1.102',
        priceRange: 'R$ 199 - R$ 249'
    },
    {
        id: '5',
        title: 'Escova Alisadora 5 em 1',
        category: 'BELEZA',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=400&h=400&auto=format&fit=crop',
        revenue: 'R$ 56.741,00',
        sales: '943',
        priceRange: 'R$ 129 - R$ 179'
    },
    {
        id: '6',
        title: 'Luminária Galáxia 360°',
        category: 'DECORAÇÃO',
        image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=400&h=400&auto=format&fit=crop',
        revenue: 'R$ 31.902,00',
        sales: '2.431',
        priceRange: 'R$ 79 - R$ 99'
    }
];

export const exploreTopProducts: ProductExplore[] = [
    { id: 'ep1', title: 'Removedor de Pelos Pet Reutilizável', category: 'PETS', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400&h=400&auto=format&fit=crop', rating: 4.8, sales: '12.4k' },
    { id: 'ep2', title: 'Fone de Ouvido Condução Óssea', category: 'TECH', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&h=400&auto=format&fit=crop', rating: 4.9, sales: '8.2k' },
    { id: 'ep3', title: 'Kit Organizador de Mala 6 Peças', category: 'VIAGEM', image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=400&h=400&auto=format&fit=crop', rating: 4.7, sales: '15.1k' },
    { id: 'ep4', title: 'Mini Selador de Embalagens Térmico', category: 'CASA', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&h=400&auto=format&fit=crop', rating: 4.6, sales: '22.8k' }
];

export const creators: CreatorViral[] = [
    { id: 'c1', rank: 1, username: '@dicasdacleoofc', shopName: 'Dicas da Cleo', category: 'DICAS', revenue: 'R$ 102.489,32', avatar: 'https://i.imgur.com/8NA9NGB.jpeg', profileUrl: 'https://www.tiktok.com/@dicasdacleoofc' },
    { id: 'c2', rank: 2, username: '@luani.shop', shopName: 'Luani Shop', category: 'ACHADINHOS', revenue: 'R$ 45.987,63', avatar: 'https://i.imgur.com/P4vEkS8.jpeg', profileUrl: 'https://www.tiktok.com/@luani.shop' },
    { id: 'c3', rank: 3, username: '@helen.shopcreator', shopName: 'Helen', category: 'CREATOR', revenue: 'R$ 88.741,29', avatar: 'https://i.imgur.com/J8bEdbJ.jpeg', profileUrl: 'https://www.tiktok.com/@helen.shopcreator' },
    { id: 'c4', rank: 4, username: 'lara.azevedo71', shopName: 'Lara Azevedo', category: 'VARIEDADES', revenue: 'R$ 14.821,47', avatar: 'https://i.imgur.com/lzCy7xP.jpeg', profileUrl: 'https://www.tiktok.com/@lara.azevedo71' },
    { id: 'c5', rank: 5, username: '@jujuzinhashop', shopName: 'Juju', category: 'LIFESTYLE', revenue: 'R$ 56.321,50', avatar: 'https://i.imgur.com/hS2k80R.jpeg', profileUrl: 'https://www.tiktok.com/@jujuzinhashop' },
    { id: 'c6', rank: 6, username: '@elycashop', shopName: 'Ely', category: 'CASA', revenue: 'R$ 23.654,98', avatar: 'https://i.imgur.com/HKoQji5.jpeg', profileUrl: 'https://www.tiktok.com/@elycashop' },
    { id: 'c7', rank: 7, username: '@eliza.shop.ia', shopName: 'Eliza Shop', category: 'IA', revenue: 'R$ 68.214,15', avatar: 'https://i.imgur.com/1V8pMju.jpeg', profileUrl: 'https://www.tiktok.com/@eliza.shop.ia' },
    { id: 'c8', rank: 8, username: '@gigishop', shopName: 'Gigi', category: 'MODA', revenue: 'R$ 112.534,76', avatar: 'https://i.imgur.com/bcYp5bb.jpeg', profileUrl: 'https://www.tiktok.com/@gigishop' }
];

export const baseVideos: VideoViral[] = [
    { id: 'v1', thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&h=711&auto=format&fit=crop', sales: '3.2k', revenue: 'R$ 45.902', productTitle: 'Câmera Vintage 4K Retro', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v2', thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&h=711&auto=format&fit=crop', sales: '1.8k', revenue: 'R$ 28.431', productTitle: 'Relógio Minimalista Silver', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v3', thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&h=711&auto=format&fit=crop', sales: '5.4k', revenue: 'R$ 89.102', productTitle: 'Tênis Sport Red Edition', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v4', thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&h=711&auto=format&fit=crop', sales: '2.1k', revenue: 'R$ 34.560', productTitle: 'Headset Premium Gold', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v5', thumbnail: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=711&auto=format&fit=crop', sales: '1.2k', revenue: 'R$ 15.780', productTitle: 'Óculos Design Futurista', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v6', thumbnail: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=400&h=711&auto=format&fit=crop', sales: '4.3k', revenue: 'R$ 67.200', productTitle: 'Sneaker Urbano Pro', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v7', thumbnail: 'https://images.unsplash.com/photo-1585333127302-0422e332c021?q=80&w=400&h=711&auto=format&fit=crop', sales: '2.7k', revenue: 'R$ 41.320', productTitle: 'Teclado Mecânico RGB', tiktokUrl: 'https://www.tiktok.com' },
    { id: 'v8', thumbnail: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&h=711&auto=format&fit=crop', sales: '943', revenue: 'R$ 12.450', productTitle: 'Cadeira Ergonômica Home', tiktokUrl: 'https://www.tiktok.com' }
];

export const avatars: AvatarItem[] = [
    { id: 'av1', name: 'Ana', role: 'Lifestyle Creator', image: 'https://i.imgur.com/hrGOGFM.png', hoverImage: 'https://www.trendlyai.space/avatars/ana.gif', description: 'Ana é especialista em vlogs de lifestyle e rotina, perfeita para unboxings autênticos.' },
    { id: 'av2', name: 'Fernanda', role: 'Beauty Expert', image: 'https://i.imgur.com/3mnJIzU.png', hoverImage: 'https://www.trendlyai.space/avatars/fernanda.gif', description: 'Fernanda domina o nicho de beleza e maquiagem, trazendo elegância e autoridade.' },
    { id: 'av3', name: 'Carla', role: 'Fashion Specialist', image: 'https://i.imgur.com/gu8PLki.png', hoverImage: 'https://www.trendlyai.space/avatars/carla.gif', description: 'Carla é expert em moda e tendências, ideal para provadores e looks do dia.' },
    { id: 'av4', name: 'Juliana', role: 'Home & Decor', image: 'https://i.imgur.com/gPcVAPz.png', hoverImage: 'https://www.trendlyai.space/avatars/juliana.gif', description: 'Juliana foca em organização e decoração de casa, ideal para utilidades domésticas.' },
    { id: 'av5', name: 'Laura', role: 'Health & Wellness', image: 'https://i.imgur.com/rhvUP8G.png', hoverImage: 'https://www.trendlyai.space/avatars/laura.gif', description: 'Laura traz dicas de saúde e bem-estar, perfeita for produtos naturais e fitness.' },
    { id: 'av6', name: 'Maria', role: 'Daily Vlog', image: 'https://i.imgur.com/6vg7fRq.png', hoverImage: 'https://www.trendlyai.space/avatars/maria.gif', description: 'Maria compartilha sua rotina diária, gerando forte conexão e confiança com o público.' },
    { id: 'av7', name: 'Fábio', role: 'Tech Reviewer', image: 'https://i.imgur.com/5ymF1nv.png', hoverImage: 'https://www.trendlyai.space/avatars/fabio.gif', description: 'Fábio é especialista em reviews de tecnologia e gadgets, com visual moderno e técnico.' },
    { id: 'av8', name: 'Henrique', role: 'Gadget Enthusiast', image: 'https://i.imgur.com/WDsko8P.png', hoverImage: 'https://www.trendlyai.space/avatars/henrique.gif', description: 'Henrique adora testar novidades tecnológicas com um visual despojado e autêntico.' },
    { id: 'av9', name: 'Marcos', role: 'Fitness Coach', image: 'https://i.imgur.com/2NxpAmW.png', hoverImage: 'https://www.trendlyai.space/avatars/marcos.gif', description: 'Marcos é o avatar ideal para suplementos e equipamentos esportivos, transmitindo energia.' },
    { id: 'av10', name: 'Matheus', role: 'Business & Finance', image: 'https://i.imgur.com/8LQB3BC.png', hoverImage: 'https://www.trendlyai.space/avatars/matheus.gif', description: 'Com visual executivo, Matheus é perfeito para cursos, ferramentas SaaS e consultorias.' },
    { id: 'av11', name: 'Miguel', role: 'Cook & Foodie', image: 'https://i.imgur.com/loBeA7L.png', hoverImage: 'https://www.trendlyai.space/avatars/miguel.gif', description: 'Miguel traz autoridade e sabor para reviews de produtos de cozinha e alimentação.' },
    { id: 'av12', name: 'Pedro', role: 'Lifestyle & Travel', image: 'https://i.imgur.com/Bziwg0O.png', hoverImage: 'https://www.trendlyai.space/avatars/pedro.gif', description: 'Pedro foca em lifestyle e viagens, ideal para produtos de uso externo e aventura.' },
];

export const influencersWomen = [
    { id: 'w1', name: 'Ana', image: 'https://i.imgur.com/hrGOGFM.jpeg' },
    { id: 'w2', name: 'Fernanda', image: 'https://i.imgur.com/3mnJIzU.jpeg' },
    { id: 'w3', name: 'Carla', image: 'https://i.imgur.com/gu8PLki.jpeg' },
    { id: 'w4', name: 'Juliana', image: 'https://i.imgur.com/gPcVAPz.jpeg' },
    { id: 'w5', name: 'Laura', image: 'https://i.imgur.com/rhvUP8G.jpeg' },
    { id: 'w6', name: 'Maria', image: 'https://i.imgur.com/6vg7fRq.jpeg' },
];

export const influencersMen = [
    { id: 'm1', name: 'Fábio', image: 'https://i.imgur.com/5ymF1nv.jpeg' },
    { id: 'm2', name: 'Henrique', image: 'https://i.imgur.com/WDsko8P.jpeg' },
    { id: 'm3', name: 'Marcos', image: 'https://i.imgur.com/2NxpAmW.jpeg' },
    { id: 'm4', name: 'Matheus', image: 'https://i.imgur.com/8LQB3BC.jpeg' },
    { id: 'm5', name: 'Miguel', image: 'https://i.imgur.com/loBeA7L.jpeg' },
    { id: 'm6', name: 'Pedro', image: 'https://i.imgur.com/Bziwg0O.jpeg' },
];

export const loadingMessages = [
    'Escolhendo o melhor cenário...',
    'Ajustando a iluminação...',
    'Sincronizando áudio e roteiro...',
    'Finalizando sua experiência UGC...'
];

export const voiceTones = [
    'Grave', 'Médio', 'Agudo', 'Doce', 'Energético', 'Sábio'
];

export const hairColors = [
    { name: 'Preto', color: '#000000' },
    { name: 'Castanho Escuro', color: '#3d2b1f' },
    { name: 'Loiro', color: '#e6be8a' },
    { name: 'Ruivo', color: '#a52a2a' },
    { name: 'Grisalho', color: '#d3d3d3' }
];

export const hairStyles = ['Longo Liso', 'Curto', 'Ondulado', 'Cacheado/Crespo', 'Raspado'];
export const ethnicities = ['Caucasiano', 'Latino', 'Negro', 'Asiático', 'Indígena/Mestiço'];
export const authMarks = ['Sardas', 'Pinta/Sinal', 'Cicatriz Leve', 'Natural'];
export const faceShapes = ['Oval', 'Quadrado', 'Redondo', 'Fino'];
export const accessoryOptions = ['Óculos de Grau', 'Óculos de Sol', 'Piercing no Nariz', 'Tatuagem no Pescoço'];

export const hacks: HackItem[] = [
    {
        id: 'h1',
        title: 'Review Narrado (POV)',
        icon: '📦',
        image: 'https://i.imgur.com/UfBnd8A.mp4',
        bannerColor: '#1e0f0f',
        description: 'Foco total no produto sendo manuseado em primeira pessoa. O roteiro deve focar na experiência tátil e visual de abrir e usar o item.',
        tiktokUrl: 'https://www.tiktok.com',
        hasVeoBadge: true,
        isHighlighted: true,
        exampleVideos: [
            'https://i.imgur.com/UfBnd8A.mp4',
            'https://i.imgur.com/8LQB3BC.png',
            'https://i.imgur.com/WDsko8P.png',
            'https://i.imgur.com/5ymF1nv.png'
        ],
        examplePrompts: [
            'High quality unboxing of a tech gadget, focus on texture and lighting.',
            'ASMR style unboxing of a beauty product, natural wood background.',
            'POV perspective of opening a premium watch box, soft studio lighting.',
            'Close up of hands interacting with a modular keyboard, tech aesthetic.'
        ]
    },
    {
        id: 'h2',
        title: 'Transformação (Antes/Depois)',
        icon: '✨',
        image: 'https://i.imgur.com/32Hrn3g.mp4',
        bannerColor: '#0f1a1a',
        description: 'Mostra o problema real e como o produto resolve de forma mágica. Ideal para limpeza, beleza e organização.',
        tiktokUrl: 'https://www.tiktok.com',
        isHighlighted: false
    },
    {
        id: 'h3',
        title: 'Dicas de Especialista',
        icon: '💡',
        image: 'https://i.imgur.com/OQXds0Y.mp4',
        bannerColor: '#1a1a0f',
        description: 'O avatar atua como um especialista dando uma dica valiosa onde o produto é a solução chave.',
        tiktokUrl: 'https://www.tiktok.com',
        isHighlighted: false
    },
    {
        id: 'h4',
        title: 'Vlog de Estilo de Vida',
        icon: '🏠',
        image: 'https://i.imgur.com/QgfXnQv.mp4',
        bannerColor: '#0f141a',
        description: 'O produto inserido organicamente na rotina do influencer. Gera desejo por associação.',
        tiktokUrl: 'https://www.tiktok.com',
        isHighlighted: false
    },
    {
        id: 'h5',
        title: 'Desafio Viral',
        icon: '🔥',
        image: 'https://i.imgur.com/1CixWG7.mp4',
        bannerColor: '#1a0f1a',
        description: 'Usar ganchos e movimentos de dancinhas para prender a atenção e mostrar o produto no final.',
        tiktokUrl: 'https://www.tiktok.com',
        isHighlighted: false
    }
];

export const prompts: PromptItem[] = [
    {
        id: 'p1',
        title: 'Selfie pensativo',
        description: 'Apenas movimentos (sem áudio).',
        gif: 'https://i.imgur.com/OQXds0Y.mp4',
        prompt: JSON.stringify({
            "part": "PHONE_SELFIE_POSE_4",
            "duration": "0.0-8.0s",
            "visual_prompt": "Ultra-realistic UGC style. First-person perspective (POV) from a smartphone camera, held by a person, with subtle, iPhone-like handheld shake and micro-instability. The person makes a subtle 'thinking' gesture, perhaps touching their chin lightly, with a curious and thoughtful expression. Natural indoor lighting, high detail skin and hair textures. Photorealistic skin with subtle texture, natural pores, soft highlights, and realistic shadows. Natural hair movement with fine strand detail and believable physics. Accurate fabric behavior and product materials with correct reflections and weight. Clean, sharp image with natural color, balanced contrast, and realistic depth of field. No over-processing, no artificial cinematic effects. No mouth movement, no dialogue, no music. Authentic, unforced posture.",
            "audio_instructions": "No audio. Silent video.",
            "movement": "Subtle 'thinking' gesture, light touch to the chin, thoughtful eye contact, gentle head movements. Hands holding the phone are stable. Natural blinking and a curious, contemplative expression. Avoid static shots, but keep everything smooth and coherent. No robotic or stiff movements.",
            "technical_constraints": {
                "style": ["UGC", "Raw", "Authentic", "Hyper-realistic"],
                "prohibitions": ["No mouth movement", "No dialogue", "No music", "No overlays", "No artificial elements", "No robotic movements", "No stiff movements", "No exaggerated gestures"],
                "requirements": ["Ultra-realism", "Natural skin shaders", "Fluid movements", "Authentic expressions", "iPhone-like handheld camera motion, subtle instability"]
            }
        }, null, 2)
    },
    {
        id: 'p2',
        title: 'Selfie cabelo',
        description: 'Apenas movimentos (sem áudio).',
        gif: 'https://i.imgur.com/QgfXnQv.mp4',
        prompt: JSON.stringify({
            "part": "PHONE_SELFIE_POSE_2",
            "duration": "0.0-8.0s",
            "visual_prompt": "Ultra-realistic UGC style. First-person perspective (POV) from a smartphone camera, held by a person, with subtle, iPhone-like handheld shake and micro-instability. The person performs a gentle hair flip or adjustment, looking playfully at the camera. Natural indoor lighting, high detail skin and hair textures. Photorealistic skin with subtle texture, natural pores, soft highlights, and realistic shadows. Natural hair movement with fine strand detail and believable physics. Accurate fabric behavior and product materials with correct reflections and weight. Clean, sharp image with natural color, balanced contrast, and realistic depth of field. No over-processing, no artificial cinematic effects. No mouth movement, no dialogue, no music. Authentic, unforced posture.",
            "audio_instructions": "No audio. Silent video.",
            "movement": "Fluid hair flip or gentle hair adjustment, playful eye contact, subtle head movements. Hands holding the phone are stable. Natural blinking and an engaging, lighthearted expression. Avoid static shots, but keep everything smooth and coherent. No robotic or stiff movements.",
            "technical_constraints": {
                "style": ["UGC", "Raw", "Authentic", "Hyper-realistic"],
                "prohibitions": ["No mouth movement", "No dialogue", "No music", "No overlays", "No artificial elements", "No robotic movements", "No stiff movements", "No exaggerated gestures"],
                "requirements": ["Ultra-realism", "Natural skin shaders", "Fluid movements", "Authentic expressions", "iPhone-like handheld camera motion, subtle instability"]
            }
        }, null, 2)
    },
    {
        id: 'p3',
        title: 'Movimento Rítmico + Apontar',
        description: 'Vídeos com dancinha que terminam em venda. Frontal UGC shot. Rhythmic movement ending in CTA.',
        gif: 'https://i.imgur.com/1CixWG7.mp4',
        prompt: JSON.stringify({
            "prompt_name": "Frontal_CTA_Rhythmic",
            "video_generation_config": {
                "duration_seconds": 8,
                "aspect_ratio": "9:16"
            },
            "scene_sequence": [
                {
                    "part": "CTA_SEQUENCE",
                    "duration": "0.0-8.0s",
                    "visual_prompt": "Frontal UGC shot. Rhythmic movement ending in CTA. No mirror.",
                    "audio_instructions": "No audio. Silent video.",
                    "movement_timeline": [
                        "0.0-3.0s: Subject performs a simple side-to-side step-touch dance, shoulders moving, smiling.",
                        "3.0-6.0s: On the beat, stops the dance and immediately points down with both hands in a synchronized motion.",
                        "6.0-8.0s: Maintains the pointing gesture while doing a small playful hip sway, ending in a stable, smiling pose."
                    ]
                }
            ]
        }, null, 2)
    },
    {
        id: 'p4',
        title: 'Energia alta (Promoções rápidas)',
        description: 'Frontal UGC shot. High energy movement. No mirror. No mouth movement.',
        gif: 'https://i.imgur.com/4UkK3Es.mp4',
        prompt: JSON.stringify({
            "prompt_name": "Frontal_CTA_High_Energy",
            "video_generation_config": {
                "duration_seconds": 8,
                "aspect_ratio": "9:16"
            },
            "scene_sequence": [
                {
                    "part": "CTA_SEQUENCE",
                    "duration": "0.0-8.0s",
                    "visual_prompt": "Frontal UGC shot. High energy movement. No mirror. No mouth movement.",
                    "audio_instructions": "No audio. Silent video.",
                    "movement_timeline": [
                        "0.0-2.0s: Subject enters frame with a small, enthusiastic hop, smiling broadly. High energy but natural.",
                        "2.0-4.0s: Quickly points downwards with one hand while the other hand stays on the hip. Does a playful 'shaking' motion with the pointing finger to draw attention.",
                        "4.0-6.0s: Switches hands and points down with the other, maintaining a fun and energetic expression. Small rhythmic shoulder bounce.",
                        "6.0-8.0s: Final pose pointing down with both hands, big smile, holding still and steady."
                    ]
                }
            ]
        }, null, 2)
    },
    {
        id: 'p5',
        title: 'Convite amigável',
        description: 'Passar confiança e convidar o cliente de forma leve.',
        gif: 'https://i.imgur.com/5II2D99.mp4',
        prompt: JSON.stringify({
            "prompt_name": "Frontal_CTA_Friendly_Point",
            "video_generation_config": {
                "duration_seconds": 8,
                "aspect_ratio": "9:16"
            },
            "scene_sequence": [
                {
                    "part": "CTA_SEQUENCE",
                    "duration": "0.0-8.0s",
                    "visual_prompt": "Frontal UGC shot. Focus on pointing gesture. No mirror. No mouth movement. Silent video.",
                    "audio_instructions": "No audio. Silent video.",
                    "movement_timeline": [
                        "0.0-2.0s: Subject starts with a warm, genuine smile, making direct eye contact. A subtle, approving nod as if saying 'you'll love this'.",
                        "2.0-5.0s: Smoothly brings both hands to waist level, then extends index fingers pointing directly downwards. Performs 2 gentle 'taps' in the air towards the bottom of the screen.",
                        "5.0-7.0s: Maintains the pointing gesture while leaning slightly forward, eyes bright and inviting, confirming the action.",
                        "7.0-8.0s: Slowly relaxes arms back to sides, maintains a confident smile, and holds perfectly still until the end."
                    ]
                }
            ],
            "technical_constraints": {
                "style": ["UGC", "CTA", "Frontal"],
                "prohibitions": ["No mouth movement", "No dialogue", "No robotic gestures"],
                "requirements": ["Ultra-realism", "Fluid hand motion", "Engaging facial expression"]
            }
        }, null, 2)
    },
    {
        id: 'p6',
        title: 'Dancinhas e movimentos rítmicos',
        description: 'Engajamento e mostrar o movimento da roupa no corpo.',
        gif: 'https://i.imgur.com/32Hrn3g.mp4',
        prompt: JSON.stringify({
            "prompt_name": "Frontal_Rhythmic_Dance",
            "video_generation_config": {
                "duration_seconds": 8,
                "aspect_ratio": "9:16"
            },
            "scene_sequence": [
                {
                    "part": "DANCE_SEQUENCE",
                    "duration": "0.0-8.0s",
                    "visual_prompt": "Adult fictional character. Frontal shot, eye-level. High-energy but natural dance movement. No mirror, no phone. Photorealistic skin and fabric. No mouth movement. Silent video.",
                    "audio_instructions": "No audio. Silent video.",
                    "movement_timeline": [
                        "0.0-2.0s: Subject starts with a rhythmic step-touch side to side, shoulders moving in sync. Genuine, joyful smile. Direct eye contact.",
                        "2.0-4.0s: Small, fluid hip sway while raising hands to chest level, snapping fingers once naturally. Hair sways with the motion.",
                        "4.0-6.0s: Performs a gentle, slow body roll starting from shoulders to waist, showcasing fabric flexibility. Smile remains bright.",
                        "6.0-8.0s: Transitions back to a simple rhythmic sway, ends with a playful wink and a stable pose, holding still."
                    ]
                }
            ],
            "technical_constraints": {
                "style": ["UGC", "Viral Dance", "Frontal"],
                "prohibitions": ["No mouth movement", "No dialogue", "No robotic posing", "No mirror"],
                "requirements": ["Ultra-realism", "Fluid body physics", "Natural hair sway", "Rhythmic continuity"]
            }
        }, null, 2)
    },
    {
        id: 'p7',
        title: 'Revelação e admiração',
        description: 'Mostrar o look completo com uma transição fluida.',
        gif: 'https://i.imgur.com/HHpJzw9.mp4',
        prompt: JSON.stringify({
            "prompt_name": "Frontal_Reveal_Admire",
            "video_generation_config": {
                "duration_seconds": 8,
                "aspect_ratio": "9:16",
                "resolution": "1080p",
                "fps": 30
            },
            "scene_sequence": [
                {
                    "part": "FULL_SEQUENCE_8S",
                    "duration": "0.0-8.0s",
                    "visual_prompt": "Adult fictional character (reference image provided). Frontal shot, eye-level camera. Framing from torso to mid-thigh. Photorealistic skin, natural hair physics, accurate fabric behavior. No mirror, no phone in hand. No mouth movement. Silent video.",
                    "audio_instructions": "No audio. Silent video.",
                    "movement_timeline": [
                        "0.0-1.0s: Subject enters frame from side, centralizing in front of the camera. Relaxed posture, shoulders loose, slight smile. Direct eye contact with the lens.",
                        "1.0-3.0s: Subject holds up a folded product to chest level, then slowly lowers it to reveal the outfit being worn. Gentle, fluid arm movement.",
                        "3.0-5.0s: Subject gently smooths the fabric of the main garment with one hand. Performs a subtle, rhythmic weight shift from one foot to the other.",
                        "5.0-7.0s: Subject slightly turns torso to one side, then back to center, a small, confident pose to highlight the silhouette.",
                        "7.0-8.0s: Final: pose stable, arms relaxed, genuine smile, direct contact visual, holds still until the end."
                    ]
                }
            ],
            "technical_constraints": {
                "style": ["UGC", "Frontal", "Commercial", "Fashion"],
                "prohibitions": ["No mouth movement", "No dialogue", "No mirror", "No phone in hand", "No robotic movements"],
                "requirements": ["Ultra-realism", "Natural skin texture", "Subtle handheld camera shake", "Accurate fabric weight"]
            }
        }, null, 2)
    },
    {
        id: 'p8',
        title: 'Destaque de tecido',
        description: 'Close-up frontal focado na textura e qualidade do material.',
        gif: 'https://i.imgur.com/nEUWDQD.mp4',
        prompt: JSON.stringify({
            "prompt_name": "Frontal_Fabric_Highlight",
            "video_generation_config": {
                "duration_seconds": 8,
                "aspect_ratio": "9:16"
            },
            "scene_sequence": [
                {
                    "part": "FULL_SEQUENCE_8S",
                    "duration": "0.0-8.0s",
                    "visual_prompt": "Adult fictional character (reference image provided). Frontal UGC shot. Focus on fabric interaction. Photorealistic textures. No mirror, no phone. No mouth movement. Silent video.",
                    "audio_instructions": "No audio. Silent video.",
                    "movement_timeline": [
                        "0.0-1.0s: Subject already centralized, soft smile, direct eye contact with the lens.",
                        "1.0-3.0s: Slowly brings one hand to touch the fabric (sleeve or waist). Fingers subtly caress the material, showing texture.",
                        "3.0-5.0s: Fingers lightly pinch and release the fabric, demonstrating elasticity. Glances down at the fabric, then back to camera with a nod.",
                        "5.0-7.0s: Slow pivot of the hips to show drape and flow. One arm extends slightly then returns.",
                        "7.0-8.0s: Holds a satisfied pose, contented smile, direct eye contact, remains still."
                    ]
                }
            ],
            "technical_constraints": {
                "style": ["UGC", "Product Focus", "Frontal"],
                "prohibitions": ["No mouth movement", "No dialogue", "No mirror", "No phone in hand"],
                "requirements": ["Ultra-realism", "Detailed fabric physics", "Natural hand pressure"]
            }
        }, null, 2)
    }
];
