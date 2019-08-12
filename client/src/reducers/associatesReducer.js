import { GET_ASSOCIATE, CLEAR_STUDENT, ADD_ASSOCIATE, ADD_IMG } from '../constants/index';

const initialState = []

const associatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ASSOCIATE:
            let index = state.findIndex(el => el._id === action.payload._id);
            if (index === -1)
                return [...state, action.payload];
            return state;

        case CLEAR_STUDENT:
            return action.payload;

        case ADD_ASSOCIATE:
            return {
                ...state,
                user: { ...state.user, funding: action.payload.funding }
            };

        case ADD_IMG:
            return {
                ...state,
                user: { ...state.user, img: action.payload.img }
            };

        default:
            return state;
    }
}

export default associatesReducer;