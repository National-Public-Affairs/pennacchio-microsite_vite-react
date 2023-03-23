import { animated, useTrail } from '@react-spring/web';
import useStyles from '../useStyles';

export default function Qualities() {
  const classes = useStyles();

  const trails = useTrail(3, {
    
  });

  return (
    <div className={classes.threeColumn}>
      <div>
        <h2 className={classes.hTwo}>
          BULLIES
        </h2>
        <p>
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
        <p>
          MONTVILLE POLICE DEPARTMENT
          <br />
          FILED: 04-25-2016
        </p>
      </div>

      <div>
        <h2 className={classes.hTwo}>
          HARRASSES
        </h2>
        <p>
          CASE: S-2016-243
          <br />
          DEFENDANT: THOMAS MASTRANGELO
          <br />
          GENDER: MALE
        </p>
        <h3>
          CHARGE INFO
        </h3>
        <ul>
          <li>
            SIMPLE ASSAULT
          </li>
          <li>
            THREAT OF SBI BY PHYSICAL MENACE
          </li>
        </ul>
        <p>
          COMPLAINT #S-2016-243
          <br />
          OFFENSE DATE: 06-25-2016
          <br />
          POLICE CASE #2016-00574
        </p>
        <p>
          MONTVILLE TWP MUNICIPAL COURT
        </p>
      </div>

      <div>
        <h2 className={classes.hTwo}>
          INTIMIDATES
        </h2>
        <p>
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
        <p>
          MONTVILLE POLICE DEPARTMENT
          <br />
          FILED: 05-11-2019
        </p>
        <p>
          "She felt threatened by Mastrangelo's demeanor and that [Mastrangelo] is a "scary guy""
        </p>
      </div>
    </div>
  );
}
