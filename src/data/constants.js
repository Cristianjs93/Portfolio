import Briefcase from '@/components/icons/Briefcase.astro';
import Code from '@/components/icons/Code.astro';
import ProfileCheck from '@/components/icons/ProfileCheck.astro';
import MailIcon from '@/components/icons/Mail.astro';
import LinkedInIcon from '@/components/icons/LinkedIn.astro';
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
    label: 'experience',
    href: '/#experience',
    icon: Briefcase,
  },
  {
    label: 'projects',
    href: '/#projects',
    icon: Code,
  },
  {
    label: 'about',
    href: '/#about',
    icon: ProfileCheck,
  },
  {
    label: 'contact',
    href: 'mailto:cristian.jimenezsa@hotmail.com',
    icon: MailIcon,
  },
];

export const themes = ['light', 'dark', 'system'];

export const contactPills = [
  {
    href: 'mailto:cristian.jimenezsa@hotmail.com',
    label: 'contact',
    aria: 'Mail',
    icon: MailIcon,
  },
  {
    href: 'https://linkedin.com/in/cristian-jimenez-sanchez-052819103',
    label: 'linkedin',
    aria: 'LinkedIn profile',
    icon: LinkedInIcon,
  },
];

export const experience = [
  {
    title: 'nuawi_title',
    company: 'Nuawi Technologies',
    date: 'nuawi_date',
    description: 'nuawi_desc',
  },
  {
    title: 'make_title',
    company: 'Make It Real',
    date: 'make_date',
    description: 'make_desc',
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
    name: 'Sass',
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
    title: 'emprendegan_title',
    description: 'emprendegan_desc',
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
    title: 'steel_title',
    description: 'steel_desc',
    image: '/projects/steel-lab.webp',
    tags: [tags.NEXT, tags.SASS, tags.REDUX, tags.NEST, tags.MONGODB, tags.AWS],
  },
  {
    title: 'carwash_title',
    description: 'carwash_desc',
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
    title: 'adogta_title',
    description: 'adogta_desc',
    image: '/projects/adogta-foundation.webp',
    tags: [tags.REACT, tags.REDUX, tags.EXPRESS, tags.MONGODB],
    github: 'https://github.com/Cristianjs93/adogta-client',
    link: 'https://adogta-client.vercel.app/',
  },
  {
    title: 'rica_title',
    description: 'rica_desc',
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
