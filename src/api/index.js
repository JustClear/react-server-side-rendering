import fetch from 'node-fetch';

const prefix = `https://hacker-news.firebaseio.com/v0/`;

export const getStory = id => {
    return fetch(`${prefix}item/${id}.json`).then(res => res.json());
};

export const getTopStories = () => {
    return fetch(`${prefix}topstories.json`).then(res => res.json()).then(storyIDs => storyIDs.slice(0, 10));
};