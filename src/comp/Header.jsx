import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CURTfuk</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/add">Add User</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
