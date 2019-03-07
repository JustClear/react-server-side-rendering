import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '@api';

export default class Home extends React.Component {
    state = {
        storyIDs: [],
    }
    componentWillMount() {
        api.getTopStory().then(storyIDs => {
            storyIDs = storyIDs.slice(0, 10)
            this.setState({
                storyIDs,
            });
            console.log('topStories', storyIDs);
        });
    }
    render() {
        const { storyIDs } = this.state
        return (
            <div>
                <h1>Home ...</h1>
                <Link to="/post">link to Post</Link>
                <h2>Stories</h2>
                <ul>
                    {storyIDs.map(id => (
                        <li key={id}>
                            <Link to={`/post/${id}`}>{id}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}