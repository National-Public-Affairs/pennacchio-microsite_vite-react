import { animated, useTransition } from '@react-spring/web';
import audio from '../../assets/freeholder-tom-mastrangelo-threatening-and-cursing.mp3';
import { useStyles } from './styles';
import useGeneralStyles from '../../generalStyles';

type Props = {
  currentSlide: number;
}

export default function SlideThree({ currentSlide }: Props) {
  const styles = useStyles();
  const generalStyles = useGeneralStyles();

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
      <animated.div style={style} className={`${styles.wrapper} ${generalStyles.body}`}>
        <h2 className={styles.text}>
          Don't take our word for it... just check out what <span style={{ color: 'yellow' }}>Mastrangelo</span> said about some of his Morris County colleagues.&nbsp;
          <br />
          <span style={{ color: 'var(--red)' }}>
            WARNING: EXTREMELY FOUL LANGUAGE
          </span>
        </h2>

        <audio
          controls
          src={audio}
          className={styles.audio}
        >
          Listen to the clip!
        </audio>
      </animated.div>
    )
  ));
}
