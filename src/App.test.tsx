import React from 'react';
import MainApp from "./App";
import ReactDOM from 'react-dom';

test('renders without crashing', () => {
  const div: HTMLElement | null = document.getElementById('div')
  if(div){
    ReactDOM.render(<MainApp/>, div)
    ReactDOM.unmountComponentAtNode(div)
  }
});
