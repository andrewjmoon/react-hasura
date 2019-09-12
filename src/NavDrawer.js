import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

export class NavDrawer extends React.Component {
  render() {
    return (
      <Drawer
        anchor="top"
        open={this.props.drawerOpened}
        onClose={this.props.toggleDrawer(false)}
      >
        <div
          onClick={this.props.toggleDrawer(false)}
          onKeyDown={this.props.toggleDrawer(false)}
        >
          <ul>
            <li>
              <Link className="Link" to="/home">
                {' '}
                Home{' '}
              </Link>
            </li>
            <li>
              <Link className="Link" to="/combinedrecords">
                {' '}
                Record Input and List{' '}
              </Link>
            </li>
            <li>
              <Link className="Link" to="/amrecordcollection">
                {' '}
                AM'sRecordCollection{' '}
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    );
  }
}
