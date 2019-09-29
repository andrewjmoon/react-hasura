import React, { Component } from 'react';
import Tabletop from 'tabletop';
import Pagination from 'react-js-pagination';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  bullet: {
    margin: '0 2px',

    transform: 'scale(0.8)',
    minWidth: 650,
    backgroundColor: 'lightblue'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },
  items: {
    fontSize: 25
  }
});

class RecordInfo extends Component {
  state = {
    data: [],
    activePage: 1,
    itemsCountPerPage: 5,
    totalItemsCount: 1
  };

  login() {
    this.props.auth.login();
  }

  componentDidMount() {
    Tabletop.init({
      key: '1FTPfb5gUzKDI0olrTeOpBmsoLl4vc4g6xMHme3IoAgQ',
      callback: googleData => {
        console.log('google sheet data --->', googleData);
        this.setState({
          data: googleData.RecordCollection.elements
        });
      },
      simpleSheet: false
    });
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      return (
        <div className="App">
          <div>
            <h2>AM's Record Collection</h2>

            {data
              .slice(
                (this.state.activePage - 1) * this.state.itemsCountPerPage,
                this.state.activePage * this.state.itemsCountPerPage
              )
              .map(a => {
                return (
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={10} key={a.Id}>
                      <Card className={classes.bullet}>
                        <CardContent className={classes.title}>
                          Band: {a.Band}
                        </CardContent>
                        <CardContent className={classes.title}>
                          Album: {a.Album}
                        </CardContent>
                        <Link
                          className={classes.title}
                          href={a.Info}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Record Info
                        </Link>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemsCountPerPage}
              totalItemsCount={50}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <h4>
          You are not logged in! Please{' '}
          <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
            Log In
          </a>{' '}
          to continue.
        </h4>
      </div>
    );
  }
}

export default withStyles(styles)(RecordInfo);
