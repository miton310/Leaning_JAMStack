module.exports = {
  siteMetadata: {
    title: `株式会社スパイス`,
    description: `株式会社スパイスは、広島を拠点としてマーケティング・コンサルティングを得意とし、集客に強いサイト制作まで一貫して行います`,
    author: `spice Inc.`,
    siteUrl: `https://sparkly-pegasus-a28a8c.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://sparkly-pegasus-a28a8c.netlify.app`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://sparkly-pegasus-a28a8c.netlify.app`,
        sitemap: `https://sparkly-pegasus-a28a8c.netlify.app/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow:`/`}]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `information`,
        path: `${__dirname}/src/content/information`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
