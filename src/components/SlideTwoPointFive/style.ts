import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  image: {
    width: '80%',
    margin: '0 10%',
  },
  imageLink: {
    margin: 'auto',
  },
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    image: {
      width: '100%',
      margin: '0',
    },
  },
});
