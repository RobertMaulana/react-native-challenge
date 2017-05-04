import { GET_COLLECTIONS } from './constants'
import axios from 'axios'

export const getCollections = collections => ({
  type: GET_COLLECTIONS,
  payload: collections
})

export const fetchCollections = () => (
  dispatch =>
  // axios.get('https://developers.zomato.com/api/v2.1/collections?city_id=1&count=50',
  // {headers: {"user-key": "ec774bd6f296b71e5ff539dadf4232d8"}})
  // .then(function (response) {
  //   dispatch(getCollections(response.data.collections))
  // })
  // .catch(function (err) {
  //   console.log(err.message);
  // })
  fetch('https://developers.zomato.com/api/v2.1/collections?city_id=1&count=50',
  {headers: {"user-key": "ec774bd6f296b71e5ff539dadf4232d8"}})
  .then(res => res.json())
  .then(data => dispatch(getCollections(data.collections)))
  .catch(function (err) {
    console.log(err.message);
  })
)
