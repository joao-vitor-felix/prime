const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const brands = [
      {
        name: "Logitech",
        slug: "logitech",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/logitech-logo.png",
      },
      {
        name: "Epomaker",
        slug: "epomaker",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/epomaker-logo.png",
      },
      {
        name: "Redragon",
        slug: "redragon",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/redragon-logo.png",
      },
      {
        name: "HyperX",
        slug: "hyperx",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/hyperx-logo.png",
      },
      {
        name: "Razer",
        slug: "razer",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/razer-logo.png",
      },
      {
        name: "Force One",
        slug: "force-one",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/force-one-logo.png",
      },
      {
        name: "Dell",
        slug: "dell",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/dell-logo.png",
      },
      {
        name: "Sony",
        slug: "sony",
        logoUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/sony-logo.png",
      },
    ];

    await prisma.brand.createMany({
      data: brands,
    });

    const brandMap = {};
    brands.forEach((brand) => {
      brandMap[brand.name] = brand.id;
    });

    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://prime-project.s3.sa-east-1.amazonaws.com/mouses.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        brandId: brandMap["Logitech"],
        description:
          "Resolução máxima de 8000 DPI. Até 70 dias com uma carga completa. Bateria recarregável (500mAh). Conexão com até 3 dispositivos. 3 horas de uso com uma carga de 1 minuto. Tecnologia sem fio avançada de 2,4 GHz. Tracking em qualquer superficíe. Cliques Silenciosos. Rolagem MagSpeed. Design Ergonômico. Resolução máxima de 8000 DPI. Até 70 dias com uma carga completa. Bateria recarregável (500mAh). 3 horas de uso com uma carga de 1 minuto. Tecnologia sem fio avançada de 2,4 GHz. COMPATIBILIDADE Windows 10,11 ou superior macOS 10.15 ou superior iOS 13.4 ou superior iPadOS 14 ou superior Linux Chrome OSTM AndroidTM 5.0 ou superior BLUETOOTH® Tecnologia Bluetooth de baixa energia.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        brandId: brandMap["Logitech"],
        description:
          "Mouse PRO mais leve e rápido de todos os tempos. A nova arma perfeita para os melhores profissionais do mundo, que pesa menos de 63 gramas e proporciona deslizamento quase sem nenhum atrito. O PRO X SUPERLIGHT dá prosseguimento à nossa filosofia de design com ZERØ OPOSIÇÃO — nosso compromisso de remover todos os obstáculos para criar a conexão mais real possível entre o jogador e o jogo. Resultado de nossa colaboração contínua com os melhores profissionais do esporte, o PRO X SUPERLIGHT foi projetado com um único objetivo: o de criar um mouse para jogos sem fio PRO mais leve possível, mantendo a qualidade, a integridade estrutural e os padrões profissionais que a Logitech G oferece. Chegue em primeiro mais rápido do que nunca..",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-superlight.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-superlight.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-superlight.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-superlight.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        brandId: brandMap["Logitech"],
        description:
          "O G305 apresenta o sensor HERO de última geração com sensibilidade de 200 a 12.000 DPI para precisão de nível de competição. A tecnologia sem fio LIGHTSPEED oferece desempenho super rápido de 1ms.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "HyperX Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        brandId: brandMap["HyperX"],
        description:
          "HyperX Pulsefire Dart™ é um mouse sem fio de nível de jogos com uma conexão confiável 2,4GHz RF que o fará se perguntar por que esperou tanto para cortar o fio. Um adaptador sem fio está incluído para ampliar o alcance para configurações em PCs. Tem certificado Qi para carregamento sem fio1 e pode funcionar até 50 horas2 com uma única carga.\nCom um sensor Pixart 3389 e um design de botão dividido apresentando chaves de tecla Omron confiáveis, você terá a precisão necessária para esmagar os oponentes. Com modelo ergonômico, conta com apoios laterais em material sintético almofadado projetados para o seu conforto durante aquelas noites de jogo. Customize a iluminação RGB, crie macros, controle a vida da bateria e ajuste as configurações DPI com o software fácil de usar HyperX NGENUITY.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        brandId: brandMap["Razer"],
        description:
          "Com mais de 10 milhões de Razer DeathAdders vendidos, o mouse para jogos mais celebrado e premiado do mundo ganhou sua popularidade através de seu design ergonômico excepcional. Perfeitamente adequado para uma aderência na palma da mão, também funciona bem com estilos de garra e ponta dos dedos. O Razer DeathAdder V2 continua este legado, mantendo sua forma exclusiva enquanto perde mais peso para um manuseio mais rápido e melhorar o seu jogo. Indo além da ergonomia convencional do escritório, o design otimizado também oferece maior conforto para jogos — importante para aqueles ataques longos ou quando você está fazendo sua classificação na escada. Desfrute do movimento liso do mouse em qualquer superfície com os pés do mouse feitos do mais puro e mais alto grau de PTFE.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/keyboards.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        brandId: brandMap["Logitech"],
        description:
          "Chegou o MX Keys Mini, um teclado sem fio, compacto, inteligente e poderoso. Possui teclas com luz de fundo que acendem no momento que as mão se aproximam. Oferece também teclas de ditado inteligente, ativação e desativação de áudio e teclas de Emoji.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        brandId: brandMap["Logitech"],
        description:
          "Experimente um novo nível de desempenho com o MX Keys S. O MX Keys S é um teclado de alto desempenho, projetado para digitação confortável, rápida e fluida.\nAgora seu teclado conta com iluminação ainda mais inteligente, as teclas de luz de fundo acendem quando suas mãos se aproximam do teclado e automaticamente se iluminam ou se apagam para se adequar ao seu ambiente. Com o software Logi Option+ você pode configurar a duração e intensidade das luzes do seu MX Keys S.\nUma tecla, é tudo o que você precisa para automatizar suas tarefas repetitivas com o Smart Action, função disponível no software Logi Option+, idealizada para facilitar sua vida e aumentar sua produtividade.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        brandId: brandMap["Logitech"],
        description:
          "Digitação mecânica fluida e silenciosa: o teclado mecânico MX Mini possui teclas tactile silenciosas que proporcionam uma sensação e fluxo de outro nível\nTeclas de baixo perfil, mais conforto: um layout de teclado projetado para precisão sem esforço, compacto e com teclas mecânicas de baixo perfil para mais ergonomia.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        brandId: brandMap["Logitech"],
        description:
          "Digitação mecânica fluida e silenciosa: o teclado mecânico MX Mini possui teclas tactile silenciosas que proporcionam uma sensação e fluxo de outro nível\nTeclas de baixo perfil, mais conforto: um layout de teclado projetado para precisão sem esforço, compacto e com teclas mecânicas de baixo perfil para mais ergonomia",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        brandId: brandMap["Epomaker"],
        description:
          "Inspirado pela revolução industrial, o teclado mecânico da série EPOMAKER Theory foi projetado com teclados teóricos, com símbolos como lâmpada, garrafa de laboratório, ferramentas, etc. Nós o nomeamos Teoria por causa dessas teclas icônicas. Toda revolução industrial traz uma revolução de aprendizado e é assim que a EPOMAKER está trabalhando e aprendendo ao longo dos anos para entender melhor a indústria de teclados mecânicos.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        brandId: brandMap["Redragon"],
        description:
          "- Layout compacto de 79 teclas para os gamers que procuram deixar o máximo de espaço possível sobre a mesa sem perder as teclas numéricas.\n- Iluminação RGB.\n- Keycaps feitas com o método double shot injection resultando em legendas duradouras.\n- Teclado com cabo USB-C destacável\n- Teclado low profile",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/headphones.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        brandId: brandMap["Logitech"],
        description:
          "Expresse o seu estilo e viva a experiência de um áudio imersivo ao trabalhar e jogar com o Headset Sem Fio Logitech Zone Vibe 100. Com alto-falantes poderosos de 40 mm que contam com graves baixos e encorpados, agudos nítidos e baixa distorção de áudio, o Headset sem fio da Logitech dá vida às suas reuniões. Leve e respirável, ele pesa apenas 185 gramas, além de ser confortável para usar o dia todo, com almofadas macias com adaptação por memória e um design ajustável. .",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-vibe.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-vibe.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-vibe.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-vibe.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        brandId: brandMap["Logitech"],
        description:
          "O novo mouse PRO X SUPERLIGHT 2 é a evolução de um ícone agora mais rápido e mais preciso. Pesando apenas 60g e projetado em parceria com os principais jogadores profissionais do mundo. Conta com a inovadora tecnologia LIGHTFORCE de switches híbridos ópticos-mecânicos, que combinam velocidade e precisão. Ele tem também o novo sensor HERO 2, para que você tenha a experiência máxima em jogos com 32.000 DPI e mais de 500 IPS. Com o PRO X SUPERLIGHT 2 você tem conexão sem fio via receptor LIGHTSPEED e autonomia de bateria de até 95 horas*. O PRO X SUPERLIGHT 2 é um mouse PRO desenvolvido para quebrar qualquer barreira entre você e a vitória.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        brandId: brandMap["Logitech"],
        description:
          "Leve sua experiência em jogos a um nível totalmente novo. Projetado para a comunidade gamer, os headsets A10 possuem construção resistente e conforto prolongado para combater o cansaço, e para que você possa jogar por ainda mais tempo.\nO headset A10 conta com drivers ASTRO Audio de 40mm, que permitem ouvir seu jogo e o de seus companheiros de equipe de forma clara e precisa. Com baixa latência e comunicação de voz precisa, você estará sempre em sincronia com sua equipe.Os recursos do microfone unidirecional, o controle de volumeem linha e a funcionalidade flip-to-mute permitem que você tenha total controle da sua experiência de áudio em jogos.\nBem vindo à Família ASTRO!",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        brandId: brandMap["Logitech"],
        description:
          "Ofereça sua melhor imagem e um som excelente nas videochamadas com os Zone Wired Earbuds. Os avançados microfones com redução de ruídos localizados no fone esquerdo capturam claramente cada palavra. O som in-ear oferece qualidade profissional. Conecte instantaneamente seu celular 1Confira as especificações do dispositivo para verificar a compatibilidade, tablet1Confira as especificações do dispositivo para verificar a compatibilidade ou computador para criar o seu espaço onde quer que esteja trabalhando.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        brandId: brandMap["HyperX"],
        description:
          "Com um novo design e 2 anos de DTS Headphone:X Spatial Audio, o Cloud Stinger 2 mantém os fundamentos do Cloud Stinger e os refina.\nAinda pesando menos de 300g, o Cloud Stinger 2 é leve, mas também tem um grande impacto de áudio. Obtenha uma ampla resposta de frequência para que você não perca pistas de áudio importantes.que denunciem seus oponentes.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        brandId: brandMap["Razer"],
        description:
          "E se dissermos que você pode ter uma imersão completa nos jogos sem sentir que está usando um headset? Conheça o Razer Kraken X Lite. Ultraleve com apenas 250g e ultra imersivo com som surround 7.1, sente-se e aproveite por horas e horas–jogar por longos períodos nunca foi tão confortável.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_razer-kraken.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_razer-kraken.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_razer-kraken.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_razer-kraken.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/mousepads.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        brandId: brandMap["Logitech"],
        description:
          "Com o Mousepad Gamer PowerPlay da Loigitech esqueça os atrasos na entrada, desconexões com o campo de energia do seu mousepad PowerPlay, você ganha um corrente de carga direta para o seu mouse sem fio. As tecnologias PowerCore e Lighspeed presentes no mousepad Gamer da Logitech, superam qualquer barreira do sem fio.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        brandId: brandMap["Logitech"],
        description:
          "O Desk Mat da Logitech oferece o deslizamento perfeito e silencioso, sem esforço. É fabricado com poliéster reciclado para a superfície e camada interna. Uma base de borracha antiderrapante garante maior estabilidade.\nO Desk Mat da Logitech permite que você encontre o deslizamento perfeito e defina seu estilo, tudo isso enquanto mantém sua escrivaninha protegida. Escolha a cor que mais te representa: Lavender, Dark Rose ou Mid Grey.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        brandId: brandMap["Logitech"],
        description:
          "Sua superfície te oferecerá uma fricção ideal para jogos com baixo DPI, o que melhora o controle do mouse e o posicionamento preciso do cursor. Oferece mais amortecimento com seus 5 mm de espessura, para maior conforto e remove mais saliências da superfície da mesa.\nPartidas, paradas e mudanças de direção rápidas e abruptas não são problemas para o G740. A textura consistente da superfície melhora o desempenho do sensor, e sua base de borracha macia mantém a estabilidade.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-g740.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-g740.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-g740.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-g740.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        brandId: brandMap["Logitech"],
        description:
          "O Mouse Pad Studio Series da Logitech garante um deslizamento perfeito e silencioso. O revestimento à prova de derramamento resiste a contratempos acidentais. A base antiderrapante mantém uma fixação firme em sua mesa, não importa o que aconteça.\nO Mouse Pad Studio Series da Logitech é um mouse pad macio, suave, portátil e moderno que lhe permite deslizar com seu mouse favorito Logitech Mouse. A trama fina corta o atrito, assim seu mouse desliza sem esforço e silenciosamente, enquanto o revestimento à prova de derramamento resiste a contratempos acidentais.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        brandId: brandMap["Force One"],
        description:
          "Chega de movimentos limitados! aproveite todo o tamanho, estilo e deslize do force one skyhawk em sua edição de maior tamanho!\nO mousepad force one skyhawk conta com uma superfície gigante e profissional em tecido mesh fibertek de alta qualidade para movimentos rápidos, longos e precisos, proporcionando maior durabilidade, conforto e espaço para suas batalhas.\nJá a base antideslizante garante o apoio que você precisa para fazer suas jogadas com a segurança de um jogador profissional.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_force-dark.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_force-dark.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_force-dark.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_force-dark.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        brandId: brandMap["Force One"],
        description:
          "O mousepad Force One Skyhawk conta com uma superfície gigante e profissional em tecido Mesh Fibertek de alta qualidade para movimentos rápidos, longos e precisos, proporcionando maior durabilidade, conforto e espaço para suas batalhas. Já a base antideslizante garante o apoio que você precisa para fazer suas jogadas com a segurança de um jogador profissional.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_force-snow.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_force-snow.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_force-snow.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_force-snow.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/monitors.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        brandId: brandMap["Dell"],
        description:
          "Bela aparência: design moderno e elegante com um padrão texturizado sutil na parte de trás do monitor que proporciona visual exclusivo. O sistema oferece uma combinação harmônica de estilo e qualidade incríveis para todos os espaços.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        brandId: brandMap["Dell"],
        description:
          "Produza por mais tempo, independentemente do local de trabalho. Reduza a luz azul prejudicial usando este elegante monitor FHD de 23,8 com tecnologia ComfortView Plus.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        brandId: brandMap["Dell"],
        description:
          "Experimente a produtividade pura e simples em um monitor 4K de 27” com ampla conectividade e ComfortView Plus.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        brandId: brandMap["Dell"],
        description:
          "Monitor curvo WQHD de 34” com VESA DisplayHDR 400 e taxa de atualização de 144 Hz que proporciona uma experiência gamer realmente imersiva.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        brandId: brandMap["Dell"],
        description:
          "Monitor curvo QHD de 31,5” com tempo de resposta de 1 ms (MPRT)/2 ms (cinza a cinza), taxa de atualização de 165 Hz e cores 99% sRGB para oferecer imagens nítidas aos games e tornar a jogabilidade imersiva.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        brandId: brandMap["Dell"],
        description:
          "Experimente incrível nitidez de movimento e capacidade de resposta com o monitor IPS de 24,5”, taxa de atualização de 500 Hz e AMD FreeSync™ Premium.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://prime-project.s3.sa-east-1.amazonaws.com/speakers.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        brandId: brandMap["Logitech"],
        description:
          "Com 160 watts de potência de pico, este sistema de caixas de som 5.1 em áudio de alta qualidade que envolve todo o espaço soando incrível. Desfrute do verdadeiro som surround de qualquer fonte - sua TV, telefone, computador, console de jogos deve estar conectado à TV via RCA e muito mais. Você pode até ouvir áudio de cartões SD, pen drives ou rádio FM. O driver de subwoofer de 133,35 mm emite graves que você pode sentir, enquanto os cabos traseiros extralongos e o controle remoto, incluídos, facilitam a configuração e o uso.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        brandId: brandMap["Logitech"],
        description:
          "O trabalho remoto não deveria ser um fardo. O Logi Dock é uma dock station USB-C all-in-one que simplifica a configuração do escritório em casa, reduz a desordem da área de trabalho e ajuda os funcionários remotos a se sentirem mais produtivos. Certificado para as principais plataformas de videoconferência e fácil de configurar, o Logi Dock conecta tudo em uma única unidade arrumada que dispensa a necessidade de periféricos extras e elimina um emaranhado de cabos e fios.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_logi-dock.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_logi-dock.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_logi-dock.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_logi-dock.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        brandId: brandMap["Sony"],
        description:
          "Experimente som surround com o alto-falante traseiro sem fio do SA-Z9R.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        brandId: brandMap["Sony"],
        description:
          "A coluna sem fios SRS-XB43 combina graves profundos com vozes nítidas para proporcionar um som de festival. Além disso, é resistente e fácil de utilizar, pelo que todos podem simplesmente desfrutar da festa. Ver slideshow",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        brandId: brandMap["Sony"],
        description:
          "Compacta, leve e fácil de transportar, seja para onde for, a SRS-XB23 tem de ser o primeiro item na mala.",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_sony-XB23.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_sony-XB23.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_sony-XB23.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_sony-XB23.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        brandId: brandMap["Sony"],
        description:
          "Dê aos seus programas e filmes favoritos o som que eles merecem com uma barra de som 2.1 canais e subwoofer incorporado. Esta solução de economia de espaço é projetada para combinar com a decoração da sua casa e coloca você no meio da ação com a frente S-Force Pro. HDMI ARC2 e tecnologia Bluetooth 1 garantem uma conexão perfeita com a sua TV sem todos os fios. NFC: Não; Terminais de saída de entrada: HDMI (ARC), entrada de áudio óptico, USB tipo A. Material do revestimento: Metal",
        imageUrls: [
          "https://prime-project.s3.sa-east-1.amazonaws.com/01_sony-S200F.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/02_sony-S200F.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/03_sony-S200F.png",
          "https://prime-project.s3.sa-east-1.amazonaws.com/04_sony-S200F.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
