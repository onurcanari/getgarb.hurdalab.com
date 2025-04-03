import { getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Clients',
      href: getPermalink('/clients'),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Garb',
          href: getPermalink('/projects/garb'),
        },
        {
          text: 'Other Projects',
          href: getPermalink('/projects'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Clients', href: getPermalink('/clients') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Projects',
      links: [
        { text: 'Garb', href: getPermalink('/projects/garb') },
        { text: 'Mobile App Development', href: '#' },
        { text: 'UI/UX Design', href: '#' },
        { text: 'Web Development', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'Community', href: '#' },
        { text: 'FAQs', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { text: 'Twitter', href: '#' },
        { text: 'Instagram', href: '#' },
        { text: 'Facebook', href: '#' },
        { text: 'LinkedIn', href: '#' },
        { text: 'GitHub', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right">📱</span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://hurdalab.com/"> hurdalab</a> · All rights reserved.
  `,
};
