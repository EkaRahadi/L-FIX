import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {

  render() {
    

    return (
      <View style={{backgroundColor: '#ffffff',flex:1}}>
        {/* Header */}
          <View style={{backgroundColor: '#175873', height : 56, width: 411, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Guarantee</Text>
          </View>

        {/* Content */}
          <View style={{flex:1}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('DetailGuarantee')}}>
              <View style={styles.containerInsideTab}>
                  <View style={{marginLeft: 10,marginTop:5}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold',color:'#000000',fontFamily:'roboto'}}>Refrigerator</Text>
                    <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>29-Maret-2019</Text>
                  </View>
                  <Image
                    style={{position: 'absolute', left: 350, top: 20}}
                    source={require('../../../assets/images/next.png')}
                  />
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}


