import { animated, useTransition } from '@react-spring/web';
import audio from '../../assets/freeholder-tom-mastrangelo-threatening-and-cursing.mp3'

type Props = {
  currentSlide: number;
}

export default function SlideThree({ currentSlide }: Props) {
  const transitions = useTransition(currentSlide === 3, {
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
    delay: 1000,
  });

  return transitions((style, item) => (
    item && (
      <animated.div style={style}>
        <h2>
          Don't take our word for it... just check out what Mastrangelo said about some of his Morris County colleagues.&nbsp;
          <span style={{ color: 'var(--red)' }}>
            WARNING: EXTREMELY FOUL LANGUAGE
          </span>
        </h2>

        <audio
          controls
          src={audio}
        >
          Listen to the clip!
        </audio>
      </animated.div>
    )
  ));
}
