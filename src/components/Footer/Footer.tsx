import { useStyles } from './styles';

export default function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.wrapper}>
      <div>
        Paid for by EFO Joe Pennacchio, P.O. Box 335, Cedar Knolls, NJ
      </div>
    </footer>
  );
}
