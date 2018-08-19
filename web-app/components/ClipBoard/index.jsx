import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Button from 'muicss/lib/react/button'

import './index.scss'

export class ClipBoard extends PureComponent {
  copyToClipboardHandler = () => {
    if (this.props.text !== '') {
      navigator.clipboard
        .writeText(this.props.text)
        .then(() => {
          alert('Copied!')
        })
        .catch(err => {
          alert('Something went wrong', err)
        })
    }
  }

  backToFormHandler = () => {
    this.props.backToForm({showForm: true})
  }

  render() {
    return (
      <div className="ClipBoard">
        <p className="mui--text-title">{this.props.text}</p>
        <Button color="primary" onClick={this.copyToClipboardHandler}>
          Copy to clipboard
        </Button>
        <Button color="primary" onClick={this.backToFormHandler}>
          Type another url
        </Button>
      </div>
    )
  }
}

ClipBoard.propTypes = {
  text: PropTypes.string,
  backToForm: PropTypes.func
}
