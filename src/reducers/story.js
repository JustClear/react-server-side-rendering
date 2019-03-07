// 

export default function story(state = {}, { type, payload }) {
    const mapping = {
        'FETCH_STORY': payload,
    };
    const effective = Object.keys(mapping).includes(type);
    return effective ? mapping[type] : state;
}