import { createStore } from 'redux';
import reducers from '@reducers';

function getInitialState() {
    const hasWindow = typeof window === 'object';
    const initialState = {
        story: {},
        storyIDs: [],
    };
    return hasWindow ? window.__STORE__ : initialState;
}

export default createStore(reducers, getInitialState());