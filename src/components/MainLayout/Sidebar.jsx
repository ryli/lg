import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

function getOpenKeyFromUrl(pathname) {
  let key = ''
  try {
    key = pathname.split('/')[1]
  } catch (e) {}
  return key
}

function getMenuKeyFromUrl(pathname) {
  let key = ''
  try {
    // key = pathname.match(/\/([^\/]*)/i)[1]
    const keys = pathname.split('/')
    key = `${keys[1]}/${keys[2]}`
  } catch (e) {}
  return key
}

function getKeyPath(key) {
  const map = {
    home: ['home'],
    home2: ['home2'],
    404: ['404'],
  }
  return map[key] || []
}

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: getMenuKeyFromUrl(this.props.location.pathname) || 'home',
      openKeys: [getOpenKeyFromUrl(this.props.location.pathname) || 'home'],
    }
    this.handleClick = this.handleClick.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapse !== this.props.collapse) {
      this.setState({ collapse: nextProps.collapse })
    }
  }

  onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1))
    this.setState({ openKeys: this.getKeyPath(latestOpenKey) })
  }

  handleClick(e) {
    this.setState({ current: e.key })
  }

  render() {
    const SubMenu = Menu.SubMenu

    return (
      <Menu
        selectedKeys={[this.state.current]}
        openKeys={this.state.openKeys}
        mode={this.state.collapse ? 'vertical' : 'inline'}
        onClick={this.handleClick}
        onOpenChange={this.onOpenChange}
        theme="dark"
      >
        <SubMenu
          key="home"
          title={<span > <Icon type="bars" /> <span className="nav-text"> 导航0 < /span></span>}
        >
          <Menu.Item key="home/home">
            <Link to="/">
              <Icon type="home" />Home
            </Link>
          </Menu.Item>
          <Menu.Item key="home/users">
            <Link to="/home/users">
              <Icon type="bars" />Users
            </Link>
          </Menu.Item>
          <Menu.Item key="home/products">
            <Link to="/home/products">
              <Icon type="bars" />Products
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="home2"
          title={<span > <Icon type="bars" /> <span className="nav-text"> 导航1 < /span></span>}
        >
          <Menu.Item key="home2/home">
            <Link to="/">
              <Icon type="home" />Home
            </Link>
          </Menu.Item>
          <Menu.Item key="home2/users">
            <Link to="/home2/users">
              <Icon type="bars" />Users
            </Link>
          </Menu.Item>
          <Menu.Item key="home2/products">
            <Link to="/home2/products">
              <Icon type="bars" />Products
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="404"
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
