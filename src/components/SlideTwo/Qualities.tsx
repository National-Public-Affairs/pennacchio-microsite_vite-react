import { ReactElement } from 'react';
import { animated, useTrail } from '@react-spring/web';
import useStyles from '../../useStyles';

type Props = {
  go: boolean;
  set: Function;
}

export default function Qualities({ go, set }: Props) {
  const classes = useStyles();

  const trails = useTrail(3, {
    from: {
      opacity: 0,
      transform: 'translate(0,100px)',
    },
    to: {
      opacity: 1,
      transform: 'translate(0,0)',
    },
    delay: 1500,
    onResolve: () => set(true),
  });

  const blurbOne = (): ReactElement => (
    <>
      <h2 className={classes.hTwo}>
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
    </>
  );

  const blurbTwo = (): ReactElement => (
    <>
      <h2 className={classes.hTwo}>
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
    </>
  );

  const blurbThree = (): ReactElement => (
    <>
      <h2 className={classes.hTwo}>
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
    </>
  );

  const data: ReactElement[] = [blurbOne(), blurbTwo(), blurbThree()];

  return (
    <div className={classes.threeColumn}>
      {
        trails.map((props, idx) => (
          <animated.div style={props}>
            {data[idx]}
          </animated.div>
        ))
      }
    </div>
  );
}
