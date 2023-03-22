import React from 'react';
import useStyles from '../useStyles';

export default function Intro() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.heroTextWrapper}>
        <div className={classes.heroText}>
          Do you know the real Tom Mastrangelo?
        </div>
      </div>

      <div className={classes.heroButtonWrapper}>
        <button className={`${classes.heroButton} ${classes.button}`}>
          Find out more
        </button>
      </div>

      <div className={classes.heroImage} />
      <div className={classes.heroImageTwo} />
      <div className={classes.recTwo} />
      <div className={classes.recOne} />
      <div />
    </div>
  );
}
