import { combineReducers } from 'redux';
import story from '@reducers/story';
import storyIDs from '@reducers/storyIDs';

export default combineReducers({
    story,
    storyIDs,
});