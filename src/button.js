import styled from 'styled-components';
import { variant } from 'styled-system';

const Button = styled('button')(
  {
    margin: '10px',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px'
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'tomato'
      },
      secondary: {
        color: 'white',
        bg: 'blue'
      }
    }
  })
);

export default Button;
