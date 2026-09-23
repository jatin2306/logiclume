import { featuredClients } from "./featuredClients";

const featuredPortfolio = featuredClients.map((client) => ({
  id: client.portfolioId,
  title: client.name,
  category: client.category,
  client: client.partner,
  url: client.url,
  imageSrc: client.imageSrc,
  previewAccent: client.previewAccent,
  featured: true,
}));

const gridProjects = [
  {
    id: 201,
    title: "Kayzen",
    category: "UI / UX Design",
    url: "https://designoweb.com/case-study-detail/kayzen",
    imageSrc: "/images/portfolio/kayzen.webp",
  },
  {
    id: 202,
    title: "ArcX",
    category: "Mobile App",
    url: "https://designoweb.com/case-study-detail/arcx",
    imageSrc: "/images/portfolio/arcx.webp",
  },
  {
    id: 203,
    title: "Pharmatop",
    category: "Custom Software",
    url: "https://designoweb.com/case-study-detail/pharmatop",
    imageSrc: "/images/portfolio/pharmatop.webp",
  },
  {
    id: 204,
    title: "Propti",
    category: "Web Development",
    url: "https://propti.no/",
    imageSrc: "/images/portfolio/propti.png",
  },
  {
    id: 205,
    title: "First Rewards",
    category: "Enterprise Platform",
    url: "https://firstrewards.in/",
    previewAccent: "blue",
  },
  {
    id: 206,
    title: "Agarwal Estates",
    category: "Website",
    url: "https://agarwalestates.com/",
    previewAccent: "blue",
  },
  {
    id: 207,
    title: "Wasalt",
    category: "E-Commerce",
    url: "https://wasalt.sa/en",
    previewAccent: "orange",
  },
  {
    id: 208,
    title: "GiftsTacc",
    category: "E-Commerce",
    url: "https://cc.giftstacc.com/",
    previewAccent: "orange",
  },
];

export const portfolioData = [...featuredPortfolio, ...gridProjects];
