import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    zIndex: 10,
    textAlign: 'center',
    fontSize: '9px',
    color: 'gray',
  },
});
