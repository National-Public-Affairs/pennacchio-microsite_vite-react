import { animated, useTransition } from '@react-spring/web';
import useGeneralStyles from '../../generalStyles';

type Props = {
  currentSlide: number;
}

export default function SlideFour({ currentSlide}: Props) {
  const generalStyles = useGeneralStyles();

  const transitions = useTransition(currentSlide === 6, {
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
        <h2>
          On <span style={{ color: 'yellow' }}>June 6th</span>, don't let <span style={{ color: 'red' }}>Mastrangelo</span> bully his way into office again!
        </h2>
        
      </animated.div>
    )
  ));
}
