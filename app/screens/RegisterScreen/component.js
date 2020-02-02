import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import Back from '../../../assets/svgs/Back';
import Button from '../../components/elements/Button';
import styles from './styles';

class Component extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: '+62',
      fullName: '',
      email: ''
    }
  }

  _onBackPress = () => {
    //Handle OnPress Back
    this.props.navigation.navigate('LoginRegister');
  }

  _onPress = () => {
    //Handle here
  }

  render() {

    return(
      <View style={{backgroundColor: '#E5E5E5', flex:1}}>
        <StatusBar
        transculent={false}
        backgroundColor='#175873'
        barStyle='light-content'
        />
        <Back style={{alignSelf:'flex-start', marginTop: 20, marginLeft : 10}} onPress={this._onBackPress}/>
          <View style={styles.circle}/>
            <Image style={styles.notes} source={require('../../../assets/images/notes.png')}/>
            <Text style={{paddingTop:110, paddingLeft:30, fontFamily:'roboto', fontSize:24, fontWeight:'bold', color:'#000000'}}>Please fill in a few details below.</Text>
            
            {/* Full Name Email */}
            <View style={{marginHorizontal:30}}>
              {/* Full Name */}
                <View>
                  <Text style={{fontWeight: '500', fontSize:15, fontFamily: 'roboto'}}>Full Name</Text>
                  <TextInput 
                    autoFocus
                    style={{borderBottomWidth:1, height: 40}}
                    onChangeText={value => this.setState({
                      ...this.state,
                      fullName: value
                    })}
                    value={this.state.fullName}
                  />
                </View>
              {/* Email */}
                <View style={{marginTop:15}}>
                  <Text style={{fontWeight: '500', fontSize:15, fontFamily: 'roboto'}}>Email</Text>
                  <TextInput 
                    autoFocus
                    style={{borderBottomWidth:1, height: 40}}
                    onChangeText={value => this.setState({
                      ...this.state,
                      email: value
                    })}
                    value={this.state.email}
                  />
                </View>
            </View>
            <View style={{marginTop:30, marginLeft:30, marginRight:30}}>
            <Text>Enter phone number:</Text>
            <TextInput
              autoFocus
              style={{ height: 40, marginTop: 15, marginBottom: 15, borderBottomWidth:1}}
              onChangeText={value => this.setState({ phoneNumber: value })}
              placeholder={'Phone number ... start with +62 '}
              value={this.state.phoneNumber}
            />
            {/* {this.renderMessage()} */}
          </View>
          <View style={styles.button}>
              <Button title="Register" disabled={this.state.disabled} onPress={this._onPress}
              type="raised-ripple" />
          </View>
      </View>
    );
  }
}

export default (Component)
