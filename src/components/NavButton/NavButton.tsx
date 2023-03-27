import { useStyles } from './styles';

type Props = {
  currentSlide: number;
  setSlide: Function;
}

export default function NavButton({ currentSlide, setSlide }: Props) {
  const style = useStyles();

  return (
    <div
      className={`${style.buttonWrapper}`}
      onClick={() => setSlide(currentSlide + 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 96 960 960"
        width="48"
        className={style.button}
      >
        <path
          d="M459 874q-8-8-8-21t8-21l226-226H190q-13 0-21.5-8.5T160 576q0-13 8.5-21.5T190 546h495L459 320q-8-8-8-21.5t8-21.5q8-8 21-8t21 8l278 278q5 5 7 10t2 11q0 5-2 10.5t-7 10.5L501 875q-8 8-21 7.5t-21-8.5Z"
        />
      </svg>
    </div>
  );
}
