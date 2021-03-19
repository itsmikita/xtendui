import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import RehypeReact from 'rehype-react'
import { markdownSlug } from 'src/gatsby/components/snippets/markdown-slug'

import SEO from 'src/gatsby/components/seo'
import Layout from 'src/gatsby/components/layout'
import Demo from 'src/gatsby/components/demo/demo'
import DemoInline from 'src/gatsby/components/demo/demo-inline'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demoinline: DemoInline },
}).Compiler

class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.title = seo.title
      .split(/[\s-]+/)
      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
      .join(' ')
    seo.title =
      data.post.frontmatter.parent && data.post.frontmatter.parent !== data.post.frontmatter.title
        ? `${data.post.frontmatter.parent} ${seo.title}`
        : seo.title
    seo.title += ' - '
    seo.title +=
      data.post.frontmatter.category && data.post.frontmatter.category !== data.post.frontmatter.title
        ? ` ${data.post.frontmatter.category}`
        : ''
    seo.title +=
      data.post.frontmatter.type && data.post.frontmatter.type !== data.post.frontmatter.title
        ? ` ${data.post.frontmatter.type}`
        : ''
    seo.description = data.post.frontmatter.description
      ? data.post.frontmatter.description
      : data.parent.frontmatter.description
    return (
      <Layout page={data}>
        <SEO title={seo.title} description={seo.description} />
        {data.post.htmlAst !== '<div></div>' ? renderAst(data.post.htmlAst) : null}
        {data.post.frontmatter.parent === data.post.frontmatter.title ? (
          data.postsAdiacent.posts.length > 1 ? (
            <div className="gatsby_listing">
              <div className="xt-row xt-row-6">
                <div className="gatsby_listing-group">
                  {data.post.frontmatter.category === 'Core' ? (
                    <h2 className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
                      {'Customization and interactions'}
                    </h2>
                  ) : null}
                  <div className="gatsby_listing-items">
                    <div className="xt-row xt-row-stretch">
                      {data.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                        adiacent.frontmatter.parent !== adiacent.frontmatter.title ? (
                          adiacent.frontmatter.demos ? (
                            <div className="gatsby_listing-column" key={i}>
                              <a
                                role="button"
                                className="xt-card gatsby_listing-item gatsby_listing-item--themes"
                                data-gatsby-listing-toggle>
                                <div>
                                  <div className="xt-h4">
                                    {adiacent.frontmatter.title
                                      .split(/[\s-]+/)
                                      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                      .join(' ')}
                                  </div>
                                  {data.media.items.map((assets, z) => {
                                    if (assets.item.title === adiacent.frontmatter.title) {
                                      return (
                                        <div className="xt-media-container bg-gray-200" key={z}>
                                          <div className="xt-media-inner">
                                            <video
                                              className="xt-media object-cover object-center"
                                              preload="metadata"
                                              muted
                                              playsInline
                                              loop
                                              autoPlay>
                                              <source
                                                type="video/mp4"
                                                src={assets.item.file.url ? assets.item.file.url : null}
                                              />
                                            </video>
                                          </div>
                                        </div>
                                      )
                                    }
                                  })}
                                </div>
                              </a>
                              {adiacent.frontmatter.demos ? (
                                <Demo>
                                  {adiacent.frontmatter.demos.map((demo, i) => {
                                    return (
                                      <div
                                        className="gatsby_demo_item xt-toggle"
                                        data-iframe-fullscreen={`demos/${demo}`}
                                        key={i}></div>
                                    )
                                  })}
                                </Demo>
                              ) : null}
                            </div>
                          ) : (
                            <div className="gatsby_listing-column" key={i}>
                              <Link to={markdownSlug(adiacent)} className="xt-card gatsby_listing-item">
                                <div className="xt-h4">
                                  {adiacent.frontmatter.title
                                    .split(/[\s-]+/)
                                    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                    .join(' ')}
                                </div>
                                <p>
                                  {adiacent.frontmatter.description
                                    ? adiacent.frontmatter.description
                                    : `${adiacent.frontmatter.parent}'s ${adiacent.frontmatter.title
                                        .split(/[\s-]+/)
                                        .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                        .join(' ')}`}
                                </p>
                              </Link>
                            </div>
                          )
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        ) : null}
      </Layout>
    )
  }
}

export const query = graphql`
  query($title: String!, $type: String, $category: String, $parent: String, $parents: String) {
    media: allContentfulAsset {
      items: edges {
        item: node {
          title
          file {
            url
          }
        }
      }
    }
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
      filter: { frontmatter: { type: { eq: $type }, category: { eq: $category }, parent: { regex: $parents } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            category
            parent
            title
            description
            demos
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
        description
        title
      }
    }
    post: markdownRemark(
      frontmatter: { type: { eq: $type }, parent: { eq: $parent }, category: { eq: $category }, title: { eq: $title } }
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
    media: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
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
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              demos: PropTypes.array,
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
        description: PropTypes.string,
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

export default Template
