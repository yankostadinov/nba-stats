import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    marginTop: '10vh'
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.title}>
      <Typography variant='h1' gutterBottom>Welcome to NBA stats</Typography>
    </Container>
  );
};

export default Home;
