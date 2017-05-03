import { GET_COLLECTIONS } from '../actions/constants'

const collectionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COLLECTIONS: return action.payload
    default: return state
  }
}

export default collectionReducer
