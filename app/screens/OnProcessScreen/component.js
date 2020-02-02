import React from 'react';
import { View, Image, StatusBar, Text, TouchableOpacity } from 'react-native';
import Back from '../../../assets/svgs/Back';
import styles from './styles';
// import Checkbox from 'react-native-custom-checkbox';
import Button from '../../components/elements/Button';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  _onPress = () => {
    this.props.navigation.navigate('ServiceScreen');
  };
  render() {
    return (
      <View style={{backgroundColor: '#ffffff', flex:1}}>
        <StatusBar
             transculent={false}
             backgroundColor='#175873'
             barStyle='light-content'
             />
        {/* Header */}
        <View style={{backgroundColor: '#175873', height : 56, width: 411, flexDirection: 'row'}}>
          <Back style={{alignSelf:'flex-start', marginTop: 10, marginLeft : 10}} onPress={this._onPress}/>
          <Text style={styles.title}>On Process</Text>
        </View>

        {/* Content */}
        <View style={{flex:1}}>
          <View>
            {/* Service */}
            <TouchableOpacity>
              <View style={{borderBottomWidth: 1, height: 60, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                      <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: 'bold'}}>Service</Text>
                      <Text style={{marginLeft: 50, color: '#175873'}}>Check your electronics damage</Text>
                      <Image
                        style={{position: 'absolute', top: 10, left: 10}}
                        source={require('../../../assets/images/palu.png')}
                      />
                      <Image
                        style={{position: 'absolute', top: 15, left: 380}}
                        source={require('../../../assets/images/next.png')}
                      />
                </View>
            </TouchableOpacity>
              {/* Technician */}
                <View style={{borderBottomWidth: 1, height: 75, borderBottomColor: '#C4C4C4', position: 'relative', flexDirection: 'row'}}>
                    <View>
                      <Text style={{fontSize:20, color:'#000000', marginLeft: 50, marginTop:15, fontWeight: 'bold'}}>Technician</Text>
                      <Text style={{ marginLeft: 55}}>Elba Ayu Kurnia</Text>
                    </View>
                    {/* Status */}
                    <View style={{marginLeft: 170, marginTop: 20}}>
                      <Text style={{color: '#175873', fontFamily: 'roboto'}}>On The Way</Text>
                    </View>
                    <Image
                      style={{position: 'absolute', top: 15, left: 10}}
                      source={require('../../../assets/images/mechanic-small.png')}
                    />
                </View>

                {/* Location */}
                <View style={{position: 'relative'}}>
                  {/* Your Loaction */}
                  <View style={{marginBottom: 27}}>
                    <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: '500'}}>Your Location</Text>
                    <Text style={{marginLeft: 50}}>Jl. Siliwangi No. 48</Text>
                  </View>

                  {/* Technician Location */}
                  <View style={{marginTop: 27}}>
                    <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: '500'}}>Technician Location</Text>
                    <Text style={{marginLeft: 50}}>Jl. Asia Afrika No. 32</Text>
                  </View>
                  <Image
                    style={{position: 'absolute', top: 10, left: 10}}
                    source={require('../../../assets/images/small_location.png')}
                  />
                  <Image
                    style={{position: 'absolute', top: 45, left: 25}}
                    source={require('../../../assets/images/line-small.png')}
                  />
                  <Image
                    style={{position: 'absolute', top: 70, left: 25}}
                    source={require('../../../assets/images/line-small.png')}
                  />
                  <Image
                    style={{position: 'absolute', top: 95, left: 25}}
                    source={require('../../../assets/images/line-small.png')}
                  />
                  <Image
                    style={{position: 'absolute', top: 115, left: 13}}
                    source={require('../../../assets/images/small_location_red.png')}
                  />
                </View>
          </View>

          {/* Button */}
          <View style={{ flex:1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10}}>
              {/* Button Cancel */}
              <TouchableOpacity onPress={() => {/**Handle Press */}}>
                <View style={{borderColor: '#DB1313', borderWidth: 2.5, width: 120, height: 33, justifyContent: 'center', alignItems: 'center', borderRadius:25, marginBottom:20}}>
                  <Text style={{color:'#DB1313', fontFamily: 'roboto', fontWeight: '500', fontSize: 15}}>Cancel</Text>
                </View>
              </TouchableOpacity>
              {/* Button Confirm */}
              <TouchableOpacity onPress={() => {/**Handle Press */}}>
                <View style={{backgroundColor: '#175873', height: 33, width:170, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                  <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Accept</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default (Component)
