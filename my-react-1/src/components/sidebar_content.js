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

const clickMe = () => {
  console.log('click me');
};

const SidebarContent = (props) => {
  // const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  const style = props.style ? update(styles.sidebar, { $merge: props.style }) : styles.sidebar;

  // const links = [];

  const handle = () => {
    console.log('handle');
  };

  return (
    <MaterialTitlePanel title="Travel Guide Mobi" style={style}>
      <div style={styles.content}>
        <Link to="/pages/page1" >Page 1</Link>
        <div style={styles.divider} />
        <a key="key1" href="#" style={styles.sidebarLink}>Cities & Events</a>
        <a key="key2" href="#" style={styles.sidebarLink}>Set Travel Plans</a>
        <div style={styles.divider} />
        <a key="key3" href="#" style={styles.sidebarLink}>Edit Profile</a>
        <a key="key4" href="#" style={styles.sidebarLink}>Logout</a>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: React.PropTypes.object,
};

export default SidebarContent;

