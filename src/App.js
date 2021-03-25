import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to='/topics'>Go to Topics</Link>
      <button onClick={() => props.history.push('/topics')}>
        Go to Topics
      </button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>TOPICS LIST</h1>
      <Link to={`${props.match.url}/13`}>Topic 13</Link>
      <Link to={`${props.match.url}/17`}>Topic 17</Link>
      <Link to={`${props.match.url}/21`}>Topic 21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
