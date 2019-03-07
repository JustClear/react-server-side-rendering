import { createStore } from 'redux';
import reducers from '@reducers';

const initialState = {
    story: {},
    storyIDs: [],
};

export default createStore(reducers, initialState);