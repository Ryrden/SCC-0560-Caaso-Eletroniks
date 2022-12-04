import imagemPc from "@/assets/imgs/Computers/pcExemplo.svg";
import PC1 from "@/assets/imgs/Computers/PC1.jpg";
import PC2 from "@/assets/imgs/Computers/PC2.jpg";
import PC3 from "@/assets/imgs/Computers/PC3.jpg";
import PC4 from "@/assets/imgs/Computers/PC4.jpg";
import PC5 from "@/assets/imgs/Computers/PC5.jpg";
import PC6 from "@/assets/imgs/Computers/PC6.jpg";
import PC7 from "@/assets/imgs/Computers/PC7.jpg";

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
        description: "PC Gamer Concórdia AMD Ryzen 5 3400G 8GB 1TB Radeon RX Vega 11 Windows 10",
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
        description: "Computador CasaOffice TECNOART Intel i3 10100 8GB SSD 240GB",
        alt: "Computador desktop branco com lateral aberta, dentro se vê os componentes do PC iluminados por LED RGB colorido",
        specifications: {
            processor: "Intel i3 10100",
            ramMemory: "8GB",
            storage: "SSD240GB",
            videoCard: "Não Possui",
            operatingSystem: "Windows 10"
        }
    },
    {
        id: 3,
        imgSource: PC4,
        title: "PC Gamer Falcon Intel i5",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 4.500,00",
            hasPromotion: true,
            promotionalPrice: "R$ 1.000,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "PC Gamer Inferno Intel i5 10400F NVIDIA GeForce RTX 3060 8GB SSD 240GB Water Colling",
        alt: "Computador desktop preto, com a lateral aberta, dentro se vê os componentes, iluminados por LED vermelhos.
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
            fullPrice: "R$ 3.500,00",
            hasPromotion: true,
            promotionalPrice: "R$ 3.250,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "Setup Completo CasaOffice Starter Intel i3 10100 8GB 1TB, inclui monitor Samsung 36 Polegadas, mouse e teclado multilaser.",
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
        title: "PC Gamer Colibri Intel I3",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 1.000,00",
            hasPromotion: true,
            promotionalPrice: "R$ 1.000,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "PC Gamer Colibri Intel I3 10100 NVIDIA GeForce GTX 1660 8GB SSD 240GB Windows 10",
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
        description: "PC Gamer Nirvana AMD Ryzen 7 5700X NVIDIA GeForce RTX 3060 16GB SSD480GB",
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
        title: "PC Gamer Tian AMD Ryzen",
        freeShipping: true,
        pricing: {
            fullPrice: "R$ 2.700,00",
            hasPromotion: true,
            promotionalPrice: "R$ 2.500,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: "PC Gamer Tian AMD Ryzen 5 5600G 8GB SSD 240GB",
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
            promotionalPrice: "R$ 33.378,00",
            promotionWithPaymentMethod: "via pix"
        },
        description: Workstation Go 2A Xeonw-2255 NVIDIA RTX 4000 64GB SSD 1TB ",
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
