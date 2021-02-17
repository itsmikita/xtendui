import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import RehypeReact from 'rehype-react'
import { markdownSlug } from 'components/snippets/markdown-slug'
import { typeSort } from 'components/snippets/type-sort'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Demo from 'components/demo/demo'
import DemoVanilla from 'components/demo/demo-vanilla'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demovanilla: DemoVanilla },
}).Compiler

export default class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.title = seo.title
      .split(/[\s-]+/)
      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
      .join(' ')
    seo.title +=
      data.post.frontmatter.parent && data.post.frontmatter.parent !== data.post.frontmatter.title
        ? data.post.frontmatter.parent
        : ''
    seo.title +=
      data.post.frontmatter.category && data.post.frontmatter.category !== data.post.frontmatter.title
        ? data.post.frontmatter.category
        : ''
    seo.title +=
      data.post.frontmatter.type && data.post.frontmatter.type !== data.post.frontmatter.title
        ? data.post.frontmatter.type
        : ''
    seo.description = data.post.frontmatter.description
    seo.title = markdownSlug(data.post) === '/introduction' ? seo.description : seo.title // @DOCINDEX
    return (
      <Layout page={data}>
        <SEO title={seo.title} description={seo.description} />
        {data.post.htmlAst !== '<div></div>' ? renderAst(data.post.htmlAst) : null}
        <div className="gatsby_listing">
          <div className="xt-row xt-row-6">
            {data.categories.category.sort(typeSort).map((category, i) => (
              <div className="gatsby_listing-group" key={i}>
                <h2 className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md bg-gray-200 text-center">
                  {category.title.split('-').pop()}
                </h2>
                <div className="gatsby_listing-items">
                  <div className="xt-row xt-row-stretch">
                    {category.posts.map(({ post }, z) =>
                      post.frontmatter.link ? (
                        <div className="gatsby_listing-column" key={z}>
                          <a
                            href={post.frontmatter.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="xt-card gatsby_listing-item"
                          >
                            <div className="xt-h4">
                              {post.frontmatter.title
                                .split(/[\s-]+/)
                                .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                .join(' ')}
                            </div>
                            <p>{post.frontmatter.description}</p>
                          </a>
                        </div>
                      ) : post.frontmatter.parent === post.frontmatter.title ? (
                        <div className="gatsby_listing-column" key={z}>
                          <Link to={markdownSlug(post)} className="xt-card gatsby_listing-item">
                            <div className="xt-h4">
                              {post.frontmatter.title
                                .split(/[\s-]+/)
                                .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                .join(' ')}
                            </div>
                            <p>{post.frontmatter.description}</p>
                            {post.frontmatter.link}
                          </Link>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($title: String!, $type: String, $category: String, $parent: String, $parents: String) {
    menus: allMarkdownRemark(
      filter: { frontmatter: { menu: { eq: true } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            title
            description
          }
        }
      }
    }
    categories: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $type } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      category: group(field: frontmatter___category) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              type
              category
              parent
              title
              description
              link
            }
          }
        }
      }
    }
    postsAll: allMarkdownRemark {
      posts: edges {
        post: node {
          frontmatter {
            type
            category
            parent
            title
            description
          }
        }
      }
    }
    postsAdiacent: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $type }, parent: { regex: $parents } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            category
            parent
            title
          }
        }
      }
    }
    parent: markdownRemark(frontmatter: { title: { eq: $parent }, category: { eq: $category } }) {
      htmlAst
      frontmatter {
        type
        category
        parent
        title
      }
    }
    post: markdownRemark(
      frontmatter: { type: { eq: $type }, category: { eq: $category }, parent: { eq: $parent }, title: { eq: $title } }
    ) {
      htmlAst
      frontmatter {
        type
        category
        parent
        title
        description
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.shape({
    menus: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
            }),
          }),
        })
      ),
    }),
    categories: PropTypes.shape({
      category: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              post: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  type: PropTypes.string.isRequired,
                  category: PropTypes.string,
                  parent: PropTypes.string,
                  title: PropTypes.string.isRequired,
                  description: PropTypes.string,
                }),
              }),
            })
          ),
        })
      ),
    }),
    postsAll: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
            }),
          }),
        })
      ),
    }),
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
      }),
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }),
}
