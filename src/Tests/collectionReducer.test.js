import { GET_COLLECTIONS } from '../actions/constants'

import collectionReducer from '../reducers/collectionReducer'

describe('Collection Reducer with no action',() => {
  it('should display empty array as an initial state', () => {
    const action = {type: 'unknown'}
    const newState = collectionReducer(undefined, action)
    expect(newState).toEqual([])
  })
})

describe('Collection Reducer with action', () => {
  it('should return the collections', () => {
    const action = {
      type: GET_COLLECTIONS,
      payload: 'collections'
    }
    const newState = collectionReducer([], action)
    expect(newState).toEqual('collections')
  })
})
