const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Lotto = require('./LottoHooks');

const Hot = hot(Lotto);

ReactDOM.render(<Hot />, document.querySelector('#root'));