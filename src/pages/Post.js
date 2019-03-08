import React from 'react';
import { Link } from 'react-router-dom';
import { createAction } from 'redux-actions';
import store from '@store';
import * as api from '@api/mocks';
import { isEmpty } from '@common';

export default class Post extends React.Component {
    state = {
        story: {},
    }
    constructor(props) {
        super(props);

        if (props.staticContext && props.staticContext.data) {
            this.state = {
                story: props.staticContext.data,
            };
        } else {
            this.state = {
                story: {},
            };
        }
    }
    static async fetchData({ params }) {
        const story = await api.getStory(params.id);
        store.dispatch(createAction('FETCH_STORY')(story))
        return story;
    }
    async componentDidMount() {
        if (isEmpty(window.__STORE__.story)) {
            const { match } = this.props;
            const story = await Post.fetchData(match);
            store.dispatch(createAction('FETCH_STORY')(story))
            this.setState({
                story: store.getState().story,
            });
        } else {
            this.setState({
                story: window.__STORE__.story,
            });
        }
    }
    render() {
        const { story } = this.state;
        const { params } = this.props.match;
        
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