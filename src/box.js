import styled from 'styled-components';
import { variant } from 'styled-system';

const boxStyle = variant({ key: 'boxes' });
const boxSizeStyle = variant({
  prop: 'size',
  key: 'boxes.size'
});

const Box = styled.div`
  margin: 10px;
  padding: 10px;
  vertical-align: middle;
  ${boxStyle}
  ${boxSizeStyle}
`;

export default Box;
