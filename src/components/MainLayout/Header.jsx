import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

function getMenuKeyFromUrl(pathname) {
  let key = ''
  try {
    key = pathname.match(/\/([^\/]*)/i)[1]
  } catch (e) {}
  return key
}

function Header({ location }) {
  return (
    <Menu
      selectdKey={[getMenuKeyFromUrl(location.pathname)]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="home">
        <Link to="/">
          <Icon type="home" />Home
        </Link>
      </Menu.Item>
      <Menu.Item key="users">
        <Link to="/users">
          <Icon type="bars" />Users
        </Link>
      </Menu.Item>
      <Menu.Item key="products">
        <Link to="/products">
          <Icon type="bars" />Products
        </Link>
      </Menu.Item>
      <Menu.Item key="404">
        <Link to="/page-you-dont-know">
          <Icon type="frown-circle" />404
        </Link>
      </Menu.Item>
      <Menu.Item key="antd">
        <a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva</a>
      </Menu.Item>
    </Menu>
  )
}

Header.propTypes = {
  location: PropTypes.object,
}

export default Header
