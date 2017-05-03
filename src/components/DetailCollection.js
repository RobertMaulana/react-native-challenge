import React, {Component} from 'react'
import {
  Image
} from 'react-native'
import moment from 'moment'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

class DetailCollection extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    title: 'Detail',
  }
  render(){
    const { params } = this.props.navigation.state;
    const restaurant = params.collection;

    return (
      <Container>
        <Content>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail style={{width: 50, height:50}} source={{uri: 'https://media.glassdoor.com/sql/515676/zomato-squarelogo-1466750863527.png'}}/>
                  <Body>
                      <Text>{restaurant.title}</Text>
                      <Text note>{ moment().format("DD MMM YYYY") }</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image style={{ width: 340, height: 200}} source={{uri: restaurant.image_url}}/>
                  <Text>
                      {restaurant.description}
                  </Text>
                  <Button transparent textStyle={{color: '#87838B'}}>
                      <Icon name="logo-facebook" />
                      <Left><Text style={{ marginLeft: 2 ,fontSize: 12}}>Share it</Text></Left>
                  </Button>
                </Body>
              </CardItem>
           </Card>
        </Content>
      </Container>
    )
  }
}

export default DetailCollection
