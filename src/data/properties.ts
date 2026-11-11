import poolHouse from '../assets/casas/casa1/image copy.png'
import poolView from '../assets/casas/casa1/image copy 2.png'
import poolOverview from '../assets/casas/casa1/image.png'
import cityFacade from '../assets/casas/casa2/image copy 3.png'
import cityKitchen from '../assets/casas/casa2/image copy 4.png'
import cityBackyard from '../assets/casas/casa2/image copy 5.png'
import cityBedroom from '../assets/casas/casa2/image copy 6.png'
import cityBathroom from '../assets/casas/casa2/image copy 7.png'
import traditionalFacade from '../assets/casas/casa3/image.png'
import traditionalBedroom from '../assets/casas/casa3/image copy.png'
import traditionalLiving from '../assets/casas/casa3/image copy 2.png'
import traditionalKitchen from '../assets/casas/casa3/image copy 3.png'

export type PropertyCategory = 'house' | 'land'

export interface PropertyImage {
  src: string
  alt: string
  collage?: boolean
}

export interface Property {
  id: string
  reference: string
  title: string
  category: PropertyCategory
  purpose: 'sale' | 'rent'
  price: number
  neighborhood: string
  city: string
  area: number
  bedrooms?: number
  bathrooms?: number
  parking?: number
  frontage?: number
  description: string
  features: string[]
  images: PropertyImage[]
  imageSource?: { label: string; url: string }
}

export const contact = {
  whatsapp: 'https://wa.me/message/5OHZYWIBRSASD1',
  instagram: 'https://www.instagram.com/rplagodasbrisas/',
}

export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL', maximumFractionDigits: 0,
}).format(price)

const poolImages: PropertyImage[] = [
  { src: poolHouse, alt: 'Casa contemporânea com varanda, jardim e piscina' },
  { src: poolView, alt: 'Piscina com deck e jardim ao redor' },
  { src: poolOverview, alt: 'Composição com vistas da casa e da área de lazer' },
]
const cityImages: PropertyImage[] = [
  { src: cityFacade, alt: 'Fachada de casa térrea com garagem', collage: true },
  { src: cityKitchen, alt: 'Sala integrada à cozinha com bancada' },
  { src: cityBackyard, alt: 'Quintal e área coberta nos fundos da casa' },
  { src: cityBedroom, alt: 'Quarto com janela e ar-condicionado' },
  { src: cityBathroom, alt: 'Banheiro com bancada e box' },
]
const traditionalImages: PropertyImage[] = [
  { src: traditionalFacade, alt: 'Fachada de casa com telhado cerâmico e garagem', collage: true },
  { src: traditionalBedroom, alt: 'Quarto com piso cerâmico e janela' },
  { src: traditionalLiving, alt: 'Sala de estar com acesso aos demais ambientes' },
  { src: traditionalKitchen, alt: 'Cozinha iluminada com bancada em granito' },
]

const landImages: PropertyImage[] = [
  { src: '/images/lote-1.jpg', alt: 'Terreno gramado próximo a uma área arborizada, imagem ilustrativa' },
  { src: '/images/lote-2.jpg', alt: 'Vista de terreno aberto com árvores ao fundo, imagem ilustrativa' },
  { src: '/images/lote-3.jpg', alt: 'Lote residencial entre casas, imagem ilustrativa' },
  { src: '/images/lote-4.jpg', alt: 'Terreno com vista para uma rua residencial, imagem ilustrativa' },
  { src: '/images/lote-5.jpg', alt: 'Área verde e lago em um entorno residencial, imagem ilustrativa' },
]

// Valores e características fictícios. As fotos fornecidas são reutilizadas nos exemplos.
export const properties: Property[] = [
  {
    id: 'casa-lago-das-brisas', reference: 'RP-001', title: 'Casa Lago das Brisas', category: 'house', purpose: 'sale',
    price: 1250000, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 320, bedrooms: 3, bathrooms: 4, parking: 2,
    description: 'Um lugar para desacelerar e viver bons momentos. Neste exemplo de imóvel, a arquitetura contemporânea encontra uma área de lazer com piscina e jardim. A varanda integra os ambientes e convida a reunir a família, aproveitar o sol e criar novas memórias.',
    features: ['Piscina privativa', 'Jardim', 'Varanda coberta', 'Área de lazer', 'Ambientes integrados', 'Garagem'], images: poolImages,
  },
  {
    id: 'casa-no-centro', reference: 'RP-002', title: 'Casa no Centro', category: 'house', purpose: 'sale',
    price: 420000, neighborhood: 'Centro', city: 'Buriti Alegre, GO', area: 180, bedrooms: 3, bathrooms: 2, parking: 2,
    description: 'Praticidade para o dia a dia, espaço para viver com conforto. Esta casa de exemplo conta com sala integrada à cozinha, quintal e ambientes bem distribuídos. Uma opção para quem deseja estar perto da rotina da cidade sem abrir mão de ter seu próprio espaço.',
    features: ['Cozinha com bancada', 'Quintal', 'Área coberta', 'Garagem', 'Sala integrada', 'Iluminação natural'], images: cityImages,
  },
  {
    id: 'casa-parque-dos-buritis', reference: 'RP-003', title: 'Casa Parque dos Buritis', category: 'house', purpose: 'rent',
    price: 1800, neighborhood: 'Parque dos Buritis', city: 'Buriti Alegre, GO', area: 150, bedrooms: 3, bathrooms: 2, parking: 1,
    description: 'Seu próximo lar pode começar com uma visita. Este anúncio demonstrativo apresenta uma casa térrea com ambientes iluminados, cozinha com bancada e uma varanda acolhedora. Espaço para organizar a vida e aproveitar os pequenos momentos de cada dia.',
    features: ['Casa térrea', 'Varanda', 'Cozinha com bancada', 'Garagem coberta', 'Sala de estar', 'Iluminação natural'], images: traditionalImages,
  },
  {
    id: 'casa-refugio-das-brisas', reference: 'RP-004', title: 'Refúgio das Brisas', category: 'house', purpose: 'rent',
    price: 4500, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 280, bedrooms: 3, bathrooms: 3, parking: 2,
    description: 'Dias mais leves, uma piscina para aproveitar e espaço para receber quem você ama. Este é um segundo exemplo de anúncio, usando as fotos da casa com piscina para demonstrar como diferentes imóveis poderão ser exibidos no catálogo.',
    features: ['Piscina', 'Área verde', 'Varanda ampla', 'Garagem', 'Área de convivência', 'Jardim'], images: [poolImages[1], poolImages[0], poolImages[2]],
  },
  {
    id: 'lote-residencial-brisas', reference: 'RP-005', title: 'Lote Residencial Brisas', category: 'land', purpose: 'sale',
    price: 185000, neighborhood: 'Lago das Brisas', city: 'Buriti Alegre, GO', area: 450, frontage: 15,
    description: 'Um novo projeto começa com a escolha do lugar. Este lote demonstrativo representa uma oportunidade para planejar uma casa com espaço externo e ambientes do seu jeito. As imagens são ilustrativas e não representam um terreno anunciado em Buriti Alegre.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para jardim', 'Projeto personalizado'], images: [landImages[0], landImages[1], landImages[3]],
    imageSource: { label: 'Premium Imóveis Gramado', url: 'https://www.premiumimoveisgramado.com.br/imovel/venda-terrenos-residenciais-em-gramado/terreno-com-mais-de-900-metros/29290' },
  },
  {
    id: 'lote-jardim-dos-buritis', reference: 'RP-006', title: 'Lote Jardim dos Buritis', category: 'land', purpose: 'sale',
    price: 120000, neighborhood: 'Jardim dos Buritis', city: 'Buriti Alegre, GO', area: 360, frontage: 12,
    description: 'Liberdade para desenhar o seu próximo capítulo. Um exemplo de terreno residencial com espaço para construir e cultivar novas histórias. Valores, localização e medidas são fictícios; as fotografias mostram um terreno ilustrativo de outra região.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para quintal', 'Projeto personalizado'], images: [landImages[1], landImages[3], landImages[0]],
    imageSource: { label: 'Premium Imóveis Gramado', url: 'https://www.premiumimoveisgramado.com.br/imovel/venda-terrenos-residenciais-em-gramado/terreno-com-mais-de-900-metros/29290' },
  },
  {
    id: 'lote-vista-verde', reference: 'RP-007', title: 'Lote Vista Verde', category: 'land', purpose: 'sale',
    price: 210000, neighborhood: 'Residencial Vista Verde', city: 'Buriti Alegre, GO', area: 600, frontage: 20,
    description: 'Mais espaço para imaginar, planejar e construir. Este anúncio de exemplo apresenta um lote residencial para quem deseja uma casa com área verde. As fotos são apenas uma referência visual e não correspondem à localização e às medidas fictícias deste anúncio.',
    features: ['Uso residencial', 'Área verde', 'Espaço para lazer', 'Projeto personalizado'], images: [landImages[2], landImages[4]],
    imageSource: { label: 'Casas em Gramado', url: 'https://casasemgramado.com.br/terreno-lote-em-condominio/a-venda/gramado-rs' },
  },
  {
    id: 'lote-novo-horizonte', reference: 'RP-008', title: 'Lote Novo Horizonte', category: 'land', purpose: 'sale',
    price: 145000, neighborhood: 'Novo Horizonte', city: 'Buriti Alegre, GO', area: 400, frontage: 16,
    description: 'O endereço de uma nova fase começa com uma possibilidade. Este terreno faz parte do catálogo demonstrativo. A fotografia é ilustrativa, e os valores e as características foram criados para apresentar a experiência de navegação.',
    features: ['Uso residencial', 'Área aberta', 'Espaço para lazer', 'Projeto personalizado'], images: [landImages[3], landImages[0], landImages[1]],
    imageSource: { label: 'Premium Imóveis Gramado', url: 'https://www.premiumimoveisgramado.com.br/imovel/venda-terrenos-residenciais-em-gramado/terreno-com-mais-de-900-metros/29290' },
  },
]
