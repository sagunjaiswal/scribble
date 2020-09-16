import { v4 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
const initialState = {
  items: [
    {
      id: uuid(),
      note: "Eggs",
    },
    {
      id: uuid(),
      note: "Egg",
    },
    {
      id: uuid(),
      note: "Egs",
    },
    {
      id: uuid(),
      note: "Eg",
    },
  ],
};
export default function(state = initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}