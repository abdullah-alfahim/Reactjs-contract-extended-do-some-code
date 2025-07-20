import React from 'react'
import { Link } from 'react-router'


export default function Header({logo}) {
  return (
    <div className="header">
        <div className="inner_header">
            <div className="logo_area">
                <img src={logo} alt="" />
            </div>
            <div className="show_data">
                <Link to="/view">Show Data</Link>
            </div>
        </div>
    </div>
  )
}
