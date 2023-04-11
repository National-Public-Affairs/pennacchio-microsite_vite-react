import { animated, useTransition } from '@react-spring/web';
import articleCutout from '../../assets/image.png';
import useGeneralStyles from '../../generalStyles';
import { useStyles } from './style';

type Props = {
  currentSlide: number;
}

export default function SlideTwoPointFive({ currentSlide }: Props) {
  const generalStyles = useGeneralStyles();
  const styles = useStyles();

  const transitions = useTransition(currentSlide === 5, {
    from: {
      opacity: 0,
      transform: 'translate(0,-200px)',
    },
    enter: {
      opacity: 1,
      transform: 'translate(0,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate(500px,-200px)',
    },
    delay: 500,
  });

  return transitions((style, item) => (
    item && (
      <animated.div style={style} className={generalStyles.body}>
        <a
          href="https://newjerseyglobe.com/legislature/mastrangelo-fundraiser-featured-ex-nfl-players-convicted-of-sexual-assaults/"
          className={styles.imageLink}
        >
          <img
            src={articleCutout}
            alt="Mastrangelo fundraiser featured ex-NFL players convicted of sexual assaults - New Jersey Globe"
            className={styles.image}
          />
        </a>
        <a href="https://newjerseyglobe.com/legislature/mastrangelo-fundraiser-featured-ex-nfl-players-convicted-of-sexual-assaults/">
          <h2>
            Click to find out more
          </h2>
        </a>
      </animated.div>
    )
  ));
}
