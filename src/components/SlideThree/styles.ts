import { createUseStyles } from 'react-jss';
import heroImage from '../../assets/Mastrangelo.jpg';

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
  pic: {
    width: '45%',
    height: '30vh',
    margin: 'auto',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 25%',
    backgroundColor: 'black',
    border: '1vmax solid black',
    filter: 'grayscale(65%)',
  },
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    wrapper: {
      width: '85%',
    },
    text: {
      fontSize: '4vmin',
    },
    pic: {
      width: '50%',
      height: '20vmax',
    },
  },
});
