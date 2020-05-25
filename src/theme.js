export default {
  colors: {
    white: '#fefefe',
    blue: '#41d2f2',
    yellow: '#f2dc6d',
    purple: '#7700bb'
  },
  boxes: {
    danger: {
      color: 'white',
      background: 'red' //  fallback to the raw value (defined by the browser)
    },
    primary: {
      color: 'white',
      background: 'tomato' //  fallback to the raw value (defined by the browser)
    },
    secondary: {
      color: 'gray', //  fallback to the raw value (defined by the browser)
      background: 'yellow'
    },
    size: {
      default: { height: '50px', lineHeight: '50px' },
      large: { height: '200px', lineHeight: '100px' }
    }
  }
};
