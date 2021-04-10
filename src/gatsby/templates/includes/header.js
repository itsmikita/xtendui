import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { markdownSlug } from 'src/gatsby/templates/snippets/markdown-slug'
import { typeSort } from 'src/gatsby/templates/snippets/type-sort'

const classes = require('src/gatsby/templates/snippets/classes').classes

export default function Header({ page }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          npm
          github
          twitter
          download
        }
      }
    }
  `)
  return (
    <div className="gatsby_site-article_sidebar">
      <div className="gatsby_site-article_sidebar_inner">
        <header className="gatsby_site-header xt-sticky">
          <div className="gatsby_site-header_inner">
            <div>
              <div className="gatsby_site-header_content">
                <div className="gatsby_site-header_logo">
                  <Link to="/" title="Xtend UI" className="gatsby_logo-icon">
                    <img
                      src={'/logo-white.svg'}
                      loading="eager"
                      alt={site.siteMetadata.title}
                      width="300"
                      height="72"
                    />
                  </Link>
                </div>
                <div className="gatsby_site-header_top_social_container">
                  <div className="gatsby_site-header_top_social">
                    <div data-xt-tooltip="{ position: 'bottom-end' }">
                      <a
                        href={site.siteMetadata.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xt-button gatsby_site-header_top_social_btn"
                        title="Twitter"
                        dangerouslySetInnerHTML={{
                          __html: classes.iconTwitter(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-duration="300">
                        <div
                          className={`relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Twitter
                        </div>
                      </div>
                    </div>
                    <div data-xt-tooltip="{ position: 'bottom-end' }">
                      <a
                        href={site.siteMetadata.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xt-button gatsby_site-header_top_social_btn"
                        title="Npm"
                        dangerouslySetInnerHTML={{
                          __html: classes.iconPackage(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-duration="300">
                        <div
                          className={`relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Npm
                        </div>
                      </div>
                    </div>
                    <span data-xt-tooltip="{ position: 'bottom-end' }">
                      <a
                        href={site.siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xt-button gatsby_site-header_top_social_btn"
                        title="Github"
                        dangerouslySetInnerHTML={{
                          __html: classes.iconGithub(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-duration="300">
                        <div
                          className={`relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Github
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="gatsby_site-header_menu_link">
                  <button
                    type="button"
                    className={`xt-button ${classes.buttonMd()} rounded-md gatsby_button--overlay`}
                    aria-label="Menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="xt-overlay text-white xt-links-inverse active xt-overlay-disabled" id="gatsby_menu--overlay">
          <div className="xt-backdrop bg-black pointer-events-none opacity-25"></div>
          <div className="xt-overlay-container p-0 w-screen max-w-xs ml-auto mr-0">
            <div className="xt-overlay-inner">
              <div className="xt-design"></div>
              <div className="xt-card">
                <div
                  className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 pr-3 text-2xl"
                  aria-label="Close"
                  dangerouslySetInnerHTML={{ __html: classes.iconX() }}></div>
                <div className="mt-16 md:mt-0">
                  <div className="gatsby_site-header_switcher_container">
                    <div className="gatsby_site-header_switcher xt-list xt-list-1 flex-nowrap">
                      <div data-xt-tooltip="{ position: 'top' }" className="flex-full">
                        <button
                          type="button"
                          className={`xt-button button--switch-html w-full justify-center text-xs py-1 px-2.5 rounded-md text-white font-sans font-black leading-snug tracking-wider uppercase border border-primary-600 bg-primary-600 hover:border-primary-700 hover:bg-primary-600 in:border-primary-700 in:bg-primary-700 transition`}>
                          Html
                        </button>
                        <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-duration="300">
                          <div
                            className={`relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                            Switch to Html
                          </div>
                        </div>
                      </div>
                      <div data-xt-tooltip="{ position: 'top' }" className="flex-full">
                        <button
                          type="button"
                          className={`xt-button button--switch-react w-full justify-center text-xs py-1 px-2.5 rounded-md text-white font-sans font-black leading-snug tracking-wider uppercase border border-primary-600 bg-primary-600 hover:border-primary-700 hover:bg-primary-600 in:border-primary-700 in:bg-primary-700 transition`}>
                          React
                        </button>
                        <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-duration="300">
                          <div
                            className={`relative ${classes.tooltipSm()} rounded-md shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                            Switch to React
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="gatsby_site-header_links_container">
                    <div className="gatsby_site-header_links">
                      {page.menus.posts.map(({ post }, i) => (
                        <div key={i}>
                          <Link
                            to={markdownSlug(post)}
                            title={post.frontmatter.description}
                            className={`xt-button gatsby_button-site-header_link ${
                              page && page.post
                                ? markdownSlug(page.post) === markdownSlug(post)
                                  ? 'active'
                                  : post.frontmatter.type === page.post.frontmatter.type
                                  ? 'current'
                                  : ''
                                : ''
                            }`}>
                            <span>{post.frontmatter.title}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  {page && page.post ? (
                    <nav className="gatsby_site-header_listing">
                      {page.categories.category.sort(typeSort).map((category, i) => (
                        <div key={i}>
                          <div className="gatsby_site-header_cat">
                            <div className="gatsby_cat--site_article_sidebar">{category.title.split('-').pop()}</div>
                            <div className="gatsby_site-header_sub">
                              <div className="gatsby_site-header_item">
                                {category.posts.map(({ post }, z) =>
                                  post.frontmatter.parent === post.frontmatter.title ? (
                                    <div className="gatsby_site-header_item_container" key={z}>
                                      {post.frontmatter.link ? (
                                        <div>
                                          <a
                                            href={post.frontmatter.link}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            title={post.frontmatter.description}
                                            className={`xt-button gatsby_button-site_article_sidebar gatsby_button-site_article_sidebar--sub ${
                                              markdownSlug(page.post) === markdownSlug(post)
                                                ? 'active'
                                                : page.post.frontmatter.parent === post.frontmatter.parent &&
                                                  post.frontmatter.category === page.post.frontmatter.category
                                                ? 'current'
                                                : ''
                                            }`}>
                                            <span>{post.frontmatter.title}</span>
                                          </a>
                                          <div className="gatsby_site-header_adiacent_inner">
                                            <div className="gatsby_site-header_item"></div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div>
                                          <Link
                                            to={markdownSlug(post)}
                                            title={post.frontmatter.description}
                                            className={`xt-button gatsby_button-site_article_sidebar gatsby_button-site_article_sidebar--sub ${
                                              markdownSlug(page.post) === markdownSlug(post)
                                                ? 'active'
                                                : page.post.frontmatter.parent === post.frontmatter.parent &&
                                                  post.frontmatter.category === page.post.frontmatter.category
                                                ? 'current'
                                                : ''
                                            }`}>
                                            <span>{post.frontmatter.title}</span>
                                          </Link>
                                          <div className="gatsby_site-header_adiacent_inner">
                                            <div className="gatsby_site-header_item"></div>
                                          </div>
                                        </div>
                                      )}
                                      {post.frontmatter.parent === page.post.frontmatter.parent &&
                                      post.frontmatter.category === page.post.frontmatter.category ? (
                                        <div className="gatsby_site-header_adiacent active">
                                          <div className="gatsby_site-header_item">
                                            {page.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                                              adiacent.frontmatter.title !== post.frontmatter.parent ? (
                                                !adiacent.frontmatter.demos ? (
                                                  <div key={i}>
                                                    <Link
                                                      to={markdownSlug(adiacent)}
                                                      className={`xt-button gatsby_button-site_article_sidebar gatsby_button-site_article_sidebar--adiacent ${
                                                        page.post.frontmatter.title === adiacent.frontmatter.title &&
                                                        post.frontmatter.category === page.post.frontmatter.category
                                                          ? 'active'
                                                          : ''
                                                      }`}>
                                                      <span>
                                                        {adiacent.frontmatter.title
                                                          .split(/[\s-]+/)
                                                          .map(
                                                            item =>
                                                              item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
                                                          )
                                                          .join(' ')}
                                                      </span>
                                                    </Link>
                                                    <div className="gatsby_site-header_adiacent_inner">
                                                      <div className="gatsby_site-header_item"></div>
                                                    </div>
                                                  </div>
                                                ) : null
                                              ) : null
                                            )}
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                  ) : null
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </nav>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  page: PropTypes.shape({
    menus: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
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
  }),
}
