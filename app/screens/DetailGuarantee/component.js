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
    this.props.navigation.navigate('GuaranteeScreen');
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
          <Text style={styles.title}>Guarantee</Text>
        </View>

        {/* Content */}
        <View style={{flex:1}}>
          <View>
            {/* Service */}
                <View style={{borderBottomWidth: 1, height: 50, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                      <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:10, fontWeight: 'bold'}}>Refrigerator</Text>
                      <Image
                        style={{position: 'absolute', top: 10, left: 10}}
                        source={require('../../../assets/images/palu.png')}
                      />
                </View>

            {/* Service End Date */}
                <View style={{borderBottomWidth: 1, height: 60, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                    <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: 'bold'}}>Service End Date</Text>
                    <Text style={{marginLeft: 45}}>07-April-2019</Text>
                    <Image
                        style={{position: 'absolute', top: 10, left: 10}}
                        source={require('../../../assets/images/date-small.png')}
                      />
                </View>

            {/* Guarantee End Date */}
                <View style={{borderBottomWidth: 1, height: 60, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                        <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: 'bold'}}>Guarantee End Date</Text>
                        <Text style={{marginLeft: 45}}>07-April-2019</Text>
                        <Image
                            style={{position: 'absolute', top: 10, left: 10}}
                            source={require('../../../assets/images/date-small.png')}
                          />
                    </View>

              {/* Technician */}
                <View style={{borderBottomWidth: 1, height: 65, borderBottomColor: '#C4C4C4', position: 'relative', flexDirection: 'row'}}>
                      <View>
                        <Text style={{fontSize:20, color:'#000000', marginLeft: 50, marginTop:10, fontWeight: 'bold'}}>Technician</Text>
                        <Text style={{ marginLeft: 55}}>Elba Ayu Kurnia</Text>
                      </View>
                      <Image
                        style={{position: 'absolute', top: 10, left: 10}}
                        source={require('../../../assets/images/mechanic-small.png')}
                      />
                  </View>

                {/* Location */}
                <View style={{position: 'relative',borderBottomWidth: 1,borderBottomColor: '#C4C4C4'}}>
                  {/* Your Loaction */}
                  <View style={{marginBottom: 27}}>
                    <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: '500'}}>Your Location</Text>
                    <Text style={{marginLeft: 50}}>Jl. Siliwangi No. 48</Text>
                  </View>

                  {/* Technician Location */}
                  <View style={{marginTop: 27}}>
                    <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: '500'}}>Technician Location</Text>
                    <Text style={{marginLeft: 50, marginBottom: 5}}>Jl. Asia Afrika No. 32</Text>
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
          {/* Terms & Condition */}
          <TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop:5, height: 40}}>
              <Text style={{color: '#000000',fontWeight: '500', fontSize:20, fontFamily:'roboto'}}>Terms & Condition</Text>
              <Image
                  style={{position: 'absolute', top: 5, left: 380}}
                  source={require('../../../assets/images/next.png')}
              />
          </View>
          </TouchableOpacity>

          {/* Button */}
          <View style={{flex: 1,alignItems: 'center', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => {/**Handle Press */}}>
                <View style={{backgroundColor: '#175873', height: 33, width:170, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                  <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Claim</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default (Component)
