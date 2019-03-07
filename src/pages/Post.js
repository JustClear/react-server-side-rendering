import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '@api';

export default class Post extends React.Component {
    state = {
        story: {},
        route: {},
    }
    componentWillMount() {
        const { match } = this.props;
        this.setState({
            route: match,
        });
        api.getStory(match.params.id).then(story => {
            this.setState({
                story,
            });
            console.log('story', story);
        });
    }
    render() {
        const { story, route } = this.state;
        const { params } = route;
        
        return (
            <div>
                <h1>Post {params.id} ...</h1>
                <Link to="/">link to Home</Link>
                <h2>Title: {story.title}</h2>
                <p>By: {story.by}</p>
                <p>Score: {story.score}</p>
                <p>Type: {story.type}</p>
                <p>URL: {story.url}</p>
            </div>
        );
    }
}