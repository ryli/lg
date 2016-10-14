import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Products from './routes/Products'
import Users from './routes/Users'
import NotFound from './routes/NotFound'

const requireAuth = (nextState, replace) => {
  // console.log('enter')
  // replace({ pathname: '/' })
}

const willLeave = (nextState) => {
  // console.log('leave')
}

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <Route path="products" component={Products} onEnter={requireAuth} onLeave={willLeave} />
        <Route path="users" component={Users} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  )
}
