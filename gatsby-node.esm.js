/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path'
import { markdownSlug } from './src/gatsby/components/snippets/markdown-slug.js'

// webpack config

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // resolve xtendui import js and css
        xtendui: path.resolve(__dirname, './'),
        // https://github.com/gatsbyjs/gatsby/issues/11934
        'react-dom': '@hot-loader/react-dom',
      },
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: `babel-preset-gatsby`, // https://github.com/gatsbyjs/gatsby/blob/master/packages/babel-preset-gatsby/README.md
  })
  actions.setBabelPreset({
    name: `@babel/preset-env`,
    options: {
      useBuiltIns: 'entry',
      corejs: 3,
    },
  })
}

// markdown

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docPageTemplate = path.resolve('src/gatsby/components/templates/doc-page.js')
  const docCategoryTemplate = path.resolve('src/gatsby/components/templates/doc-category.js')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
              category
              parent
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let slug = markdownSlug(node)
      createPage({
        path: slug, // needs gatsby-source-filesystem resolve name
        component: node.frontmatter.parent ? docPageTemplate : docCategoryTemplate,
        context: {
          // for graphql query($type: String)
          title: node.frontmatter.title,
          type: node.frontmatter.type,
          category: node.frontmatter.category,
          parent: node.frontmatter.parent,
          parents: `/^${node.frontmatter.parent}$/`,
        },
      })
    })
  })
}
