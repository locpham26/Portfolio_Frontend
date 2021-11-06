require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://locpham.gatsbyjs.io",
    title: "Loc Pham",
    description:
      "I am a software engineer who builds user-friendly and functional software. I care deeply about building applications that are usable and pleasant for the most number of users possible.",
    twitterUsername: "@LocPham26",
    image: "/snap.png",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        collectionTypes: [`jobs`, `projects`, `skills`],
        singleTypes: [`gallery`, `intro`, `social-media`, `repo`],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 400,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://locpham.gatsbyjs.io",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
