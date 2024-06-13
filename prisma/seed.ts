/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const brands = [
      {
        name: "Logitech",
        slug: "logitech",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/04939c6a-9fca-4aaf-af63-056e0f72a0ea-rljs71.png"
      },
      {
        name: "Epomaker",
        slug: "epomaker",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/618f5a31-b2d9-4e43-b40b-380e9362033f-jojhyw.png"
      },
      {
        name: "Redragon",
        slug: "redragon",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/da819aae-b69f-4122-8320-2aa4ed1206d9-arg4q6.png"
      },
      {
        name: "HyperX",
        slug: "hyperx",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/51634cd1-a341-412c-afdd-274f11ffc8f3-c188r0.png"
      },
      {
        name: "Razer",
        slug: "razer",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5fe3d92e-d53a-4638-87e7-670b5c3e2a37-7rjsxs.png"
      },
      {
        name: "Force One",
        slug: "force-one",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7ecccaac-fef2-4f8e-815d-e12310cc653d-mab6tw.png"
      },
      {
        name: "Dell",
        slug: "dell",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e4749d29-54e2-4e90-becf-6745798c70c7-3p5mfd.png"
      },
      {
        name: "Sony",
        slug: "sony",
        logoUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/bb742f5e-c43b-4e69-81b0-1bd87e21a387-dq0jv5.png"
      }
    ];

    await prisma.brand.createMany({
      data: brands
    });

    const createdBrands = await prisma.brand.findMany();

    const brandMap: Record<string, string> = {};

    createdBrands.forEach(brand => {
      brandMap[brand.name] = brand.id;
    });

    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5708df37-ee8b-4efb-8df8-e9e9b98e8c01-ho0xw2.png"
      }
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        brandId: brandMap["Logitech"],
        description:
          "Resolução máxima de 8000 DPI. Até 70 dias com uma carga completa. Bateria recarregável (500mAh). Conexão com até 3 dispositivos. 3 horas de uso com uma carga de 1 minuto. Tecnologia sem fio avançada de 2,4 GHz. Tracking em qualquer superficíe. Cliques Silenciosos. Rolagem MagSpeed. Design Ergonômico. Resolução máxima de 8000 DPI. Até 70 dias com uma carga completa. Bateria recarregável (500mAh). 3 horas de uso com uma carga de 1 minuto. Tecnologia sem fio avançada de 2,4 GHz. COMPATIBILIDADE Windows 10,11 ou superior macOS 10.15 ou superior iOS 13.4 ou superior iPadOS 14 ou superior Linux Chrome OSTM AndroidTM 5.0 ou superior BLUETOOTH® Tecnologia Bluetooth de baixa energia.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f61bcf7e-0360-42b9-80ca-1777b1e71620-otetkp.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6d7cd353-49b3-415d-bb59-93adec9b41ea-l4plt0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e01cee65-616b-430b-994b-f8813db69777-thphc5.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/bc28f8c7-1cb1-4ba9-b9b1-4cd1325d430f-x6ep3u.png"
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        brandId: brandMap["Logitech"],
        description:
          "Mouse PRO mais leve e rápido de todos os tempos. A nova arma perfeita para os melhores profissionais do mundo, que pesa menos de 63 gramas e proporciona deslizamento quase sem nenhum atrito. O PRO X SUPERLIGHT dá prosseguimento à nossa filosofia de design com ZERØ OPOSIÇÃO — nosso compromisso de remover todos os obstáculos para criar a conexão mais real possível entre o jogador e o jogo. Resultado de nossa colaboração contínua com os melhores profissionais do esporte, o PRO X SUPERLIGHT foi projetado com um único objetivo: o de criar um mouse para jogos sem fio PRO mais leve possível, mantendo a qualidade, a integridade estrutural e os padrões profissionais que a Logitech G oferece. Chegue em primeiro mais rápido do que nunca..",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/cfe93603-a025-46b9-bede-b8a1c4bc25b4-idaumz.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5c044fc3-91a8-4265-9aab-a57ccbff9a2b-m98ja0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a29712ab-54c3-40a8-8eb2-545e085b3d6b-qe5e93.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b584ba86-e26f-470f-ba94-30b4db89db44-40f9t2.png"
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5 // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        brandId: brandMap["Logitech"],
        description:
          "O G305 apresenta o sensor HERO de última geração com sensibilidade de 200 a 12.000 DPI para precisão de nível de competição. A tecnologia sem fio LIGHTSPEED oferece desempenho super rápido de 1ms.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/8410e0d3-4441-48da-a5b4-c1bf249dd2c0-6pfvtn.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/28be46e5-3657-4c4e-8e3a-2717fba21350-2ti76m.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7a8f342c-e5cf-4620-924d-7daed1a41650-jk7x9f.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/8b5aee38-e1ba-4066-87be-5189710db265-t3609o.png"
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15 // 15% discount
      },
      {
        name: "HyperX Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        brandId: brandMap["HyperX"],
        description:
          "HyperX Pulsefire Dart™ é um mouse sem fio de nível de jogos com uma conexão confiável 2,4GHz RF que o fará se perguntar por que esperou tanto para cortar o fio. Um adaptador sem fio está incluído para ampliar o alcance para configurações em PCs. Tem certificado Qi para carregamento sem fio1 e pode funcionar até 50 horas2 com uma única carga.\nCom um sensor Pixart 3389 e um design de botão dividido apresentando chaves de tecla Omron confiáveis, você terá a precisão necessária para esmagar os oponentes. Com modelo ergonômico, conta com apoios laterais em material sintético almofadado projetados para o seu conforto durante aquelas noites de jogo. Customize a iluminação RGB, crie macros, controle a vida da bateria e ajuste as configurações DPI com o software fácil de usar HyperX NGENUITY.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5c7581c9-d2ff-48cc-9295-0162fb1a8334-1xd5uq.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2a103a1f-0b55-43cd-8b23-e7bf662da750-cmorrv.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/dcf63808-0121-4b02-b70f-10806d66afc4-7s04kc.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9f479dd7-63ec-40d7-991b-e2615cd60343-2xbhct.png"
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        brandId: brandMap["Razer"],
        description:
          "Com mais de 10 milhões de Razer DeathAdders vendidos, o mouse para jogos mais celebrado e premiado do mundo ganhou sua popularidade através de seu design ergonômico excepcional. Perfeitamente adequado para uma aderência na palma da mão, também funciona bem com estilos de garra e ponta dos dedos. O Razer DeathAdder V2 continua este legado, mantendo sua forma exclusiva enquanto perde mais peso para um manuseio mais rápido e melhorar o seu jogo. Indo além da ergonomia convencional do escritório, o design otimizado também oferece maior conforto para jogos — importante para aqueles ataques longos ou quando você está fazendo sua classificação na escada. Desfrute do movimento liso do mouse em qualquer superfície com os pés do mouse feitos do mais puro e mais alto grau de PTFE.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/81e56317-826f-4e89-8a5f-52f4cb29de12-5jk68j.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/657420f8-b3c8-4573-8e4e-4efb55bc957b-g0npvu.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3df5b074-a806-46bd-8087-a0f58c9faa91-wiafu3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/18eee290-8549-41ae-86e6-d388d3c1431a-m16w6s.png"
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0
      },
      {
        name: "Logitech M720 Triathlon",
        slug: "logitech-m720-triathlon",
        brandId: brandMap["Logitech"],
        description:
          "Conheça o mouse de alta precisão que é integrado para conforto definitivo, resistência e versatilidade. Com controles extras, uma rolagem de modo duplo e rastreamento dpi ajustável, o M720 lhe fornece o poder para adereçar qualquer tarefa.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b6cfa852-8350-4b3a-a307-8a9cf7598c8b-j0xzh3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c1886b7c-4fbf-4363-a2fe-1b19bede2320-6axklo.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b8536b6c-6b45-4055-a67b-28c4ef4f1d83-250y39.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/92cb9ff4-265a-40ed-9dab-d047cbc7ab93-akzgs6.png"
        ],
        basePrice: 260,
        categoryId: mousesCategory.id,
        discountPercentage: 15 // 15% discount
      }
    ];

    await prisma.product.createMany({
      data: mouses
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/eaa5a32b-eb66-472c-8550-722eae11ae3f-pv4uj8.png"
      }
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        brandId: brandMap["Logitech"],
        description:
          "Chegou o MX Keys Mini, um teclado sem fio, compacto, inteligente e poderoso. Possui teclas com luz de fundo que acendem no momento que as mão se aproximam. Oferece também teclas de ditado inteligente, ativação e desativação de áudio e teclas de Emoji.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fd920a02-24d9-464c-80a7-8323a2c48a74-33zg48.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/957b8490-e2e6-4032-8bb3-bdfff39b880a-w8rm3f.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fe65653d-1244-4dba-8ef3-ab9ef753d75c-otkh7q.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1f4b5e9a-a640-4bff-b291-83ba8a05a776-ausijr.png"
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        brandId: brandMap["Logitech"],
        description:
          "Experimente um novo nível de desempenho com o MX Keys S. O MX Keys S é um teclado de alto desempenho, projetado para digitação confortável, rápida e fluida.\nAgora seu teclado conta com iluminação ainda mais inteligente, as teclas de luz de fundo acendem quando suas mãos se aproximam do teclado e automaticamente se iluminam ou se apagam para se adequar ao seu ambiente. Com o software Logi Option+ você pode configurar a duração e intensidade das luzes do seu MX Keys S.\nUma tecla, é tudo o que você precisa para automatizar suas tarefas repetitivas com o Smart Action, função disponível no software Logi Option+, idealizada para facilitar sua vida e aumentar sua produtividade.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a9b86133-a858-42d7-9073-c3b7368d72f8-m9yl8y.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c17e7d6a-d701-476d-a9e4-0747c8c6a28e-31wytt.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/4dbcb7c3-942f-4358-a797-d26a15a0a911-5e1jv4.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2407dcca-ec39-4a64-b45e-dfda8520a103-du02k1.png"
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        brandId: brandMap["Logitech"],
        description:
          "Digitação mecânica fluida e silenciosa: o teclado mecânico MX Mini possui teclas tactile silenciosas que proporcionam uma sensação e fluxo de outro nível\nTeclas de baixo perfil, mais conforto: um layout de teclado projetado para precisão sem esforço, compacto e com teclas mecânicas de baixo perfil para mais ergonomia.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/8526f63f-92ea-4826-9b68-cef2ab7495f0-u67teu.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9a405bef-ed08-4849-b3a7-39fd13ece3db-qeno4j.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f499dd20-f168-41cf-bb33-967ea9c97e8c-jowbfg.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/207a0816-2890-4797-842c-187a00ea51af-58nqzp.png"
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        brandId: brandMap["Logitech"],
        description:
          "Digitação mecânica fluida e silenciosa: o teclado mecânico MX Mini possui teclas tactile silenciosas que proporcionam uma sensação e fluxo de outro nível\nTeclas de baixo perfil, mais conforto: um layout de teclado projetado para precisão sem esforço, compacto e com teclas mecânicas de baixo perfil para mais ergonomia",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/42132fbf-f0d2-4076-bc24-540e267a583b-tbfuuf.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d9118c4d-41e7-4ee8-9172-086b214188df-918ah0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3d378c7c-f952-460a-ac0d-59644cc180ae-fsmt9h.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ac7d4c1a-8791-4c97-9ce4-6cb0a9430b8f-mk1c1y.png"
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15 // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        brandId: brandMap["Epomaker"],
        description:
          "Inspirado pela revolução industrial, o teclado mecânico da série EPOMAKER Theory foi projetado com teclados teóricos, com símbolos como lâmpada, garrafa de laboratório, ferramentas, etc. Nós o nomeamos Teoria por causa dessas teclas icônicas. Toda revolução industrial traz uma revolução de aprendizado e é assim que a EPOMAKER está trabalhando e aprendendo ao longo dos anos para entender melhor a indústria de teclados mecânicos.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/8eaf4318-4ec9-43a8-9fd4-300bcafc2bc3-t8tglh.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d7dbf90f-16b4-4bd7-ba48-0b071a4fb3da-ph9bb6.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/70bf98c1-0cdd-4a9e-a4b8-a49eaf809081-kmao8t.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9df6a5c4-5e75-4fed-b226-6c7eb087f4ca-4b9e6c.png"
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        brandId: brandMap["Redragon"],
        description:
          "- Layout compacto de 79 teclas para os gamers que procuram deixar o máximo de espaço possível sobre a mesa sem perder as teclas numéricas.\n- Iluminação RGB.\n- Keycaps feitas com o método double shot injection resultando em legendas duradouras.\n- Teclado com cabo USB-C destacável\n- Teclado low profile",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/26d6a13c-41e4-412a-8139-893f29e6ed22-b14pyz.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3161bf91-3d4a-442c-a1da-5a5f01bfa6d3-jmrqw.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1c48c404-c0c8-4b04-ae4e-a11b72046b6d-41gr5l.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d717481e-9f51-4c81-8722-3d0a934624b9-7jaqka.png"
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25 // 10% discount
      }
    ];

    await prisma.product.createMany({
      data: keyboards
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f516c051-db2f-43bb-a4d7-cc7ae363f83f-x99mxn.png"
      }
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        brandId: brandMap["Logitech"],
        description:
          "Expresse o seu estilo e viva a experiência de um áudio imersivo ao trabalhar e jogar com o Headset Sem Fio Logitech Zone Vibe 100. Com alto-falantes poderosos de 40 mm que contam com graves baixos e encorpados, agudos nítidos e baixa distorção de áudio, o Headset sem fio da Logitech dá vida às suas reuniões. Leve e respirável, ele pesa apenas 185 gramas, além de ser confortável para usar o dia todo, com almofadas macias com adaptação por memória e um design ajustável.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/617381f6-ae52-4837-bff6-b4af3e8cc9de-cuwa00.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fef43c0a-7b84-48f2-9005-2ef272854fb7-59kdnh.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f9276eb1-a790-4f58-bf26-9f60de4e8b0e-ogaiw2.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b04e787f-b516-4a5a-ace2-9e0ff0c43652-guymjj.png"
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        brandId: brandMap["Logitech"],
        description:
          "Desenvolvido por profissionais. PROJETADO PARA A VITÓRIA. O headset PRO X 2 LIGHTSPEED apresenta som pro-grade, LIGHTSPEED sem fio, além de enorme conforto para os níveis mais altos de competição. Ouça cada passo, ação e movimento com a paisagem sonora imersiva oferecida pelos drivers de grafeno.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/377d85a6-2e3a-4367-9250-d528aea30440-cnu60s.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e32d6366-1371-4e9b-b594-c3a96d9d8480-3e0zb3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ba050800-a600-45e9-a317-4da06c0b43e1-h72n42.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f878c331-460b-43e0-8d73-21d2ba71fd5c-x8xsfx.png"
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        brandId: brandMap["Logitech"],
        description:
          "Leve sua experiência em jogos a um nível totalmente novo. Projetado para a comunidade gamer, os headsets A10 possuem construção resistente e conforto prolongado para combater o cansaço, e para que você possa jogar por ainda mais tempo.\nO headset A10 conta com drivers ASTRO Audio de 40mm, que permitem ouvir seu jogo e o de seus companheiros de equipe de forma clara e precisa. Com baixa latência e comunicação de voz precisa, você estará sempre em sincronia com sua equipe.Os recursos do microfone unidirecional, o controle de volumeem linha e a funcionalidade flip-to-mute permitem que você tenha total controle da sua experiência de áudio em jogos.\nBem vindo à Família ASTRO!",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f7ab9454-bce6-4674-abde-7cae1ea590ec-3us24m.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6b9e2410-f3bd-4d04-9ba2-28712dfb3102-lh3hy5.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6fd64566-d806-4a11-8a6a-d6b6e212c687-d14z98.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ff0bf0ec-cc93-4508-bdeb-18ed46880daa-4l6gkb.png"
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15 // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        brandId: brandMap["Logitech"],
        description:
          "Ofereça sua melhor imagem e um som excelente nas videochamadas com os Zone Wired Earbuds. Os avançados microfones com redução de ruídos localizados no fone esquerdo capturam claramente cada palavra. O som in-ear oferece qualidade profissional. Conecte instantaneamente seu celular 1Confira as especificações do dispositivo para verificar a compatibilidade, tablet1Confira as especificações do dispositivo para verificar a compatibilidade ou computador para criar o seu espaço onde quer que esteja trabalhando.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/43c7bcf0-7362-49f8-bbde-f24311f80308-l6h1vy.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/083f8a9a-dc35-45ca-b035-35441e6cb87f-3wikph.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/61298522-f08f-4b0e-aaf2-854f15309bd8-4ghato.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c09e2ce3-fc71-4444-ba8d-70cadbd3e942-cth6ct.png"
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        brandId: brandMap["HyperX"],
        description:
          "Com um novo design e 2 anos de DTS Headphone:X Spatial Audio, o Cloud Stinger 2 mantém os fundamentos do Cloud Stinger e os refina.\nAinda pesando menos de 300g, o Cloud Stinger 2 é leve, mas também tem um grande impacto de áudio. Obtenha uma ampla resposta de frequência para que você não perca pistas de áudio importantes.que denunciem seus oponentes.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c2199365-8f0f-41e8-84c3-53c0037f69b8-oxvmyz.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9e211dba-7ae0-4777-91a4-4e0ed7c38aaa-dzx3s.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/83aa80fd-395a-4882-90c8-9ff2b3bb671c-81yll5.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/0b139d8d-4528-4e36-93e2-2435499b35ac-ghx4a2.png"
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        brandId: brandMap["Razer"],
        description:
          "E se dissermos que você pode ter uma imersão completa nos jogos sem sentir que está usando um headset? Conheça o Razer Kraken X Lite. Ultraleve com apenas 250g e ultra imersivo com som surround 7.1, sente-se e aproveite por horas e horas–jogar por longos períodos nunca foi tão confortável.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7cefac61-28f5-42cc-8441-9e6d89cebbc5-pbckc3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/283b1b0e-8ae8-439c-a75d-876d4fb8d4a9-kmrv1m.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9e8de6ca-7c9e-491f-b28a-bef463bfe806-szrqkr.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7a235b3c-558c-4e34-8908-f1063e652be9-xocfv8.png"
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0 // 10% discount
      }
    ];

    await prisma.product.createMany({
      data: headphones
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/23842a87-c56e-463d-bbc9-7d163ac67ae8-9plgmd.png"
      }
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        brandId: brandMap["Logitech"],
        description:
          "Com o Mousepad Gamer PowerPlay da Loigitech esqueça os atrasos na entrada, desconexões com o campo de energia do seu mousepad PowerPlay, você ganha um corrente de carga direta para o seu mouse sem fio. As tecnologias PowerCore e Lighspeed presentes no mousepad Gamer da Logitech, superam qualquer barreira do sem fio.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2a40a31f-f466-488f-bbc3-5ab9b20f358d-on5ldd.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/cf604de3-6ba5-43f1-8a0c-d8987f0e6d75-l22wj0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/24d630e8-d16d-492a-bb1d-e713fd813c12-ti1f7x.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ec5d733b-5744-4961-828d-e96f1fde7894-x3442a.png"
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        brandId: brandMap["Logitech"],
        description:
          "O Desk Mat da Logitech oferece o deslizamento perfeito e silencioso, sem esforço. É fabricado com poliéster reciclado para a superfície e camada interna. Uma base de borracha antiderrapante garante maior estabilidade.\nO Desk Mat da Logitech permite que você encontre o deslizamento perfeito e defina seu estilo, tudo isso enquanto mantém sua escrivaninha protegida. Escolha a cor que mais te representa: Lavender, Dark Rose ou Mid Grey.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7c6ea5b4-8536-43ae-ac15-339cb9b02608-n9raei.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/68728165-33db-4faf-bb9f-3ae43960bede-ji7547.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/74f698e0-390e-4eb6-892b-9bf68613d4af-qlcufs.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/72ee3426-fb7c-49bf-8bde-79b6188ed011-1nss0n.png"
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        brandId: brandMap["Logitech"],
        description:
          "Sua superfície te oferecerá uma fricção ideal para jogos com baixo DPI, o que melhora o controle do mouse e o posicionamento preciso do cursor. Oferece mais amortecimento com seus 5 mm de espessura, para maior conforto e remove mais saliências da superfície da mesa.\nPartidas, paradas e mudanças de direção rápidas e abruptas não são problemas para o G740. A textura consistente da superfície melhora o desempenho do sensor, e sua base de borracha macia mantém a estabilidade.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/46dff660-b4be-4423-88f3-0b81e673c923-culmza.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1a04648d-0b54-452d-9abe-18514f5d41ad-59v0o7.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/153b490c-6a1a-4db1-be06-a117a06f9a6a-ofzvvc.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3cb51740-834e-407a-9b33-d3d07831e7dc-gv99k9.png"
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        brandId: brandMap["Logitech"],
        description:
          "O Mouse Pad Studio Series da Logitech garante um deslizamento perfeito e silencioso. O revestimento à prova de derramamento resiste a contratempos acidentais. A base antiderrapante mantém uma fixação firme em sua mesa, não importa o que aconteça.\nO Mouse Pad Studio Series da Logitech é um mouse pad macio, suave, portátil e moderno que lhe permite deslizar com seu mouse favorito Logitech Mouse. A trama fina corta o atrito, assim seu mouse desliza sem esforço e silenciosamente, enquanto o revestimento à prova de derramamento resiste a contratempos acidentais.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c3a7ba47-0e76-4031-8b3d-5d94dbb61c7b-k45quc.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/983fb259-141f-4956-a602-383967a998d0-61tj3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/34002638-d75d-44dc-9b7e-1a8e25b64722-6lcp9e.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b233972b-b169-4814-b2fa-3b7b40d07ef1-dcr81v.png"
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15 // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        brandId: brandMap["Force One"],
        description:
          "Chega de movimentos limitados! aproveite todo o tamanho, estilo e deslize do force one skyhawk em sua edição de maior tamanho!\nO mousepad force one skyhawk conta com uma superfície gigante e profissional em tecido mesh fibertek de alta qualidade para movimentos rápidos, longos e precisos, proporcionando maior durabilidade, conforto e espaço para suas batalhas.\nJá a base antideslizante garante o apoio que você precisa para fazer suas jogadas com a segurança de um jogador profissional.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1ec8f2a5-a714-463c-82b0-52eeb16fa4c2-x7k2s6.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/be28dbfc-e934-4825-a014-3a82082d5fcc-vezwlp.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f29c9da3-8bb5-4646-a9e3-474b9d8ec8ea-xjulgs.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1721be90-1b54-4f6d-9b5f-37c58df47990-zcern9.png"
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        brandId: brandMap["Force One"],
        description:
          "O mousepad Force One Skyhawk conta com uma superfície gigante e profissional em tecido Mesh Fibertek de alta qualidade para movimentos rápidos, longos e precisos, proporcionando maior durabilidade, conforto e espaço para suas batalhas. Já a base antideslizante garante o apoio que você precisa para fazer suas jogadas com a segurança de um jogador profissional.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/da403a17-711f-46b2-960c-ffd52c8e6d47-x7tx5v.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6e479966-479d-4e5e-aced-b287b987d3e7-veq280.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d2291cba-46bd-4b45-97e6-904390455b47-xjkr33.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9ef52386-7380-465b-ae27-cb268caa0677-zcom0y.png"
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5 // 10% discount
      }
    ];

    await prisma.product.createMany({
      data: mousepads
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/46cdf0b5-9341-4051-8b9e-afc890c29fb5-5franb.png"
      }
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        brandId: brandMap["Dell"],
        description:
          "Bela aparência: design moderno e elegante com um padrão texturizado sutil na parte de trás do monitor que proporciona visual exclusivo. O sistema oferece uma combinação harmônica de estilo e qualidade incríveis para todos os espaços.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/03f48aad-2863-4c6b-8648-23cfe83bb9a0-l17xro.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a28821c7-3e39-41d3-ad41-33ee48844832-owwhm1.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b7d96b3c-167f-4ed3-a504-7f3ea2b031d8-x9wd56.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7466b0f4-f708-4757-af03-0e7357a68347-te7tat.png"
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15 // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        brandId: brandMap["Dell"],
        description:
          "Produza por mais tempo, independentemente do local de trabalho. Reduza a luz azul prejudicial usando este elegante monitor FHD de 23,8 com tecnologia ComfortView Plus.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/0caa2bb4-12c5-4e44-b2c8-2e38b86ae1f9-rax9q4.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f3b50fbd-6bbc-4dea-b678-54317bd4bd2a-t64umf.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/056adfba-255e-4ee5-ba4a-8a782b659dba-y0thty.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e13ff934-b3dd-4ab6-aa4f-1534c9e4f2d7-w5lwxn.png"
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        brandId: brandMap["Dell"],
        description:
          "Experimente a produtividade pura e simples em um monitor 4K de 27” com ampla conectividade e ComfortView Plus.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/90415646-1eee-4ef0-ac08-4194409eeef7-60cp0c.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7a904eda-0617-4754-8fc7-7dc3e9d6850f-j2mxl3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/80deed98-699f-4aa4-9f36-50093792eea5-apn21y.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e0c11808-bacf-4b5b-8b73-d64c9f6c817c-2cn6it.png"
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        brandId: brandMap["Dell"],
        description:
          "Monitor curvo WQHD de 34” com VESA DisplayHDR 400 e taxa de atualização de 144 Hz que proporciona uma experiência gamer realmente imersiva.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/51fdb6fd-02f7-423f-9393-1cb6292644fb-1wl9gu.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/b933ddc7-22fc-49ad-9a33-dbd77024acf8-5o5er5.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ecfd9e29-c9fe-4e90-813f-ca5a24bf3353-j9eno0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d186cb40-0e10-4979-b99f-79ca772c7176-qu5bvz.png"
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        brandId: brandMap["Dell"],
        description:
          "Monitor curvo QHD de 31,5” com tempo de resposta de 1 ms (MPRT)/2 ms (cinza a cinza), taxa de atualização de 165 Hz e cores 99% sRGB para oferecer imagens nítidas aos games e tornar a jogabilidade imersiva.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7405417c-9267-4bb6-9756-e39865cc32be-yi0au.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/c2f776de-148b-440c-ae6c-2598b577f406-4q25l5.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/71a8f4e5-1a94-4185-8ba1-aabc7ce7eac9-k7hwu0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e169f217-fb9c-4d51-88ba-f0eb30bb9f33-pw22pz.png"
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        brandId: brandMap["Dell"],
        description:
          "Experimente incrível nitidez de movimento e capacidade de resposta com o monitor IPS de 24,5”, taxa de atualização de 500 Hz e AMD FreeSync™ Premium.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ab930783-f290-45ed-9d39-a2ed19428e48-al6r5z.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fe4719d4-fa00-42c5-a5bf-0374af9b590f-ecqwga.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5af93f2e-db5d-464e-9e16-d1a8c01dd8ad-akt5yv.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/3a9fd9f4-6f9a-42e5-bff0-cac435c3b070-zid8e0.png"
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10 // 10% discount
      }
    ];

    await prisma.product.createMany({
      data: monitors
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2a567438-0374-45ec-a5dc-19712d693618-zax8ks.png"
      }
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        brandId: brandMap["Logitech"],
        description:
          "Com 160 watts de potência de pico, este sistema de caixas de som 5.1 em áudio de alta qualidade que envolve todo o espaço soando incrível. Desfrute do verdadeiro som surround de qualquer fonte - sua TV, telefone, computador, console de jogos deve estar conectado à TV via RCA e muito mais. Você pode até ouvir áudio de cartões SD, pen drives ou rádio FM. O driver de subwoofer de 133,35 mm emite graves que você pode sentir, enquanto os cabos traseiros extralongos e o controle remoto, incluídos, facilitam a configuração e o uso.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/4b8b33b7-8112-4134-b761-5533986c00a3-b5j8co.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/72df2fbd-3284-45d1-a98d-7e1d73455378-94oc0r.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/17022f67-ad04-4ca9-8070-7acf55f95fd6-2d9t8a.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2ddc3c0d-94e4-489c-987b-5e5b6d5b67f8-4e4pk7.png"
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5 // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        brandId: brandMap["Logitech"],
        description:
          "O trabalho remoto não deveria ser um fardo. O Logi Dock é uma dock station USB-C all-in-one que simplifica a configuração do escritório em casa, reduz a desordem da área de trabalho e ajuda os funcionários remotos a se sentirem mais produtivos. Certificado para as principais plataformas de videoconferência e fácil de configurar, o Logi Dock conecta tudo em uma única unidade arrumada que dispensa a necessidade de periféricos extras e elimina um emaranhado de cabos e fios.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fb7e3aed-bc97-4bf6-bb19-0c3ead62267b-cukwpp.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/7e36c52b-4e6b-47c4-bda6-7a44b5d47beb-59vqxs.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5c315323-02dd-4ed0-8844-1916c46797b5-ofz5lr.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/87057ca0-5f35-4691-ad3d-7b21607d1fa7-gv9ztu.png"
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15 // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        brandId: brandMap["Sony"],
        description:
          "Experimente som surround com o alto-falante traseiro sem fio do SA-Z9R.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e617e5a5-0f14-486e-b046-89afc9d86233-o2pxdo.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d89fa91f-035d-44ee-a195-01c8451a4724-9inzr3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/433ffab0-5654-48dd-ac51-51cad9e0608d-edcmym.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a99c1c12-d157-4e64-9188-2bb8b05491e3-j81a65.png"
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10 // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        brandId: brandMap["Sony"],
        description:
          "A coluna sem fios SRS-XB43 combina graves profundos com vozes nítidas para proporcionar um som de festival. Além disso, é resistente e fácil de utilizar, pelo que todos podem simplesmente desfrutar da festa. Ver slideshow",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ff6a151f-09e6-4ce0-abf7-fece07f8dc92-gxgbj0.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/a17465ac-d2d0-4008-bb73-2118295feed2-kte061.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/28ba7117-0006-41d0-8b3a-feb3e67ebcb5-rtzxd2.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/001c6314-ca59-4ea1-b96c-60619f64acae-5g9sx1.png"
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        brandId: brandMap["Sony"],
        description:
          "Compacta, leve e fácil de transportar, seja para onde for, a SRS-XB23 tem de ser o primeiro item na mala.",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/02cb02bd-3acf-4c79-bc43-9e9596065521-f1tve5.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/5b7c69c0-eecc-46ba-a1ef-b3a9a74c058a-x6aj1m.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/76c88c9f-ad1d-4b6b-aef4-56a7c962635f-3gfmi3.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/6e999fcb-816b-4ccc-aa01-12b8eec493c1-q9fa1g.png"
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0 // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        brandId: brandMap["Sony"],
        description:
          "Dê aos seus programas e filmes favoritos o som que eles merecem com uma barra de som 2.1 canais e subwoofer incorporado. Esta solução de economia de espaço é projetada para combinar com a decoração da sua casa e coloca você no meio da ação com a frente S-Force Pro. HDMI ARC2 e tecnologia Bluetooth 1 garantem uma conexão perfeita com a sua TV sem todos os fios. NFC: Não; Terminais de saída de entrada: HDMI (ARC), entrada de áudio óptico, USB tipo A. Material do revestimento: Metal",
        imageUrls: [
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/8fe65d9b-e965-4e39-82ce-e850d0a0549e-uk14e7.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ff292fd5-a462-41e9-8452-0b98ea99cb1a-y2iuzo.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/bcb794d6-964e-4575-953d-1c923f89673c-ytqi4d.png",
          "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/d6a56608-1ab9-4f1b-b40a-56931de70ab4-wovt9a.png"
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0 // 10% discount
      }
    ];

    await prisma.product.createMany({
      data: speakers
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
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
