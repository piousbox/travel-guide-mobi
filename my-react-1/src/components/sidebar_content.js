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
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

export default React.createClass({
  getInitialState () {
    return {}
  },

  render () {
    const style = this.props.style ? update(styles.sidebar, { $merge: this.props.style }) : styles.sidebar;

    console.log('props:', this.props);

    return (
<MaterialTitlePanel title="Travel Guide Mobi" style={style}>
  <div style={styles.content}>
    <Link to="/pages/page1" onClick={this.props.onClickHandle} >Page 1</Link>
    <div style={styles.divider} />
    <a key="key1" href="#" style={styles.sidebarLink} onClick={this.props.onClickHandle}>Cities & Events</a>
    <a key="key2" href="#" style={styles.sidebarLink} onClick={this.props.onClickHandle}>Set Travel Plans</a>
    <div style={styles.divider} />
    <a key="key3" href="#" style={styles.sidebarLink}>Edit Profile</a>
    <a key="key4" href="#" style={styles.sidebarLink}>Logout</a>
  </div>
</MaterialTitlePanel>
    )
  }
})

