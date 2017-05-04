import React from 'react'
import { shallow } from 'enzyme'
import {
  TouchableOpacity
} from 'react-native'
import { List, Thumbnail, Text, Body } from 'native-base'

import {Home} from '../components/Home'
import { fetchCollections } from '../actions/collectionActions'
import { GET_COLLECTIONS } from '../actions/constants'

describe('<Home />', () => {
  it('should render correctly', () => {
    const home = shallow(
      <Home navigation={{navigate: []}} collections={[]} />
    )
    expect(home).toMatchSnapshot()
  })

  // it("should get function getCollections", () => {
  //   const home = shallow(
  //     <Home navigation={{navigate: []}} collections={[]}/>
  //   )
  //   expect(fetchCollections()).toEqual(
  //       (dispatch) => dispatch(fetchCollections())
  //   )
  //   expect(fetchCollections()).toMatchSnapshot()
  // })

})
const collections = [{}]

const Detail = (props) => {
  return (
    <List>
      {collections.map((collection) => {
        return (
         <TouchableOpacity
           key={props.key}
           onPress={props.onPress}
           style={props.style}
         >
           <Thumbnail square size={80} source={{uri: ''}} />
             <Body style={{paddingLeft: 7, alignItems: 'flex-start'}}>
               <Text>{''}</Text>
               <Text note style={{fontSize: 12}}>{''}</Text>
           </Body>
         </TouchableOpacity>
      )
      })}
   </List>
  )
}

it('pressed', () => {
  const button = shallow(
    <Detail
      key={'key'}
      onPress={() => {}}
      style={{flexDirection: 'row', marginBottom: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#d0d4db'}}
    />
  )
  expect(button).toMatchSnapshot()
})
