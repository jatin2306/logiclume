import { featuredClients } from "./featuredClients";

const featuredPortfolio = featuredClients.map((client) => ({
  id: client.portfolioId,
  title: client.name,
  category: client.category,
  client: client.partner,
  url: client.url,
  imageSrc: client.imageSrc,
  featured: true,
}));

export const portfolioData = [
  ...featuredPortfolio,
  {
    id: 1,
    title: "Corporate Website",
    category: "Web Development",
    imageSrc: "/images/portfolio/project1.jpg",
  },
  {
    id: 2,
    title: "Restaurant Mobile App",
    category: "App Development",
    imageSrc: "/images/portfolio/project2.jpg",
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "UI / UX Design",
    imageSrc: "/images/portfolio/project3.jpg",
  },
  {
    id: 4,
    title: "Fashion E-Commerce",
    category: "E-Commerce",
    imageSrc: "/images/portfolio/project4.jpg",
  },
  {
    id: 5,
    title: "School Management ERP",
    category: "Custom Software",
    imageSrc: "/images/portfolio/project5.jpg",
  },
  {
    id: 6,
    title: "Real Estate Website",
    category: "Website",
    imageSrc: "/images/portfolio/project6.jpg",
  },
  {
    id: 7,
    title: "Travel Booking App",
    category: "Mobile App",
    imageSrc: "/images/portfolio/project7.jpg",
  },
  {
    id: 8,
    title: "Admin Dashboard",
    category: "Dashboard UI",
    imageSrc: "/images/portfolio/project8.jpg",
  },
];
