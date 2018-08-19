import React, {Component} from 'react'
import Container from 'muicss/lib/react/container'
import Page from '../components/Page'
import Form from '../components/Form'
import {ClipBoard} from '../components/ClipBoard'

export default class Home extends Component {
  state = {
    showForm: true,
    shortUrl: ''
  }

  stateHandler = state => {
    this.setState(state)
  }

  render() {
    return (
      <Page>
        <Container>
          {this.state.showForm ? (
            <Form onUrlReady={this.stateHandler} />
          ) : (
            <ClipBoard
              text={this.state.shortUrl}
              backToForm={this.stateHandler}
            />
          )}
        </Container>
      </Page>
    )
  }
}
