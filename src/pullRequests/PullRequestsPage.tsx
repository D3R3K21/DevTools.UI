import React from 'react';
// import { MOCK_PRS } from './MockPullRequests';
import { PullRequest } from './PullRequest';
import axios from 'axios';
import PropTypes from "prop-types"
import TestButton from '../projects/TestButton';

export interface Props {
    prData: PullRequest[];
}

function PullRequestsPage(props:any) {

    console.log(props.prData);
    let i=0;
    const tableHeader = 
    (<tr>
    <th>Service</th>
    <th>Author</th>
    <th>Days Old</th>
    </tr>);
    const tableRows = props.prData.map((pr:any) => (
    <tr key={i++}>
        <td>{pr.serviceName}</td>
        <td>{pr.author}</td>
        <td>{pr.daysOld}</td>
    </tr>
    ));

    return (
        <>
    <table>
        <tbody>
        {tableHeader}
        {tableRows}
        </tbody>
    </table>
    </>
    );
}

export default PullRequestsPage;