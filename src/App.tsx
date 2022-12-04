import React from 'react';
import './App.css';
import { PullRequest } from './pullRequests/PullRequest';
import PullRequestsPage from './pullRequests/PullRequestsPage';
import axios from 'axios';

function App() {



  const [prData, setPrs] = React.useState<PullRequest[]>([]);

  axios
  .get('http://devtools.stcone.io/pullrequests')
  .then((response) => response.data)
  .then((data) => {
    setPrs(data);
  });

       return (
        <>
          <div className="container">
           <PullRequestsPage prData={prData}/>
         </div>
        </>
         );
}

export default App;
