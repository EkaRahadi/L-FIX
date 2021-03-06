import React from 'react';
import { View, StatusBar, Image, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../components/elements/Button';
import { connect } from 'react-redux';
import {userAccount} from '../../actions';
import Back from '../../../assets/svgs/Back';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import network from '../../network';

class Component extends React.Component {
    state = {
      email : '',
      password : '',
      isCodeSent: false,
      phoneNumber: '+62',
      message: '',
      disabled: false,
      isValid: null,
    }

  storeDataUser = async (user_account) => {
    try {
      await AsyncStorage.setItem('user_account', JSON.stringify(user_account))
    } catch (error) {
      console.log(error)
    }
  }

  userLogin = async () => {
    const { phoneNumber } = this.state;
    this.setState({
      ...this.state,
      disabled: true
    })
  
     const user = new Promise((resolve, reject) => {
      fetch(network.ADDRESS+'/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          phone : phoneNumber
        })
      }).then(response => response.json())
        .then(responseJson => {
          if(responseJson.success === true) {
            resolve({
              userRegistered: true,
              data : responseJson.data
            })
          }
          else {
            reject({
              userRegistered: false,
              data: null
            })
          }
        })
        .catch(reponse => reject(reponse))
    })

    user
        .then(response => {
          console.log(response)
          //When Phone number exist in DB
          this.setState({ message: 'Sending code ...' });

          // Send OTP
          firebase.auth()
            .verifyPhoneNumber(response.data.phone,30, true)
            .on('state_changed', async (phoneAuthSnapshot) => {
              // How you handle these state events is entirely up to your ui flow and whether
              // you need to support both ios and android. In short: not all of them need to
              // be handled - it's entirely up to you, your ui and supported platforms.

              // E.g you could handle android specific events only here, and let the rest fall back
              // to the optionalErrorCb or optionalCompleteCb functions
              switch (phoneAuthSnapshot.state) {
                // ------------------------
                //  IOS AND ANDROID EVENTS
                // ------------------------
                case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
                  this.setState({
                    ...this.state,
                    isCodeSent: true
                  })
                  console.log('code sent');
                  console.log(phoneAuthSnapshot);
                  // on ios this is the final phone auth state event you'd receive
                  // so you'd then ask for user input of the code and build a credential from it
                  // as demonstrated in the `signInWithPhoneNumber` example above
                  break;
                case firebase.auth.PhoneAuthState.ERROR: // or 'error'
                  console.log('verification error');
                  console.log(phoneAuthSnapshot.error);
                  break;

                // ---------------------
                // ANDROID ONLY EVENTS
                // ---------------------
                case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
                  console.log('auto verify on android timed out');
                  // proceed with your manual code input flow, same as you would do in
                  // CODE_SENT if you were on IOS
                  break;
                case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
                  // auto verified means the code has also been automatically confirmed as correct/received
                  // phoneAuthSnapshot.code will contain the auto verified sms code - no need to ask the user for input.
                  console.log('auto verified on android');
                  console.log(phoneAuthSnapshot);
                  await this.storeDataUser(response.data);
                  await this.props.dispatchUserAccount(response.data);
                  this.props.navigation.navigate('Home');
                  // Example usage if handling here and not in optionalCompleteCb:
                  // const { verificationId, code } = phoneAuthSnapshot;
                  // const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);

                  // Do something with your new credential, e.g.:
                  // firebase.auth().signInWithCredential(credential);
                  // firebase.auth().currentUser.linkWithCredential(credential);
                  // etc ...
                  break;
              }
            }, (error) => {
              // optionalErrorCb would be same logic as the ERROR case above,  if you've already handed
              // the ERROR case in the above observer then there's no need to handle it here
              console.log(error);
              // verificationId is attached to error if required
              console.log(error.verificationId);
            }, (phoneAuthSnapshot) => {
              // optionalCompleteCb would be same logic as the AUTO_VERIFIED/CODE_SENT switch cases above
              // depending on the platform. If you've already handled those cases in the observer then
              // there's absolutely no need to handle it here.

              // Platform specific logic:
              // - if this is on IOS then phoneAuthSnapshot.code will always be null
              // - if ANDROID auto verified the sms code then phoneAuthSnapshot.code will contain the verified sms code
              //   and there'd be no need to ask for user input of the code - proceed to credential creating logic
              // - if ANDROID auto verify timed out then phoneAuthSnapshot.code would be null, just like ios, you'd
              //   continue with user input logic.
              console.log(phoneAuthSnapshot);
            });
          // optionally also supports .then & .catch instead of optionalErrorCb &
          // optionalCompleteCb (with the same resulting args)

        })
        .catch(response => {
          //When phone number doesnt exist in DB
          console.log(response)
          this.setState({ message: 'Please Register First ...' });

          this.setState({
            ...this.state,
            disabled: false
          })
        })

  }

  _renderVerficationUI = () => {
    return (
      <View style={{backgroundColor: '#ffffff', flex:1}}>
            <StatusBar
             transculent={false}
             backgroundColor='#175873'
             barStyle='light-content'
             />
              <View style={styles.circle}/>
              <Image style={styles.lock} source={require('../../../assets/images/woman.png')}/>
              <Text style={{paddingTop:180, paddingLeft:30, fontFamily:'roboto', fontSize:24, fontWeight:'bold', color:'#000000'}}>Verification has sent !</Text>
              <Text style={{paddingTop:10, paddingLeft:30, fontFamily:'roboto', fontSize:18, color:'#000000'}}>Enter the code we sent via SMS to your 
              registered phone number +6287889057672</Text>
              <View style={{justifyContent:'center', alignItems:'center', marginBottom:60, marginTop: 5}}>
                <OTPInputView
                  style={{width:'80%', height: 200}}
                  autoFocusOnLoad
                  pinCount={6}
                  codeInputFieldStyle={{width: 30,
                    height: 45,
                    borderWidth: 0,
                    borderBottomWidth: 1,}}
                  codeInputHighlightStyle={{ borderColor: "#000",}}
                //   onCodeFilled = {(code => {
                //     console.log(`Code is ${code}, you are good to go!`)
                // })}
                />
              </View>
              <View style={styles.button}>
                <Button title="confirm" disabled={true} onPress={ () => this.props.navigation.navigate('Home')}
                type="raised-ripple" />
              </View>
            </View>
    );
  }

  renderMessage = () => {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#DB1313', color: '#fff' }}>{message}</Text>
    );
  }
    
  render() {
    console.log(this.state.isSplashScreen);
    // if (this.state.isCodeSent === true) {
    //   this._renderVerficationUI();
    // }
    return (
      
        <View style={{backgroundColor: '#ffffff', flex:1}}>
            <StatusBar
             transculent={false}
             backgroundColor='#175873'
             barStyle='light-content'
             />
            <Back style={{alignSelf:'flex-start', marginTop: 20, marginLeft : 10}} onPress={this._onBackPress}/>
              <View style={styles.circle}/>
              <Image style={styles.lock} source={require('../../../assets/images/lock.png')}/>
              <Text style={{paddingTop:110, paddingLeft:30, fontFamily:'roboto', fontSize:24, fontWeight:'bold', color:'#000000'}}>Enter your registered phone
              number to login.</Text>
              <View style={{marginTop:30, marginLeft:30, marginRight:30}}>
              <Text>Enter phone number:</Text>
              <TextInput
                autoFocus
                style={{ height: 40, marginTop: 15, marginBottom: 15, borderBottomWidth:1}}
                onChangeText={value => this.setState({ phoneNumber: value })}
                placeholder={'Phone number ... '}
                value={this.state.phoneNumber}
              />
              {this.renderMessage()}
              </View>
              <View style={styles.button}>
                <Button title="login" disabled={this.state.disabled} onPress={this.userLogin}
                type="raised-ripple" />
              </View>
            </View>
        
      
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userAccount : state.userAccount
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchUserAccount: (account) => dispatch(userAccount(account, true)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
