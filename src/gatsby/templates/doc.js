import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import rehypeReact from "rehype-react"

import SEO from "components/seo"
import Layout from "components/layout"
import Demo from "components/demo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {"demo": Demo},
}).Compiler

class Template extends React.Component {
  render() {
    const {data} = this.props
    const page = {};
    page.title = data.post.frontmatter.title
    page.description = data.post.frontmatter.description
    return (
      <Layout page={data}>
        <SEO title={page.title + ' — ' + page.description}/>
        <div>{renderAst(data.post.htmlAst)}</div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($path: String!, $parent: String) {
    categories: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              parent
            }
          }
        }
      }
    }
    adiacentPosts:allMarkdownRemark(filter: {frontmatter: {parent: {eq: $parent}}}) {
      posts: edges {
        post: node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    post: markdownRemark(frontmatter: {path: {eq: $path}}) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        type
        title
        description
        categories
      }
    }
  }
`

export default Template

Template.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              post: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  date: PropTypes.string.isRequired,
                  path: PropTypes.string.isRequired,
                  title: PropTypes.string.isRequired,
                  parent: PropTypes.string,
                }).isRequired,
              }).isRequired,
            }).isRequired,
          ),
        }).isRequired
      ),
    }),
    adiacentPosts: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ),
    }).isRequired,
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.array,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
