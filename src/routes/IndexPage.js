import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import MainLayout from '../components/MainLayout/MainLayout'
import styles from './IndexPage.less'

function IndexPage(location) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <h1>Welcome to dva!</h1>
        <hr />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/sorrycc/blog/issues/8" target="_blank" rel="noopener noreferrer">Getting Started</a></li>
        </ul>
      </div>
    </MainLayout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default connect()(IndexPage)
