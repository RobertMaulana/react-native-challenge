import React, {Component} from 'react'
import {
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Left, Icon, Spinner } from 'native-base';
import { connect } from 'react-redux'

import { fetchCollections } from '../actions'

class Home extends Component {
  static navigationOptions = {
    title: 'Zomato Collections',
  };
  constructor(props){
    super(props)
    this.state = {
      collections: []
    }
  }

  componentDidMount(){
    // let self = this
    // axios.get('https://developers.zomato.com/api/v2.1/collections?city_id=1&count=50', {headers: {"user-key": "ec774bd6f296b71e5ff539dadf4232d8"}})
    // .then(function (response) {
    //   self.setState({restaurants: response.data.collections})
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    this.props.fetchCollections()
  }

  render(){
    const { navigate } = this.props.navigation;
    const { headerStyle, textStyle, titleStyle, titleStyleAlignment } = styles
    const { collections } = this.props

    return (
      <Container>
      { collections.length === 0 && <Container>
        <Content>
          <Spinner color='orange' />
        </Content>
      </Container>}
      <Container style={{padding: 5}}>
       <Content>
         <ScrollView>
           <List>
         {collections.map((collection) => {
           return (
            <TouchableOpacity
              key={collection.collection.collection_id}
              onPress={() => navigate('Detail', collection)}
              style={{flexDirection: 'row', marginBottom: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#d0d4db'}}
            >
              <Thumbnail square size={80} source={{uri: collection.collection.image_url}} />
                <Body style={{paddingLeft: 7, alignItems: 'flex-start'}}>
                  <Text>{collection.collection.title}</Text>
                  <Text note style={{fontSize: 12}}>{collection.collection.description}</Text>
              </Body>
            </TouchableOpacity>
         )
         })}
      </List>
         </ScrollView>

       </Content>
     </Container>
     </Container>
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

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
})

const mapStateToProps = state => ({
  collections: state.collections
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
