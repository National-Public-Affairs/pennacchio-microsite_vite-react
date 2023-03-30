import { animated, useTransition } from '@react-spring/web';
import useGeneralStyles from '../../generalStyles';
import { useStyles } from './styles';

type Props = {
  currentSlide: number;
}

export default function SlideFour({ currentSlide}: Props) {
  const generalStyles = useGeneralStyles();
  const styles = useStyles();

  const transitions = useTransition(currentSlide === 4, {
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
      <animated.div
        style={style}
        className={`${generalStyles.body} ${styles.wrapper}`}
      >
        <h2 className={styles.text}>
          On <span style={{ color: 'yellow' }}>June 6th</span>, don't let <span style={{ color: 'red' }}>Mastrangelo</span> bully his way into office again!
        </h2>
        
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/RasmrAsnO8o" title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
          style={{ borderRadius: '1rem' }}
        >
        </iframe>
      </animated.div>
    )
  ));
}
