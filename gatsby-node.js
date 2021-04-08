const fs = require("fs")
const yaml = require("js-yaml")


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const details = yaml.load(fs.readFileSync("./content/data/yaml/details.yaml", "utf-8"))
  details.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/datasetDetails.js"),
      context: {
        details: element.details
      },
    })
  })
  // const economicRegions = yaml.load(fs.readFileSync("./content/data/yaml/economic-regions.yaml", "utf-8"))
  // economicRegions.forEach(element => {
  //   createPage({
  //     path: element.path,
  //     component: require.resolve("./src/templates/economicRegions.js"),
  //     context: {
  //       pageContent: element.content,
  //       aggregateData: element.aggregateData,
  //       downloadsPage: element.downloadsPage
  //     },
  //   })
  // })


  const newsAndUpdatesTemplate = require.resolve(
    `./src/templates/newsAndUpdates.js`
  )
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: newsAndUpdatesTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug
      },
    })
  })
}
