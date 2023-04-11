import { animated, useTransition } from '@react-spring/web';
import useGeneralStyles from '../../generalStyles';
import { useStyles } from './styles';

type Props = {
  currentSlide: number;
}

export default function FinancialWoes({ currentSlide }: Props) {
  const generalStyles = useGeneralStyles();
  const styles = useStyles();

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
    delay: 500,
  });

  return transitions((style, item) => (
    item && (
      <animated.div style={style} className={`${styles.wrapper} ${generalStyles.body}`}>
        <h2>
          <span style={{ color: 'var(--red)' }}>Mastrangelo can't manage his own finances.</span> We can't trust him to manage ours!
        </h2>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            Mastrangelo and his businesses have been subject to 19 tax liens or civil judgements, totaling <span style={{ color: 'yellow' }}>more than $60,000</span>.
          </li>
          <li className={styles.listItem}>
            Mastrangelo accepted a <span style={{ color: 'yellow' }}>$40,000 taxpayer-funded handout</span>.
          </li>
          <li className={styles.listItem}>
            Don't believe Mastrangelo's lies. Under his watch, the Morris County budget has <span style={{ color: 'yellow' }}>increased taxes by more than $39 million</span>.
          </li>
        </ul>
      </animated.div>
    )
  ));
}
