---
type: "Introduction"
category: "Getting Started"
parent: "Informations"
title: "Informations"
description: "General project informations and browsers support."
date: "2050-09-10"
---

<p align="center">
  <a href="/" title="Xtend UI" style="display: inline-block;">
    <img src="https://raw.githubusercontent.com/minimit/xtendui/master/static/logo.svg" loading="eager" alt="Xtend UI" width="200" height="47">
  </a>
</p>

<p align="center">
  <a href="/introduction/setup">Setup</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="/components">Components</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="/themes">Themes</a>
  <br/><br/>
  <a href="https://github.com/minimit/xtendui/blob/beta/LICENSE" title="License" style="display: inline-block;">
    <img src="https://img.shields.io/npm/l/xtendui.svg?style=flat-square" alt="License" loading="eager">
  </a>
  <a href="https://github.com/minimit/xtendui/actions?query=workflow%3ARelease" title="Build Status" style="display: inline-block;">
    <img src="https://img.shields.io/github/workflow/status/minimit/xtendui/Release?style=flat-square" alt="Build Status" loading="eager">
  </a>
  <a href="https://depfu.com/repos/github/minimit/xtendui" title="Dependencies" style="display: inline-block;">
    <img src="https://img.shields.io/depfu/minimit/xtendui?style=flat-square" alt="Dependencies" loading="eager">
  </a>
  <a href="https://www.npmjs.com/package/xtendui" title="Latest Release" style="display: inline-block;">
    <img src="https://img.shields.io/npm/v/xtendui.svg?style=flat-square" alt="Latest Release" loading="eager">
  </a>
</p>

## About

##### Custom frontend development with Vanilla Javascript and Tailwind Components

Xtend UI is a framework for custom styling, interactions and animations. Extremely customizable and designed for building complex user interfaces.

* Css with [TailwindCss](https://tailwindcss.com/) and [Postcss](https://postcss.org/)
* Some animations and interactions with [Gsap](https://greensock.com/gsap/)
* Positioning with [Popperjs](https://popper.js.org/)
* Docs with [Gatsby](https://www.gatsbyjs.com/)
* Release with [Semantic Release](https://github.com/semantic-release/semantic-release)
* Docs icons with [Feather Icons](https://feathericons.com/)
* Docs images with [Unsplash](https://source.unsplash.com/)

[Supported browsers](https://github.com/minimit/xtendui/blob/beta/.browserslistrc) are browsers that supports `css variables`, `css grid`, `async`, `:scope`,  `composedPath`.

## Setup

For a complete css and js setup guide visit [online setup page](/introduction/setup) or [github setup page](https://github.com/minimit/xtendui/blob/beta/SETUP.md).

## Contributing

Read our [contributing docs](https://github.com/minimit/xtendui/blob/beta/.github/CONTRIBUTING.md) before submitting a pull request.

## Documentation

* Clone the repository `git clone https://github.com/minimit/xtendui.git --depth 1`
* Install required npm packages with `npm install`
* Create a **dummy contentful space** and create a root file `.env` file with `CONTENTFUL_SPACE=<value>` and `CONTENTFUL_ACCESS_TOKEN=<value>`
* Use `npm run build` to build the docs in `/public`
* Use `npm run dev` to serve a develop version
* Use `npm run serve` to serve a production version

## Sponsors

<a href="https://www.webgriffe.com/" target="_blank" rel="noopener" title="Webgriffe" style="display: inline-block;">
  <img src="https://raw.githubusercontent.com/minimit/xtendui/1.0-dev/static/support/webgriffe.svg" loading="eager" alt="Webgriffe" width="130px">
</a>
&nbsp;&nbsp;

## Copyright and License

Code and documentation copyright 2017 - 2021 Riccardo Caroli. Code licensed [APACHE 2.0](https://github.com/minimit/xtendui/blob/beta/LICENSE). Docs licensed [CC BY 3.0](https://github.com/minimit/xtendui/blob/beta/LICENSE-DOCS).
