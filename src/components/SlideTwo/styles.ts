import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  body: {
    zIndex: 0,
    maxWidth: 1280,
    padding: '1rem',
  },
  hOne: {
    lineHeight: 'inherit',
  },
  hTwo: {
    margin: 'inherit',
    lineHeight: 'inherit',
    color: 'var(--red)',
  },
  about: {
    lineHeight: 'inherit',
  },
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    hOne: {
      lineHeight: 'clamp(9px, 3vmin, 1px)',
    },
    hTwo: {
      margin: '5px 0',
      lineHeight: 'clamp(9px, 2vmin, 14px)',
    },
    about: {
      color: 'var(--red)',
      lineHeight: 'clamp(9px, 5vmin, 16px)',
    },
  }
});
