

// action types
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE= 'REMOVE_FEATURE';

export const AddFeature = (newfeature) => {
    return{ type: ADD_FEATURE, payload: newfeature}};

export const RemoveFeature = (unwanted) => {
    return{ type: REMOVE_FEATURE, payload: unwanted}
}
