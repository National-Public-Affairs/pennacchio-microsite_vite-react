import { animated, useTransition, useSpring } from '@react-spring/web';
import { useStyles } from './styles';

type Props = {
  currentSlide: number;
  setSlide: Function;
}

export default function SlideOne({
  currentSlide,
  setSlide,
}: Props) {
  const classes = useStyles();

  const transitions = useTransition(currentSlide === 1, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  const recOneSpring = useSpring({
    transform: currentSlide === 1 ? 'translate(0,0)' : 'translate(500px,-200px)',
  });

  const recTwoSpring = useSpring({
    transform: currentSlide === 1 ? 'translate(0,0)' : 'translate(-500px,-200px)',
  });

  const heroImgSpring = useSpring({
    transform: currentSlide === 1 ? 'translate(0,0)' : 'translate(-10px,-200px)',
  });
  
  const heroTextSpring = useSpring({
    letterSpacing: currentSlide === 1 ? '0.5vw' : '1vw',
    transform: currentSlide === 1 ? 'translate(0,0)' : 'translate(200px,0)',
  });
  
  const buttonSpring = useSpring({
    transform: currentSlide === 1 ? 'translate(0,0)' : 'translate(0,200px)',
  });

  return transitions((styles, item) => (
    item && (
      <animated.div style={styles}>
        <div className={classes.heroTextWrapper}>
          <animated.div className={classes.heroText} style={heroTextSpring}>
            Do you know the real Tom Mastrangelo?
          </animated.div>
        </div>

        <div className={classes.heroButtonWrapper}>
          <animated.button
            className={`${classes.heroButton} ${classes.button}`}
            style={buttonSpring}
            onClick={() => setSlide(2)}
          >
            find out more
          </animated.button>
        </div>

        <animated.div
          className={classes.heroImage}
          style={heroImgSpring}
        />
        <animated.div
          className={classes.heroImageTwo}
          style={heroImgSpring}
        />
        <animated.div
          className={classes.recTwo}
          style={recTwoSpring}
        />
        <animated.div
          className={classes.recOne}
          style={recOneSpring}
        />

        <div />
      </animated.div>
    )
  ));
}
