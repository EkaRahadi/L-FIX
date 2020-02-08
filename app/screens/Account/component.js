import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {userLogout} from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _logout = async () => {
    console.log(this.props.userAccount);
    // Clear Reducer
      await this.props.dispatchLogout();
    // Clear AsyncStorage
      await AsyncStorage.removeItem('user_account');
    // Navigate to LoginRegister
    this.props.navigation.navigate('LoginRegister');
    console.log(this.props.userAccount);
  }

  render() {
    return (
     <View style={{flex:1}}>
       {/* Button LogOut */}
       <View style={{justifyContent: 'flex-end', alignItems: 'center', flex:1}}>
       <TouchableOpacity onPress={this._logout}>
          <View style={{backgroundColor: '#DB1313', height: 33, width:170, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
              <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Logout</Text>
          </View>
        </TouchableOpacity>
       </View>
     </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userAccount : state.userAccount
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogout: () => dispatch(userLogout()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
