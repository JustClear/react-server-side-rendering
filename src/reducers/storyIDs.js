// 

export default function storyIDs(state = [], { type, payload }) {
    const mapping = {
        'FETCH_STORY_IDS': payload,
    };

    const effective = Object.keys(mapping).includes(type);
    return effective ? mapping[type] : state;
}