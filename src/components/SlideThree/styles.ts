import { createUseStyles } from 'react-jss';
import heroImage from '../../assets/Mastrangelo.jpg';

export const useStyles = createUseStyles({
  wrapper: {
    width: '100%',
    maxWidth: 1200,
    margin: 'auto',
  },
  text: {
    position: 'absolute',
    bottom: 0,
    margin: 0,
    paddingTop: '1vh',
    backgroundColor: 'black',
    fontSize: 'inherited',
  },
  audio: {
    width: '100%',
    maxWidth: 700,
    margin: '10px auto',
  },
  pic: {
    position: 'relative',
    width: '100%',
    height: '75vh',
    margin: 'auto',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundColor: 'black',
    border: '1vmax solid black',
    filter: 'grayscale(65%)',
  },
  // general mobile styling
  '@media only screen and (max-width: 900px) and (min-height: 300px)': {
    wrapper: {
    },
    text: {
      fontSize: '4vmin',
      lineHeight: '4.5vmin',
    },
    pic: {
      width: '100%',
      height: '65vh',
    },
  },
});
