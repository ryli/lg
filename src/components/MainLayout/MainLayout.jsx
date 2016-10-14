import React, { Component, PropTypes } from 'react'
import { Icon } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './MainLayout.less'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.onCollapseChange = this.onCollapseChange.bind(this)
    this.state = {
      collapse: false,
    }
  }

  onCollapseChange(e) {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render() {
    const collapse = this.state.collapse
    const logo = (
      !collapse ? <img style={{ width: 150, marginTop: -8 }} src="//buding-img.b0.upaiyun.com/weiche/2014/11/06/d09282a21bd48a6e00e3d66f5015f35d.png" role="presentation" /> :
        <img style={{ width: 30 }} src="//buding-img.b0.upaiyun.com/weiche/2014/11/06/f9dabad8c902daa26226a71407cbcc79.png" alt="" />
    )

    return (
      <div className={collapse ? 'ant-layout-aside ant-layout-aside-collapse' : 'ant-layout-aside'}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">
            {logo}
          </div>
          <Sidebar collapse={collapse} location={this.props.location} />
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-main">
          <Header location={this.props.location} />

          <div className="ant-layout-container" ref={() => 'container'} >
            <div className="ant-layout-content" ref={() => 'content'}>
              <div style={{ minHeight: 600 }}>
                {this.props.children}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
}

export default MainLayout
