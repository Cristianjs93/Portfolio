import Briefcase from '@/components/icons/Briefcase.astro';
import Code from '@/components/icons/Code.astro';
import ProfileCheck from '@/components/icons/ProfileCheck.astro';
import MailIcon from '@/components/icons/Mail.astro';
import LinkedInIcon from '@/components/icons/LinkedIn.astro';
import React from '@/components/icons/React.astro';
import ReactNative from '@/components/icons/ReactNative.astro';
import NextJS from '@/components/icons/NextJS.astro';
import Sass from '@/components/icons/Sass.astro';
import Tailwind from '@/components/icons/Tailwind.astro';
import Redux from '@/components/icons/Redux.astro';
import Zustand from '@/components/icons/Zustand.astro';
import Express from '@/components/icons/Express.astro';
import Graphql from '@/components/icons/Graphql.astro';
import NestJS from '@/components/icons/NestJS.astro';
import PostgreSQL from '@/components/icons/PostgreSQL.astro';
import MongoDB from '@/components/icons/MongoDB.astro';
import Prisma from '@/components/icons/Prisma.astro';
import TypeORM from '@/components/icons/TypeORM.astro';
import Jest from '@/components/icons/Jest.astro';
import Playwright from '@/components/icons/Playwright.astro';
import Aws from '@/components/icons/Aws.astro';
import NodeJS from '@/components/icons/NodeJS.astro';
import Html from '@/components/icons/Html.astro';
import Css from '@/components/icons/Css.astro';
import Javascript from '@/components/icons/Javascript.astro';
import Typescript from '@/components/icons/Typescript.astro';
import Python from '@/components/icons/Python.astro';
import AstroIcon from '@/components/icons/AstroIcon.astro';
import Django from '@/components/icons/Django.astro';
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
    title: 'levels_title',
    company: 'Levels Health',
    date: 'levels_date',
    description: 'levels_desc',
  },
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
    class: 'bg-white text-[#0077CC] border-[#00D8FF]',
    icon: React,
  },
  REACT_NATIVE: {
    name: 'React Native',
    class: 'bg-white text-[#0077CC] border-[#00D8FF]',
    icon: ReactNative,
  },
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white border-[#FFFFFF45]',
    icon: NextJS,
  },
  SASS: {
    name: 'Sass',
    class: 'bg-white text-[#A0296F] border-[#CF649A]',
    icon: Sass,
  },
  TAILWIND: {
    name: 'Tailwind',
    class: 'bg-white text-[#0077CC] border-[#38BDF8]',
    icon: Tailwind,
  },
  REDUX: {
    name: 'Redux',
    class: 'bg-white text-[#764ABC] border-[#764ABC]',
    icon: Redux,
  },
  ZUSTAND: {
    name: 'Zustand',
    class: 'bg-white text-[#4B2E2B] border-[#4B2E2B]',
    icon: Zustand,
  },
  EXPRESS: {
    name: 'Express.js',
    class: 'bg-[#F0F1F3] text-black border-black',
    icon: Express,
  },
  GRAPHQL: {
    name: 'Graphql',
    class: 'bg-[#F3F4F0] text-[#E10098] border-[#E10098]',
    icon: Graphql,
  },
  NEST: {
    name: 'Nest.js',
    class: 'bg-[#961C37] text-white border-[#E0234E]',
    icon: NestJS,
  },
  POSTGRESQL: {
    name: 'PostgreSQL',
    class: 'bg-[#003159] text-white border-[#336791]',
    icon: PostgreSQL,
  },
  MONGODB: {
    name: 'MongoDB',
    class: 'bg-[#17743E] text-white border-[#01EC64]',
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
    class: 'bg-white text-[#99425B] border-[#99425B]',
    icon: Jest,
  },
  PLAYWRIGHT: {
    name: 'Playwright',
    class: 'bg-white text-[#2EAD33] border-[#2EAD33]',
    icon: Playwright,
  },
  AWS: {
    name: 'AWS',
    class: 'bg-[#F0F1F3] text-black border-[#F90]',
    icon: Aws,
  },
};

export const projects = [
  {
    title: 'levels_health_title',
    description: 'levels_healt_desc',
    image: '/projects/levels_health.webp',
    tags: [
      tags.REACT_NATIVE,
      tags.NEXT,
      tags.TAILWIND,
      tags.ZUSTAND,
      tags.GRAPHQL,
      tags.AWS,
      tags.POSTGRESQL,
    ],
  },
  {
    title: 'mainstreet_title',
    description: 'mainstreet_desc',
    image: '/projects/mainstreet.webp',
    tags: [
      tags.REACT,
      tags.TAILWIND,
      tags.ZUSTAND,
      tags.PLAYWRIGHT,
      tags.EXPRESS,
      tags.POSTGRESQL,
    ],
  },
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
  { icon: ReactNative },
  { icon: NextJS },
  { icon: AstroIcon },
  { icon: Express, class: 'fill-black dark:fill-white' },
  { icon: Graphql, class: 'fill-black dark:fill-white' },
  { icon: NestJS },
  { icon: Django },
  { icon: PostgreSQL },
  { icon: MongoDB },
  { icon: Prisma, class: 'fill-black dark:fill-white' },
  { icon: TypeORM },
  { icon: Redux },
  { icon: Zustand },
  { icon: Sass },
  { icon: Tailwind },
  { icon: Git },
  { icon: GitHub },
  { icon: Docker },
  { icon: Aws, class: 'fill-[#252f3e] dark:fill-white' },
  { icon: Jest },
  { icon: Playwright },
];
