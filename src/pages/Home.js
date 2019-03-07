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
    static async fetchData() {
        const data = await api.getTopStories();
        store.dispatch(createAction('FETCH_STORY_IDS')(data));
        return data;
    }
    async componentDidMount() {
        if (window.__STORE__) {
            this.setState({
                storyIDs: window.__STORE__.storyIDs,
            });
        } else {
            const storyIDs = await Home.fetchData();
            store.dispatch(createAction('FETCH_STORY_IDS')(storyIDs))
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