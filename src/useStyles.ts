import { createUseStyles } from "react-jss";
import heroImage from './assets/Mastrangelo.jpg';

const useStyles = createUseStyles({
  body: {
    zIndex: 0,
    maxWidth: 1280,
  },
  threeColumn: {
    display: 'grid',
    gridTemplate: '100% / repeat(3, 1fr)',
  },
  hTwo: {
    color: 'var(--red)',
  },
  button: {
    padding: '1rem',
    border: 'none',
    borderRadius: '1rem',
    backgroundColor: 'var(--red)',
    fontFamily: 'Roboto Mono',
    fontSize: '1rem',
    fontWeight: 500,
    fontStyle: 'regular',
    transition: 'background-color 150ms ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:active': {
      backgroundColor: 'gray',
    },
  },
  heroButton: {
    justifySelf: 'center',
    alignSelf: 'center',
    padding: '1rem 5vw',
    fontSize: '1.8vw',
  },
  heroButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 6,
    height: '20vh',
    fontSize: '2vw',
    display: 'grid',
    gridTemplate: '100% / 100%',
  },
  heroTextWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 6,
    display: 'grid',
    gridTemplate: '100% / 100%',
  },
  heroText: {
    justifySelf: 'right',
    alignSelf: 'end',
    width: '80%',
    marginBottom: '12%',
    color: 'white',
    fontFamily: 'Roboto Mono',
    fontSize: 'clamp(38px, 10vw, 150px)',
    fontWeight: 700,
    fontStyle: 'italic',
    lineHeight: '8vw',
    cursor: 'default',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 5,
    width: '80%',
    height: '70vh',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    mixBlendMode: 'normal',
    opacity: 0.7,
  },
  heroImageTwo: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 4,
    width: '80%',
    height: '70vh',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    mixBlendMode: 'multiply'
  },
  recTwo: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 3,
    width: '70%',
    height: '75vh',
    backgroundColor: '#DF2935',
  },
  recOne: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    width: '88%',
    height: '60vh',
    backgroundColor: '#7C131A',
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    heroText: {
      marginBottom: '35%',
    },
  },
});

export default useStyles;
