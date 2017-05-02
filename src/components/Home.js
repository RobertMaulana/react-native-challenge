import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import axios from 'axios'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      restaurants: []
    }
  }

  componentDidMount(){
    let self = this
    axios.get('https://developers.zomato.com/api/v2.1/collections?city_id=1&count=15', {headers: {"user-key": "ec774bd6f296b71e5ff539dadf4232d8"}})
    .then(function (response) {
      self.setState({restaurants: response.data.collections})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render(){

    const { headerStyle, textStyle, titleStyle, titleStyleAlignment } = styles

    return (
      <View>
        <View style={headerStyle}>
          <Text style={textStyle}>Zomato Collections</Text>
        </View>
        <ScrollView>
        {this.state.restaurants.map((restaurant) => {
          return (
            <View key={restaurant.collection.collection_id} style={titleStyleAlignment}>
              <View style={titleStyleAlignment}>
                <Text>{restaurant.collection.title}</Text>
              </View>
              <Image style={{width: '90%', height: 200, borderColor: '#e2e2e2', borderWidth: 1}} source={{uri: restaurant.collection.image_url}} />
            </View>
        )
        })}
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  headerStyle : {
    paddingTop: '10%',
    alignItems: 'center',
    backgroundColor: "#7b1fa2",
    height: 70,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    color: "#FFF",
    fontSize: 20
  },
  titleStyleAlignment: {
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1
  }
}

export default Home
