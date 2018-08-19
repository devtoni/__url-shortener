import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {UrlShortenerDomain} from './lib'

const UrlShortenerContext = React.createContext()

export class UrlShortenerProvider extends Component {
  render() {
    return (
      <UrlShortenerContext.Provider
        value={{
          domain: new UrlShortenerDomain()
        }}
      >
        {this.props.children}
      </UrlShortenerContext.Provider>
    )
  }
}

export const UrlShortenerConsumer = UrlShortenerContext.Consumer

export const withContext = (Context, Component) =>
  React.forwardRef((props, ref) => (
    <Context.Consumer>
      {domain => <Component {...props} context={domain} ref={ref} />}
    </Context.Consumer>
  ))

UrlShortenerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
