import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        this is a header
        <NavLink
          to="/"
          exact
          className={styles['Header-nav']}
          activeClassName={styles['Header-nav--active']}
        >
          home
        </NavLink>
        <NavLink
          to="/hello"
          className={styles['Header-nav']}
          activeClassName={styles['Header-nav--active']}
        >
          hello
        </NavLink>
      </div>
    )
  }
}
