import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    alignSelf: 'center',
  },
  list: {
    paddingBlock: '1rem',
    backgroundColor: 'black',
  },
  listItem: {
    margin: '1rem 0',
  },
  heading: {
    fontSize: 'clamp(18px, 2vmax, 36px)',
  },
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    heading: {
      fontSize: '4vmax',
    },
  },
});
