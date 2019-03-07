// mock data

export const getStory = id => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            id,
            by: '大板栗',
            title: 'This is title',
            score: '99',
            url: 'https://www.google.com',
            type: 'story',
        }), 1000);
    });
};

export const getTopStory = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            19322448,
            19323032,
            19321775,
            19325361,
            19325331,
            19323844,
            19324766,
            19325302,
            19322669,
            19323123,
        ]), 1000);
    });
};