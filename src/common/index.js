export function isEmpty(object) {
    if (typeof object === 'object') return Object.keys(object).length === 0;
    if (typeof object === 'array') return object.length === 0;
}