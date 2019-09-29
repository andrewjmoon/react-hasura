import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { NavDrawer } from './NavDrawer';
import { Link } from 'react-router-dom';

const styles = {
  secondaryBar: {
    zIndex: 0
  },
  root: {
    background: 'linear-gradient(45deg, #00BFFF 30%, #000080 70%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  menuButton: {
    marginRight: 20
  },
  title: {
    flexGrow: 3,
    alignItems: 'center',
    color: 'white'
  },
  center: {
    alignItems: 'center'
  }
};

class App extends Component {
  state = {
    drawerOpened: false
  };

  toggleDrawer = booleanValue => () => {
    this.setState({
      drawerOpened: booleanValue
    });
  };

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.props.history.push('/home');
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { classes } = this.props;
    return (
      <>
        <AppBar
          style={{ backgroundColor: 'darkgreen', color: 'white' }}
          position="static"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon className={classes.menuButton} />
            </IconButton>
            {isAuthenticated() && (
              <NavDrawer
                drawerOpened={this.state.drawerOpened}
                toggleDrawer={this.toggleDrawer}
              />
            )}
            <Typography variant="h3" align="center" className={classes.title}>
              <b>Record Collection</b>
            </Typography>
            <Button
              className={classes.root}
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {!isAuthenticated() && (
              <Button
                id="qsLoginBtn"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <AppBar
          style={{ backgroundColor: 'darkgreen', color: 'white' }}
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          <Toolbar className={classes.title}>
            <Link className={classes.title} to="/about">
              {' '}
              About Page
            </Link>
            <Link className={classes.title} to="/combinedrecords">
              {' '}
              Record Input and List{' '}
            </Link>
            <Link className={classes.title} to="/amrecordcollection">
              {' '}
              AM'sRecordCollection{' '}
            </Link>
            <Link className={classes.title} to="/resources">
              {' '}
              Resouces
            </Link>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(App);
