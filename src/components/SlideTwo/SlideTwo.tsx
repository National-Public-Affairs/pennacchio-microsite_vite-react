import { useState } from 'react';
import { animated, useTransition, useSpring } from '@react-spring/web';
import Qualities from './Qualities';
import useStyles from '../../generalStyles';

type Props = {
  display: boolean;
}

export default function SlideTwo({ display }: Props) {
  const classes = useStyles();

  const [go, set] = useState<boolean>(false);

  const transitions = useTransition(!display, {
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

  const spring = useSpring({
    opacity: go ? 1 : 0,
    transform: go ? 'translate(0,0)' : 'translate(0,200px)',
    delay: 1500,
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

        <Qualities go={go} set={set} />
        {/* <animated.div style={spring}>
          <h2>
            Don't take our word for it... just check out what Mastrangelo said about some of his Morris County colleagues.&nbsp;
            <span style={{ color: 'var(--red)' }}>
              WARNING: EXTREMELY FOUL LANGUAGE
            </span>
          </h2>
        </animated.div> */}
      </animated.div>
    )
  ))
}
