import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
     <View style={{flex:1}}>
       {/* Button LogOut */}
       <View style={{justifyContent: 'flex-end', alignItems: 'center', flex:1}}>
       <TouchableOpacity onPress={() => {/**Handle Press */}}>
          <View style={{backgroundColor: '#DB1313', height: 33, width:170, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
              <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Logout</Text>
          </View>
        </TouchableOpacity>
       </View>
     </View>
    );
  }
}
