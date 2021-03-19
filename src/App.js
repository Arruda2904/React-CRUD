import React, { Fragment } from 'react'; //fragment serve para funcionar como uma div,mas sem ocupar espaço como a div ocupa normalmente
import {
  CssBaseline, //aparentemente ele faz css reset
  withStyles, //adiciona o style no componente todo
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Home />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);