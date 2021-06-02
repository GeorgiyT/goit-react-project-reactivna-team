import Loader from 'react-loader-spinner';
import React from 'react';
import classes from './Loader.module.css';

export const IsLoader =()=>{
    return (
      <Loader
    type="Circles" color="#74dbe9" height={100} width={100}
        className={classes.loader}
      />
    );
}
