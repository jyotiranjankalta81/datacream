import { GAME_PLAYED } from "../constants/constant";



const initialState = {
    cardData: []
}

export default function cardItems(state = [], action) {
    switch (action.type) {
        case GAME_PLAYED:
            return [
                ...state,
                { cardData: action.data }
            ]
        default:
        return state
    }
}