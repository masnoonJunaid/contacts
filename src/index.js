import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

 // Code straight from the react router repository, how react reacr router library work under the hood to manage the diffrent ui
 // with its link,and store
 // class BrowserRouter extends React.Component {
 //   static propTypes = {
 //     basename:PropTypes.string,
 //     forceRefresh:PropTypes.bool,
 //     getUserConfirmaiton: PropTypes.func,
 //     keyLength: PropTypes.node
 //   }
 //
 //  history = createHistory(this.props)
 //
 //  render() {
 //    return <Router history={this.history} children={this.props.children}/>
 //  }
 // }
