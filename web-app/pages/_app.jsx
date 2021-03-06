import App from 'next/app'
import React from 'react'
import {UrlShortenerProvider} from '../contextFactory'

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <UrlShortenerProvider>
        <Component {...pageProps} />
      </UrlShortenerProvider>
    )
  }
}
