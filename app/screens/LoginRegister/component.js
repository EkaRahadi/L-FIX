import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from 'react-redux';
import {userAccount} from '../../actions';
import SplashScreen from '../SplashScreen'
import AsyncStorage from '@react-native-community/async-storage';
import network from '../../network/index';


const slides=[
  {
    key:'satu',
    title:'Title 1',
    text: 'L-Fix partners are professional partners who have \n been recognized in their fields. ',
    image: require('../../../assets/images/carousel.jpeg'),
    backgroundColor: '#FFFFFF'
  },
  {
    key:'dua',
    title:'Title 2',
    text: 'Ready to come for maintain and repair your \n electronics stuff',
    image: require('../../../assets/images/samsung.jpg'),
    // backgroundColor: '#FFFFFF'
  }
];

const checkUser = new Promise(async (resolve, reject) => {
  try {
    const user_data = await AsyncStorage.getItem('user_account');

    if(user_data !== null) {
       resolve({
         status: true,
         data: JSON.parse(user_data)
       })
    }
    else {
       reject({
         status: false,
         data: null
       })
    }
  } catch (error) {
    console.log(error)
  }
 })

class Component extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isSplashScreen: true,
        showRealApp: false
      }
    }

  async componentDidMount() {
    // setTimeout( () => {
    //   this.setState({
    //     isSplashScreen : false
    //   })
    // },2000)
    if(this.state.isSplashScreen === true) {
        await checkUser
                    .then(async response => {
                      console.log(response);
                      // Dispatch response into user_account
                     await this.props.dispatchUserAccount(response);
                    })
                    .catch(response => {
                      console.log(response);
                    })
    setTimeout( () => {
      this.setState({
        isSplashScreen : false
      })
    },1500)
    }
  }

  renderLoginRegister = () => {
        return(
          <View style={{position: 'relative', flex:1}}>
            {/* Image Header */}
            <View>
                <Image
                style={{width:'100%', height:100}}
                source={require('../../../assets/images/lfix.png')}
                />
            </View>
            {/* Image Background */}
            <View>
                <Image
                style={{width: '100%'}}
                source={require('../../../assets/images/bg-login-register.png')}
                />
            </View>
      
            {/* Text */}
            <View style={{position: 'absolute', marginLeft:15, bottom: 0, marginBottom:130}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize:20,fontFamily: 'roboto', color: '#000000'}}>Welcome to L-Fix !</Text>
              </View>
              <View style={{width: 300, marginTop: 10}}>
                <Text style={{fontWeight: '500', fontSize:15,fontFamily: 'roboto', color: '#000000'}}>Are you ready to enjoy new life without limits ? Let’s go !</Text>
              </View>
            </View>
      
            {/* Buttons */}
            <View style={{position: 'absolute', bottom: 0, flexDirection: 'row', alignSelf: 'center', marginBottom: 40}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoarding')}>
                <View style={{backgroundColor: '#175873', height: 33, width:130, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginRight: 60}}>
                    <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Login</Text>
                </View>
            </TouchableOpacity>
      
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
                <View style={{backgroundColor: '#175873', height: 33, width:130, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginLeft: 60}}>
                    <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Register</Text>
                </View>
            </TouchableOpacity>
            </View>
          </View>
        );
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
    console.log(this.props.userAccount);
    if(this.state.isSplashScreen === true) {
      return <SplashScreen/>
    }
  //   else if(!this.state.isSplashScreen && this.state.showRealApp==false) {
  //     return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
  //  }
    return(
    <View style={{flex:1}}>
      {this.props.userAccount.userLogin === false && this.renderLoginRegister()}
      {this.props.userAccount.userLogin === true && this.props.navigation.navigate('Home')}
    </View>
    )}
}

const mapStateToProps = state => {
  return {
    userAccount : state.userAccount,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchUserAccount: (account) => dispatch(userAccount(account, true)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
