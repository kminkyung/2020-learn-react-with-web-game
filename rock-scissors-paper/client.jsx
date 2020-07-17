const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const RSP = require('./RSPHooks');

const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));