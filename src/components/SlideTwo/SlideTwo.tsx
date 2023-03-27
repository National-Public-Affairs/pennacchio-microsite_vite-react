import { animated, useTransition } from '@react-spring/web';
import Qualities from './Qualities';
import useStyles from '../../generalStyles';

type Props = {
  currentSlide: number;
}

export default function SlideTwo({ currentSlide }: Props) {
  const classes = useStyles();

  const transitions = useTransition(currentSlide === 2, {
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
  });

  return transitions((style, item) => (
    item && (
      <animated.div className={classes.body} style={style}>
        <h2>
          <span style={{ color: 'var(--red)' }}>Failed Commissioner Tom Mastrangelo isn’t fit for office.</span> His behavior should disqualify him from holding any office, not earn him a promotion and make him a Senator.
        </h2>

        <h1 style={{ color: 'yellow' }}>
          Mastrangelo:
        </h1>

        <Qualities />
      </animated.div>
    )
  ))
}
