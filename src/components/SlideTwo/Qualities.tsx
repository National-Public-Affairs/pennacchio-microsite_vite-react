import { animated, useSpring } from '@react-spring/web';
import useGeneralStyles from '../../generalStyles';
import { useStyles } from './styles';

type Props = {
  currentSlide: number;
}

export default function Qualities({ currentSlide }: Props) {
  const classes = useGeneralStyles();
  const styles = useStyles();

  const styleOne = useSpring({
    opacity: currentSlide >= 2 && currentSlide <= 4 ? 1 : 0,
    transform: currentSlide ? 'translate(0,0)' : 'translate(0,100px)',
  });

  const styleTwo = useSpring({
    opacity: currentSlide === 3 || currentSlide === 4 ? 1 : 0,
    transform: currentSlide ? 'translate(0,0)' : 'translate(0,100px)',
  });

  const styleThree = useSpring({
    opacity: currentSlide === 4 ? 1 : 0,
    transform: currentSlide ? 'translate(0,0)' : 'translate(0,100px)',
  });

  
  return (
    <div className={classes.threeColumn}>
      <animated.div style={styleOne}>
        <h2 className={styles.hTwo}>
        HARRASSES HIS OPPONENTS
      </h2>
      <p className={classes.case}>
        COMPLAINT #I-2016-005748
        <br />
        MUNI: 1421
        <br />
        CALL TYPE: HARASSMENT
        <br />
        ROLE: ACCUSED
        <br />
        NAME: MASTRANGELO, THOMAS J.
        <br />
        AGE: 59
      </p>
      <p className={classes.case}>
        MONTVILLE POLICE DEPARTMENT
        <br />
        FILED: 04-25-2016
      </p>
      </animated.div>

      <animated.div style={styleTwo}>
        <h2 className={styles.hTwo}>
          BULLIES PEOPLE WHO STAND IN HIS WAY
        </h2>
        <p className={classes.case}>
          CASE: S-2016-243
          <br />
          DEFENDANT: THOMAS MASTRANGELO
          <br />
          GENDER: MALE
        </p>
        <h3>
          CHARGE INFO
        </h3>
        <ul className={classes.case}>
          <li>
            SIMPLE ASSAULT
          </li>
          <li>
            THREAT OF SBI BY PHYSICAL MENACE
          </li>
        </ul>
        <p className={classes.case}>
          COMPLAINT #S-2016-243
          <br />
          OFFENSE DATE: 06-25-2016
          <br />
          POLICE CASE #2016-00574
        </p>
        <p className={classes.case}>
          MONTVILLE TWP MUNICIPAL COURT
        </p>
      </animated.div>

      <animated.div style={styleThree}>
        <h2 className={styles.hTwo}>
          INTIMIDATES THEM INTO DOING WHAT HE WANTS
        </h2>
        <p className={classes.case}>
          CASE #I-2016-005748
          <br />
          MUNI: 1421
          <br />
          CALL TYPE: HARASSMENT
          <br />
          ROLE: ACCUSED
          <br />
          NAME: MASTRANGELO, THOMAS J.
        </p>
        <p className={classes.case}>
          MONTVILLE POLICE DEPARTMENT
          <br />
          FILED: 05-11-2019
        </p>
        <p className={classes.case}>
          "She felt threatened by Mastrangelo's demeanor and that [Mastrangelo] is a 'scary guy'"
        </p>
      </animated.div>
    </div>
  );
}
