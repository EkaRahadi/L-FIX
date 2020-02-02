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
          <Text style={styles.title}>Done</Text>
        </View>

        {/* Content */}
        <View style={{flex:1}}>
          <View>
            {/* Service */}
            <TouchableOpacity onPress={() => {}}>
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
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Rating')}}>
                <View style={{borderBottomWidth: 1, height: 85, borderBottomColor: '#C4C4C4', position: 'relative', flexDirection: 'row'}}>
                      <View>
                        <Text style={{fontSize:20, color:'#000000', marginLeft: 50, marginTop:15, fontWeight: 'bold'}}>Technician</Text>
                        <Text style={{ marginLeft: 55}}>Elba Ayu Kurnia</Text>
                        <Text style={{marginLeft: 55, color: '#175873'}}>Rate your technician</Text>
                      </View>
                      <Image
                        style={{position: 'absolute', top: 15, left: 10}}
                        source={require('../../../assets/images/mechanic-small.png')}
                      />
                      <Image
                          style={{position: 'absolute', top: 30, left: 380}}
                          source={require('../../../assets/images/next.png')}
                        />
                  </View>
              </TouchableOpacity>

                {/* Guarantee */}
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('GuaranteeScreen')}}>
                  <View style={{borderBottomWidth: 1, height: 60, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                        <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:15, fontWeight: 'bold'}}>Guarantee</Text>
                        <Image
                          style={{position: 'absolute', top: 10, left: 5}}
                          source={require('../../../assets/images/guarantee_small.png')}
                        />
                        <Image
                          style={{position: 'absolute', top: 15, left: 380}}
                          source={require('../../../assets/images/next.png')}
                        />
                  </View>
                </TouchableOpacity>

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
        </View>
      </View>
    );
  }
}

export default (Component)
