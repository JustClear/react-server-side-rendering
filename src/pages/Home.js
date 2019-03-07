import React from 'react';
import { Link } from 'react-router-dom';
import { createAction } from 'redux-actions';
import store from '@store';
import * as api from '@api/mocks';

export default class Home extends React.Component {
    state = {
        storyIDs: [],
    }
    constructor(props) {
        super(props);

        if (props.staticContext && props.staticContext.data) {
            this.state = {
                storyIDs: props.staticContext.data,
            };
        } else {
            this.state = {
                storyIDs: [],
            };
        }
    }
    static fetchData() {
        return api.getTopStories();
    }
    componentDidMount() {
        if (window.__STORE__) {
            this.setState({
                storyIDs: window.__STORE__,
            });
            delete window.__STORE__;
        } else {
            Home.fetchData().then(storyIDs => store.dispatch(createAction('FETCH_STORY_IDS')(storyIDs)));
        }
    }
    render() {
        const { storyIDs } = this.state;
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