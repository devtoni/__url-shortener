import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'

import './index.scss'
export class UrlForm extends Component {
  state = {
    longUrl: ''
  }

  handleChange = event => {
    this.setState({longUrl: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.context.domain
      .get('get_short_url_action')
      .execute({url: this.state.longUrl})
  }

  componentDidMount() {
    const getShortUrlAction = this.props.context.domain.get(
      'get_short_url_action'
    )
    getShortUrlAction.on(
      getShortUrlAction.events.SUCCESS,
      ({url: shortUrl}) => {
        this.props.onUrlReady({shortUrl, showForm: false})
      }
    )
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="Form-content">
          <Input placeholder="Insert an url" onChange={this.handleChange} />
          <Button color="primary">Submit</Button>
        </div>
      </Form>
    )
  }
}

UrlForm.propTypes = {
  onUrlReady: PropTypes.func,
  context: PropTypes.object
}
