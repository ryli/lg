import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import MainLayout from '../components/MainLayout/MainLayout'
import styles from './IndexPage.less'

function IndexPage({ location, children }) {
  const indexPage = (
    <h1>Welcome to POS System.</h1>
  )

  return (
    <MainLayout location={location}>
      {children || indexPage}
    </MainLayout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default connect()(IndexPage)
