import React from 'react';

import { Query } from 'react-apollo';
import { getRecords } from './Queries';
import DeleteRecord from './DeleteRecord';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    alignItems: 'flex-start'
  },
  paper: {
    maxWidth: 350,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'lightblue'
  }
}));

const RecordList = () => {
  const classes = useStyles();

  return (
    <Query query={getRecords}>
      {({ data, error, loading }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error...</div>;
        return (
          <div className="App">
            <h1>Record List</h1>
            {data.records.map(({ band, album, id }) => {
              return (
                <Paper
                  direction="column"
                  alignItems="center"
                  justify="center"
                  className={classes.paper}
                >
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    className={classes.root}
                  >
                    <List className={classes.root} key={id}>
                      <ListItem justify="center" className={classes.root}>
                        Band: {band}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        Album: {album}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        <DeleteRecord id={id} />
                      </ListItem>
                    </List>
                  </Grid>
                </Paper>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};
export default RecordList;
