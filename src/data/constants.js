import React from '@/components/icons/React.astro';
import NextJS from '@/components/icons/NextJS.astro';
import Sass from '@/components/icons/Sass.astro';
import Redux from '@/components/icons/Redux.astro';
import Express from '@/components/icons/Express.astro';
import NestJS from '@/components/icons/NestJS.astro';
import PostgreSQL from '@/components/icons/PostgreSQL.astro';
import MongoDB from '@/components/icons/MongoDB.astro';
import Prisma from '@/components/icons/Prisma.astro';
import TypeORM from '@/components/icons/TypeORM.astro';
import Jest from '@/components/icons/Jest.astro';
import Aws from '@/components/icons/Aws.astro';
import NodeJS from '@/components/icons/NodeJS.astro';
import Html from '@/components/icons/Html.astro';
import Css from '@/components/icons/Css.astro';
import Javascript from '@/components/icons/Javascript.astro';
import Typescript from '@/components/icons/Typescript.astro';
import Python from '@/components/icons/Python.astro';
import AstroIcon from '@/components/icons/AstroIcon.astro';
import Django from '@/components/icons/Django.astro';
import Tailwind from '@/components/icons/Tailwind.astro';
import Git from '@/components/icons/Git.astro';
import GitHub from '@/components/icons/GitHub.astro';
import Docker from '@/components/icons/Docker.astro';

export const navItems = [
  {
    title: 'Experience',
    label: 'experience',
    url: '/#experience',
  },
  {
    title: 'Projects',
    label: 'projects',
    url: '/#projects',
  },
  {
    title: 'About',
    label: 'about',
    url: '/#about',
  },
  {
    title: 'Contact',
    label: 'contact',
    url: 'mailto:cristian.jimenezsa@hotmail.com',
  },
];

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Nuawi Technologies',
    date: 'Dec 2023 - Sep 2024',
    description:
      'Responsible for the components and utilities for the creation and development of web applications. Improved software delivery times by 30%. Implemented unit tests to validate critical functionalities, detect errors early, and maintain high development standards.',
  },
  {
    title: 'Fullstack Developer',
    company: 'Make It Real',
    date: 'Jun 2023 - Nov 2023',
    description:
      'Launched an e-commerce for restaurants in 10 weeks, enabling online reservations, orders, and payments. Migrated a legacy codebase for an animal foundations project to more modern technologies within two weeks and developed new functionalities.',
  },
];

export const tags = {
  REACT: {
    name: 'React',
    class: 'bg-white text-[#0077cc] border-[#00d8ff]',
    icon: React,
  },
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white border-[#ffffff45]',
    icon: NextJS,
  },
  SASS: {
    name: 'Saas',
    class: 'bg-white text-[#a0296f] border-[#cf649a]',
    icon: Sass,
  },
  REDUX: {
    name: 'Redux',
    class: 'bg-white text-[#764abc] border-[#764abc]',
    icon: Redux,
  },
  EXPRESS: {
    name: 'Express.js',
    class: 'bg-[#ababab] text-black border-black',
    icon: Express,
  },
  NEST: {
    name: 'Nest.js',
    class: 'bg-[#961c37] text-white border-[#e0234e]',
    icon: NestJS,
  },
  POSTGRESQL: {
    name: 'PostgreSQL',
    class: 'bg-[#003159] text-white border-[#336791]',
    icon: PostgreSQL,
  },
  MONGODB: {
    name: 'MongoDB',
    class: 'bg-[#17743e] text-white border-[#01EC64]',
    icon: MongoDB,
  },
  PRISMA: {
    name: 'Prisma',
    class: 'bg-white text-black border-black',
    icon: Prisma,
  },
  TYPEORM: {
    name: 'TypeORM',
    class: 'bg-white text-black border-black',
    icon: TypeORM,
  },
  JEST: {
    name: 'Jest',
    class: 'bg-white text-[#99425b] border-[#99425b]',
    icon: Jest,
  },
  AWS: {
    name: 'AWS',
    class: 'bg-[#f3f3f3] text-black border-[#f90]',
    icon: Aws,
  },
};

export const projects = [
  {
    title: 'Emprendegan',
    description:
      "Emprendegan is an application designed to facilitate livestock and agricultural management. Built on a microservices structure with clean architecture and domain-driven design, it becomes a robust solution capable of being implemented independently of the technologies chosen. It integrates with Google's weather API, allowing farmers to take preventive measures ahead of rain and drought periods, also with Almagan, simplifying the acquisition of food, tools, and supplies.",
    image: '/projects/emprendegan.webp',
    tags: [
      tags.NEXT,
      tags.SASS,
      tags.REDUX,
      tags.NEST,
      tags.POSTGRESQL,
      tags.TYPEORM,
      tags.JEST,
    ],
  },
  {
    title: 'Steel Lab',
    description:
      'Steel Lab is a software designed to ease the management of all processes in companies that provide quality testing solutions for the steel industry. Built on a serverless microservices architecture and linked to the AWS cloud via Lambda functions, Steel Lab becomes a fast, versatile, and cost-effective solution for automating processes. The software is integrated with the Siggo API and linked with Dropbox SDK, enabling massive uploads and storage of information.',
    image: '/projects/steel-lab.webp',
    tags: [tags.NEXT, tags.SASS, tags.REDUX, tags.NEST, tags.MONGODB, tags.AWS],
  },
  {
    title: 'Autolavado 360°',
    description:
      'Autolavado 360° is an ERP designed with a multitenant architecture, aimed at providing solutions for car wash chains in managing the entire operational and administrative scope of each of their registered headquarters. You can manage personnel, supplies, equipments, services, customers, third-party agreements, income history, settlements, parking lots etc. In addition, it allows the creation of electronic invoices for the DIAN, collection accounts for agreements and notifications sending to clients and allies.',
    image: '/projects/autolavado360.webp',
    tags: [
      tags.NEXT,
      tags.REDUX,
      tags.NEST,
      tags.MONGODB,
      tags.POSTGRESQL,
      tags.PRISMA,
      tags.JEST,
    ],
  },
  {
    title: 'Adogta Foundation',
    description:
      'Adogta is a web application that connects pet foundations with individuals interested in adopting a furry companion. As a user, you can browse pets that foundations have available for adoption. If you find one you like, you can send an adoption request or contribute to their cause by making a donation. As a foundation, you can create and manage pets through a highly intuitive interface.',
    image: '/projects/adogta-foundation.webp',
    tags: [tags.REACT, tags.REDUX, tags.EXPRESS, tags.MONGODB],
    github: 'https://github.com/Cristianjs93/adogta-client',
    link: 'https://adogta-client.vercel.app/',
  },
  {
    title: 'Rica App',
    description:
      'Rica App is an e-commerce developed with React and Express that allows to place delivery orders from your favorite restaurant and also make reservations. Payments can be made through the Stripe payment gateway. As a restaurant owner, you can efficiently manage products, offering functionalities to add, edit, delete, and view products. Finally, as an administrator, you have the capability to manage both customers and restaurants.',
    image: '/projects/rica-app.webp',
    tags: [
      tags.REACT,
      tags.SASS,
      tags.REDUX,
      tags.EXPRESS,
      tags.POSTGRESQL,
      tags.PRISMA,
    ],
    github: 'https://github.com/Cristianjs93/front-app-restaurant',
    link: 'https://front-app-restaurant.vercel.app/',
  },
];

export const stack = [
  { icon: NodeJS },
  { icon: Html },
  { icon: Css },
  { icon: Javascript },
  { icon: Typescript },
  { icon: Python },
  { icon: React },
  { icon: NextJS },
  { icon: AstroIcon },
  { icon: Express, class: 'fill-black dark:fill-white' },
  { icon: NestJS },
  { icon: Django },
  { icon: PostgreSQL },
  { icon: MongoDB },
  { icon: Prisma, class: 'fill-black dark:fill-white' },
  { icon: TypeORM },
  { icon: Redux },
  { icon: Sass },
  { icon: Tailwind },
  { icon: Git },
  { icon: GitHub },
  { icon: Docker },
  { icon: Aws, class: 'fill-[#252f3e] dark:fill-white' },
  { icon: Jest },
];
