import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@keyframes arrow': {
    from: {
      transform: 'translate(-10px,0)',
    },
    to: {
      transform: 'translate(0,0)',
    },
  },
  buttonWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    width: '10vw',
    height: '10vh',
    margin: '45vh 0',
    background: 'yellow',
    display: 'grid',
    gridTemplate: '100% / 100%',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      background: 'white',
      animationName: '$arrow',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationDirection: 'normal',
      cursor: 'pointer',
    },
  },
  button: {
    justifySelf: 'center',
    alignSelf: 'center',
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    width: '10vw',
    height: '10vh',
    margin: '45vh 0',
    background: 'rgba(255,255,255,0.1)',
    display: 'grid',
    gridTemplate: '100% / 100%',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      background: 'rgba(255,255,255,0.5)',
      animationName: '$arrow',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationDirection: 'normal',
      cursor: 'pointer',
    },
  },
  backButton: {
    justifySelf: 'center',
    alignSelf: 'center',
    transform: 'rotate(180deg)',
  },
});
