import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Lucas Biéchy",
  titleDelimiter: "🐉",
  tagline: "Lucas Biéchy's personal website",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "http://localhost:3000/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/biechy.github.io/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "biechy", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "./knowledge",
          routeBasePath: "knowledge",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          path: "./publications",
          routeBasePath: "publications",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          postsPerPage: "ALL",
          blogSidebarTitle: "All articles",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Lucas Biéchy",
      logo: {
        alt: "Lucas Biéchy Logo",
        src: "img/memojie/hey.png",
      },
      items: [
        { to: "resume", label: "Resume", position: "left" },
        { to: "publications", label: "Publications", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Knowledge",
        },
        { to: "projects", label: "Projects", position: "left" },
        //{
        //  type: "localeDropdown",
        //  position: "right",
        //},
        {
          href: "mailto:lucas.biechy@universite-paris-saclay.fr",
          position: "right",
          className: "header-email-link",
          "aria-label": "Email",
        },
        {
          href: "https://github.com/biechy",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://linkedin.com/in/biechy",
          position: "right",
          className: "header-linkedin-link",
          "aria-label": "LinkedIn profile",
        },
      ],
    },
    footer: {
      links: [],
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Lucas Biéchy.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "UW8F2UFA6Q",

      apiKey: "8ccfa75c1f8b2406cd7a31a6654af355",

      indexName: "portfolio",

      // Optional:
      contextualSearch: true,

      replaceSearchResultPathname: {
        from: "/knowledge/", // or as RegExp: /\/docs\//
        to: "/",
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
