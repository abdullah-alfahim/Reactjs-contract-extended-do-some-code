import React from 'react'


export default function Header({logo}) {
  return (
    <div className="header">
        <div className="inner_header">
            <div className="logo_area">
                <img src={logo} alt="" />
            </div>
            <div className="show_data">
                <a href="#">Show Data</a>
            </div>
        </div>
    </div>
  )
}
