import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Provider } from 'react-redux';
import Router from './app/routers';
import store from './app/store/configureStore';
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from '../L-FIX/app/screens/SplashScreen';

const slides=[
  {
    key:'satu',
    title:'Title 1',
    text: 'L-Fix partners are professional partners who have \n been recognized in their fields. ',
    image: require('./assets/images/carousel.jpeg'),
    backgroundColor: '#FFFFFF'
  },
  {
    key:'dua',
    title:'Title 2',
    text: 'Ready to come for maintain and repair your \n electronics stuff',
    image: require('./assets/images/samsung.jpg'),
    // backgroundColor: '#FFFFFF'
  }
];

export default class App extends Component {

  state={
      isSplashScreen : true,
      showRealApp:false,
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        isSplashScreen : false
      })
    },2000)
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  _renderItem = (item) => {
    return (
      <View style={{backgroundColor:'#000', flex:1}}>
        <Text style={styles.judul}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }


  render() {
    if(this.state.isSplashScreen) {
      return <SplashScreen/>
    }
  //   else if(!this.state.isSplashScreen && this.state.showRealApp==false) {
  //     return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
  //  }
    return (
      <Provider store={store()}>
        <Router />
      </Provider>
    );
  }
}
