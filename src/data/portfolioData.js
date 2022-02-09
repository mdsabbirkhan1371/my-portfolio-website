import logo from "../assets/png/Frame 1.png";
import alex from '../assets/png/alex.jpg';
import full from '../assets/png/full.jpg';
import blog from '../assets/png/Blog.png';
import portfolio from '../assets/png/portfolio.jpg';
import master from '../assets/png/old-landing-page.PNG';

export const portfolioData = [
  {
    id: 1,
    title: "MasterPortfolio",
    description:
      "A clean, beautiful, responsive and 100% customizable portfolio template for Software Developers!",
    image:
      master /*"https://github.com/Programing-School/masterPortfolio/raw/main/images/masterPortfolioThemes.png"*/,
    url: "https://master-portfolio-mu.vercel.app/",
    source: "https://github.com/Programing-School/masterPortfolio",
  },
  {
    id: 2,
    title: "developerFolio",
    description:
      "A clean, beautiful and responsive portfolio template for Developers!",
    image: logo,
    url: "https://developer-folio-bice.vercel.app/",
    source: "https://github.com/Programing-School/developerFolio",
  },
  {
    id: 3,
    title: "brittanychiang.com - v4",
    description:
      "The fourth iteration of brittanychiang.com built with Gatsby and hosted with Netlify",
    image:
      "https://raw.githubusercontent.com/bchiang7/v4/main/src/images/demo.png",
    url: "https://v4-sandy.vercel.app/",
    source: "https://github.com/Programing-School/v4",
  },
  {
    id: 4,
    title: "Alexander Starter",
    description: "Full responsive Portfolio using html CSS Javascript",
    image: alex,
    url: "https://programing-school.github.io/alexander-starter/",
    source: "https://programing-school.github.io/alexander-starter/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Full responsive Portfolio using html CSS Javascript",
    image: full,
    url: "https://programing-school.github.io/portfolio-website/",
    source: "https://github.com/Programing-School/portfolio-website",
  },
  {
    id: 6,
    title: "My Blog",
    description: "Full responsive Blog with Dashboard",
    image: blog,
    url: "https://programing-school-blog.vercel.app/",
    source: "https://github.com/Programing-School/Programing-School-Blog.git",
  },
  {
    id: 7,
    title: "Bootstrap-5-portfolio-template",
    description: "Full responsive Portfolio using Bootstrap",
    image: portfolio,
    url: "https://programing-school.github.io/Bootstrap-5-portfolio-template/",
    source:
      "https://github.com/Programing-School/Bootstrap-5-portfolio-template",
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below.

/* 
{
    id: 1,
    title: 'Car Pooling System',
    description: '',
    date: 'Oct 1, 2020',
    image: '',
    url: 'https://preview.colorlib.com/theme/rezume/',
    source: ""
}, 
*/
