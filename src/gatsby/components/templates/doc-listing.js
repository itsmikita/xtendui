import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { markdownSlug } from 'components/markdown-slug.js'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Template extends React.Component {
  render () {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.description = data.post.frontmatter.description
    seo.parent = data.post.frontmatter.parent
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <div className="gatsby_listing">
          {data.categories.category.map((category, i) => (
            <div className="gatsby_listing_group" key={i}>
              {category.title.split('-').pop()}
              {category.posts.map(({ post }, z) => (
                post.frontmatter.parent === post.frontmatter.title
                  ? <div key={z}>
                    <Link to={markdownSlug(post)}
                      className="gatsby_listing_item">
                      <div className="gatsby_listing_item_title">
                        {post.frontmatter.title}
                      </div>
                    </Link>
                  </div>
                  : null
              ))}
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Template

export const query = graphql`
  query($title: String!, $type: String, $parent: String) {
    categories: allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}}}, sort: {fields: [frontmatter___date,  frontmatter___title], order: ASC}) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              type
              parent
              title
            }
          }
        }
      }
    }
    postsAdiacent: allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}, parent: {eq: $parent}}}, sort: {fields: [frontmatter___date,  frontmatter___title], order: ASC}) {
      posts: edges {
        post: node {
          frontmatter {
            type
            parent
            title
          }
        }
      }
    }
    parent: markdownRemark(frontmatter: {title: {eq: $parent}}) {
      htmlAst
      frontmatter {
        type
        parent
        title
      }
    }
    post: markdownRemark(frontmatter: {type: {eq: $type}, parent: {eq: $parent}, title: {eq: $title}}) {
      htmlAst
      frontmatter {
        type
        parent
        title
        description
        categories
      }
    }
  }
`

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
                  type: PropTypes.string.isRequired,
                  parent: PropTypes.string,
                  title: PropTypes.string.isRequired
                }).isRequired
              }).isRequired
            }).isRequired
          )
        }).isRequired
      )
    }),
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      )
    }).isRequired,
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired
      }).isRequired
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.array
      }).isRequired
    }).isRequired
  }).isRequired
}
