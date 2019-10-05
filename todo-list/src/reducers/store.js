//  const initialState = {
//      todo: ''
//  }
// const reducer =  (state = initialState, action) => {
//     switch(action.type) {
//         case 'ADD_TODO':
//         let newState = [...state, action.value]
//         return newState
//         case 'REMOVE_TODO':
//         return[
//         ...state.slice(0,action.value),
//         ...state.slice(action.value + 1, state.length -1)
//         ]
//         default:
//         return state

//     }

// }
// export default reducer

// import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }

    default:
      return state;
  }
}
export default reducer
