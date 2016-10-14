import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

function getMenuKeyFromUrl(pathname) {
  let key = ''
  try {
    key = pathname.match(/\/([^\/]*)/i)[1]
  } catch (e) {}
  return key
}

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '0',
      openKeys: ['sub0'],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapse !== this.props.collapse) {
      this.setState({ collapse: nextProps.collapse })
    }
  }

  render() {
    const SubMenu = Menu.SubMenu

    return (
      <Menu
        selectedKeys={[getMenuKeyFromUrl(this.props.location.pathname) || 'home']}
        defaultOpenKeys={['sub1']}
        mode={this.state.collapse ? 'vertical' : 'inline'}
        theme="dark"
      >
        <SubMenu
          key="sub1"
          title={<span > <Icon type="bars" /> <span className="nav-text"> 导航1 < /span></span>}
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
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span> <Icon type="desktop" /> <span className="nav-text"> 导航2 < /span></span>}
        >
          <Menu.Item key="404">
            <Link to="/page-you-dont-know">
              <Icon type="frown-circle" />404
            </Link>
          </Menu.Item>
          <Menu.Item key="antd">
            <a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }

}

Sidebar.propTypes = {
  location: PropTypes.object,
  collapse: PropTypes.any,
}

export default Sidebar
