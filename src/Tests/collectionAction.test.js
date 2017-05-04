import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
// import moxios from 'moxios'

import { GET_COLLECTIONS } from '../actions/constants'
import { fetchCollections, getCollections } from '../actions/collectionActions'

const mockStore = configureMockStore([thunk])

describe('Collection action', () => {

  it('should run get action', () => {
    expect(getCollections(1000)).toEqual(
      {
        type: GET_COLLECTIONS,
        payload: 1000
      }
    )
    expect(getCollections(1000)).toMatchSnapshot()
  })

  it('should run fetch action', () => {
    const store = mockStore()
    fetchMock.get('https://developers.zomato.com/api/v2.1/collections?city_id=1&count=50', { collections: ["test"] })
    return store.dispatch(fetchCollections())
    .then(()=> {
      expect(store.getActions()).toEqual([
        {
          payload: ["test"],
          type: GET_COLLECTIONS
        }
      ])

    })
  })
})
