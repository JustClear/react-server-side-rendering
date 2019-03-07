
const prefix = `https://hacker-news.firebaseio.com/v0/`;

export const getStory = id => {
    return fetch(`${prefix}item/${id}.json`).then(res => res.json())
};

export const getTopStory = () => {
    return fetch(`${prefix}topstories.json`).then(res => res.json())
};