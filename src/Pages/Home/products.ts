import imagemPc from "@/assets/imgs/Computers/PC7.jpeg";
import PC1 from "@/assets/imgs/Computers/PC1.jpeg";
import PC2 from "@/assets/imgs/Computers/PC2.jpeg";
import PC3 from "@/assets/imgs/Computers/PC3.jpeg";
import PC4 from "@/assets/imgs/Computers/PC4.jpeg";
import PC5 from "@/assets/imgs/Computers/PC5.jpeg";
import PC6 from "@/assets/imgs/Computers/PC6.jpeg";
import PC7 from "@/assets/imgs/Computers/PC7.jpeg";

import { ProductModel } from "@/models/ProductModel";
//Teste
export const productsList: ProductModel[] = [
    {
        id: 1,
        imgSource: imagemPc,
        title: "PC Gamer Concórdia AMD Ryzen",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 4.000,00",
            hasPromotion: true,
            promotionalPrice: "R$ 3.750,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "O PC Gamer Concórdia consta com o poderoso AMD Ryzen 5 3400G, com seus 8GB de memoria RAM e sua placa de video Radeon RX Vega 11 você podera arrasar nos melhores jogos da ultima gerção, Com seu HD de 1TB você tem espaço suficiente para instalar todos os jogos que quiser.",
        alt: "Computador Desktop, cor grafite, com a lateral aberta, podendo ver os componentes iluminados por LED branco azulado.",
        specifications: {
            processor: "AMD Ryzen 5 3400G",
            ramMemory: "8GB",
            storage: "1TB",
            videoCard: "Radeon RX Vega 11",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 2,
        imgSource: PC1,
        title: "Computador CasaOffice TECNOART Intel i3",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 2.750,00",
            hasPromotion: true,
            promotionalPrice: "R$ 2.500,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "O Computador CasaOffice TECNOART é perfeito para sua familia, possui o poderoso processador Intel i3 10100 que, junto com seus, 8GB de memória garantem uuma navegação suave e responsiva. Com armazenamento suficiente para salvar todos os seus arquivos graças ao HD de 1TB",
        alt: "Computador desktop branco com lateral aberta, dentro se vê os componentes do PC iluminados por LED RGB colorido",
        specifications: {
            processor: "Intel i3 10100",
            ramMemory: "8GB",
            storage: "1TB",
            videoCard: "Não Possui",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 3,
        imgSource: PC4,
        title: "PC Gamer Falcon Intel i5 8GB de RAM",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 4.200,00",
            hasPromotion: true,
            promotionalPrice: "R$ 4.000,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "Com o incrivel PC Gamer Inferno, você será capaz de rodar os maiores jogos da atualidade graças a sua placa de vídeo NVIDIA GeForce RTX 3060, com fantastico desempenho graças ao seu processador Intel i5 10400F com 8 GB de memória. O reesfriamento a água garante que até mesmo seu PC Gamer Inferno fique fresco. Um SSD de 240 GB garante muito espaço com uma velocidade de transferencia de dados extremamente rapida.",
        alt: "Computador desktop preto, com a lateral aberta, dentro se vê os componentes, iluminados por LED vermelhos.",
        specifications: {
            processor: "Intel i5 10400F",
            ramMemory: "8GB",
            storage: "SSD240GB",
            videoCard: "NVIDIA GeForce RTX 3060",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 4,
        imgSource: PC3,
        title: "Setup Completo CasaOffice Starter Intel i3",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 2.500,00",
            hasPromotion: true,
            promotionalPrice: "R$ 2.250,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "O Setup Completo CasaOffice Starter é perfeito para quem precisa de uma maquina poderosa, mas tem um baixo orçamento. Seu processador Intel i3 10100 e sus 8GB de memória garantem uma navegação fluida e sem travamentos. Com um HD de 1TB garante bastante espaço para guardar seus documentos, fotos, videos, e jogos, inclui monitor Samsung 36 Polegadas com qualidade de imagem incrivel, mouse e teclado de qualidade pela multilaser.",
        alt: "Setup com Monitor, teclado, mouse e desktop preto, com a tela inicial do Windows.",
        specifications: {
            processor: "Intel i3 10100",
            ramMemory: "8GB",
            storage: "1TB",
            videoCard: "Não Possui",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 5,
        imgSource: PC2,
        title: "PC Gamer Colibri Intel I3 8GB de RAM",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 2.300,00",
            hasPromotion: true,
            promotionalPrice: "R$ 2.000,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "O PC Gamer Colibri é perfeito para quem quer iniciar no mundo dos games, mas não tem um grande orçamento. Com o processador Intel I3 10100 e 8GB de RAM garantem uma excelente performance nos jogos enquanto a placa de vídeo NVIDIA GeForce GTX 1660 garante uma excelencia em qualidade de imagem. Um SSD 240GB é espaço suficiente para salvar varios jogos, com uma excelente taxa de dados.",
        alt: "Desktop preto, com a lateral aberta, onde é possivel ver os componentes, com duas ventoinhas, iluminadas com LED azul e vermelho.",
        specifications: {
            processor: "Intel I3 10100F",
            ramMemory: "8GB",
            storage: "SSD240GB",
            videoCard: "NVIDIA GeForce GTX 1660",
            operatingSystem: "Windows 10"
        }
    },

    {
        id: 6,
        imgSource: PC5,
        title: "PC Gamer Nirvana AMD Ryzen",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 3.100,00",
            hasPromotion: true,
            promotionalPrice: "R$ 3.000,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "O PC Gamer Nirvana leva a performace dos jogos até os céus. Seu preocessador AMD Ryzen 7 5700X é extremamene poderoso, combinado com incriveis 16GB de memória e a poderosa placa GeForce RTX 3060 da NVIDIA. E com um SSD de 480GB permie que você instale qualquer jogo que você quiser.",
        alt: "Desktop preto, com a lateral aberta, onde se vê os componentes, com iluminação LED verde.",
        specifications: {
            processor: "AMD Ryzen 7 5700X",
            ramMemory: "16GB",
            storage: "SSD480GB",
            videoCard: "NVIDIA GeForce RTX 3060",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 7,
        imgSource: PC6,
        title: "PC Gamer Tian AMD Ryzen 8GB de RAM",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 2.700,00",
            hasPromotion: true,
            promotionalPrice: "R$ 2.500,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "Com o PC Gamer Tian, consta com o poderoso porcessador AMD Ryzen 5 5600G, com 8GB garantem um excelente desempenho nos jogos da atualidade. Um SSD de 240GB é espaço suficiente para instalar tais jogos.",
        alt: "Computador Desktop preto, com a lateral em vidro, sendo possivel ver os componentes, foco na placa de vídeo.",
        specifications: {
            processor: "AMD Ryzen 5 5600G",
            ramMemory: "8GB",
            storage: "SSD240GB",
            videoCard: "Não Possui",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 8,
        imgSource: PC7,
        title: "Workstation Go 2A Xeonw-2255",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 35.272,00",
            hasPromotion: true,
            promotionalPrice: "R$ 33.369,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "A Workstation Go 2A é uma estaçã de trabalho para os mlehores. Seu processador Xeonw-2255, com placa de video NVIDIA RTX 4000 e absurdos 64GB de memoria e um SSD de 1TB garantem o melhor desempenho para os softwres mais pesados. Edição de imagem, vídeo, simulações e entre muitos outros trabalhos que necessitam de um processamento extremo.",
        alt: "Computador Desktop preto, com a lateral em vidro, sendo possível ver os componentes, iluminados por LED Branco.",
        specifications: {
            processor: "Xeonw-2255",
            ramMemory: "64GB",
            storage: "SSD1TB",
            videoCard: "NVIDIA RTX 4000",
            operatingSystem: "Windows 10"
        }
    },
];
