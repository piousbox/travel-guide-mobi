import React from 'react'
import MaterialTitlePanel from './material_title_panel'
import { Link } from 'react-router'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: '1px',
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
    listStyle: 'none',
    li: {
      background: 'black',
    }
  },
};

export default React.createClass({
  getInitialState () {
    return {}
  },

  render () {
    const style = this.props.style ? update(styles.sidebar, { $merge: this.props.style }) : styles.sidebar;

    return (
<MaterialTitlePanel title="Travel Guide Mobi" style={style}>
  <div style={styles.content}>
    <Link style={styles.sidebarLink} to="/cities" onClick={this.props.onClickHandle}>Cities & Events</Link>
    <Link style={styles.sidebarLink} to="/travel-plans" onClick={this.props.onClickHandle}>My Travel Plans</Link>
    <Link style={styles.sidebarLink} to="/travel-plans/edit" onClick={this.props.onClickHandle}>Set Travel Plans</Link>
    <div style={styles.divider} />
    <Link style={styles.sidebarLink} to="/profiles/edit" onClick={this.props.onClickHandle}>Edit Profile</Link>
    <Link style={styles.sidebarLink} to="/logout" onClick={this.props.onClickHandle}>Logout</Link>
  </div>
</MaterialTitlePanel>
    )
  }
})

