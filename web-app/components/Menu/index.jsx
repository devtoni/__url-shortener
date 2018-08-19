import React, {Fragment} from 'react'

import Appbar from 'muicss/lib/react/appbar'

import './index.scss'

export default () => (
  <Fragment>
    <Appbar className="Menu">
      <h1 className="Menu-title">url-shortener</h1>
    </Appbar>
  </Fragment>
)
