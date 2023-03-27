import { animated, useTransition } from '@react-spring/web';
import Qualities from './Qualities';
import useGeneralStyles from '../../generalStyles';
import { useStyles } from './styles';

type Props = {
  currentSlide: number;
}

export default function SlideTwo({ currentSlide }: Props) {
  const generalStyle = useGeneralStyles();
  const styles = useStyles();

  const transitions = useTransition(currentSlide >= 2 && currentSlide <= 4, {
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
      <animated.div className={generalStyle.body} style={style}>
        <h2 className={styles.about}>
          Failed Commissioner Tom Mastrangelo isn’t fit for office.<span style={{ color: 'white' }}> His behavior should disqualify him from holding any office, not earn him a promotion and make him a Senator.</span>
        </h2>

        <h1 style={{ color: 'yellow' }} className={styles.hOne}>
          Mastrangelo:
        </h1>

        <Qualities currentSlide={currentSlide} />
      </animated.div>
    )
  ))
}
