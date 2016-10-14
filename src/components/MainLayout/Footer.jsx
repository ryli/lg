import React, { PropTypes } from 'react'

const Footer = ({ location }) => {
  const year = new Date().getFullYear()

  return (
    <div className="ant-layout-footer">
      &copy; {year} Weiche
    </div>
  )
}

export default Footer
