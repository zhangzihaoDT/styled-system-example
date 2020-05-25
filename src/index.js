import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from './box';
import Button from './button';
import Card from './card';
import theme from './theme';
import './styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Card width={[1, 1 / 2, 1 / 4]} />

        <Box variant="primary" size="default">
          Box 1
        </Box>
        <Box variant="secondary" size="large">
          Box 2
        </Box>
        <Box variant="danger" size="default">
          Box 3
        </Box>

        <Button variant="primary">Pink</Button>
        <Button variant="secondary">Blue</Button>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
