import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  skylinesteel,
  nahin,
  cravix,
  sakir,
  carrent,
  brain,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior Accountant & Web Support",
    companyName: "SKY LINE STEEL",
    icon: skylinesteel,
    iconBg: "#ffffff",
    date: "Aug 2025 – PRESENT",
    points: [
      "Developed and maintained the company’s official website to support business visibility and customer inquiries.",
      "Managed website updates, content changes, and regular maintenance to ensure performance and reliability.",
      " Handled digital business platforms including Justdial and social media accounts to improve online presence.",
     "Assisted with basic accounting tasks, invoice handling, and daily operational records.",
      "Coordinated with internal teams to support steel pipe and plate import, cutting, and pressing services.",
       "Gained real-world experience working with industrial business processes and client service operations",
    ],
  },
  {
    title: "Founder & Lead Developer",
    companyName: "Cravix",
    icon: cravix,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Faug2024",
    points: [
      "Developed responsive websites and mobile applications",
      "Designed scalable frontend and backend architectures",
      "Integrated APIs, authentication, and databases",
      "Deployed and maintained production applications",
    ],
  },
  
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "A dependable team member with strong web support skills and a positive approach to daily operations.",
    name: "Shakir Dashadiya",
    designation: "senior accountant",
    company: "Sky Line Steel",
    image: sakir,
  },
  
  
  {
    testimonial:
      "Great experience working with him at Cravix. A skilled web and app developer with strong frontend and backend expertise.",
    name: "Nahin Pathan",
    designation: "Co-founder",
    company: "cravix",
    image: nahin,
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/sahal-belim",
  },
  {
    name: "Brain Tumor Detection",
    description:
      "Developed a deep learning model to classify brain MRI scans as tumor or non-tumor.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: brain,
    sourceCodeLink: "https://github.com/sahal-belim",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/sahal-belim",
  },
];

export { services, technologies, experiences, testimonials, projects };
