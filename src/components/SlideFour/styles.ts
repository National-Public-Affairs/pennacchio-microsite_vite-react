import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: '75%',
    maxWidth: 1200,
    margin: 'auto',
  },
  text: {
    fontSize: 'inherited',
  },
  audio: {
    width: '100%',
    maxWidth: 700,
  },
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    wrapper: {
      width: '85%',
    },
    text: {
      fontSize: '4vmin',
    },
  },
});