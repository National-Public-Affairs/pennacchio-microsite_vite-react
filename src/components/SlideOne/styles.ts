import { createUseStyles } from "react-jss";
import heroImage from '../../assets/Mastrangelo.jpg';

const useStyles = createUseStyles({
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
    maxWidth: 500,
    padding: '1rem 5vw',
    fontSize: 'clamp(18px, 1.8vw, 32px)',
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
    marginBottom: 'clamp(10px, 12%, 200px)',
    color: 'white',
    fontFamily: 'Roboto Mono',
    fontSize: 'clamp(38px, 10vw, 125px)',
    fontWeight: 700,
    fontStyle: 'italic',
    lineHeight: 'clamp(28px, 8vw, 125px)',
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
    border: '4vmax solid black',
    opacity: 0.7,
    filter: 'grayscale(65%)'
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
    backgroundColor: '#DF2935',
  },
  // general mobile
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    heroText: {
      marginBottom: '35%',
    },
    button: {
      padding: '3vmin',
      borderRadius: '3vmin',
      fontSize: '4vmin',
    },
  },
  // mobile landscape
  '@media only screen and (max-width: 950px) and (max-height: 450px)': {
    heroText: {
      marginBottom: '11%',
      fontSize: '5vw',
      lineHeight: '5.5vw',
    },
    heroButtonWrapper: {
      height: '18vh',
    },
    heroButton: {
      alignSelf: 'start',
      padding: '0.5rem 2vw',
    },
  },
});

export default useStyles;
