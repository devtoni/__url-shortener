import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Menu from '../Menu'

export default class Page extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="static/assets/site.webmanifest" />
          <link
            rel="mask-icon"
            href="static/assets/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
          <link
            href="//cdn.muicss.com/mui-0.9.39/css/mui.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>Url-shortener</title>
        </Head>
        <div className="Page">
          <Menu />
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
