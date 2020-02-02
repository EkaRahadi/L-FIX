import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity} from 'react-native';

class Component extends React.Component {

  render() {

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
}

export default (Component)
