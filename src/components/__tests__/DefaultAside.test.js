import React from 'react';
import ReactDOM from 'react-dom';
import RightSlideMenu from '../RightSlideMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RightSlideMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
