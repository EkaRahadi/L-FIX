import React from 'react';
import { View, Image, StatusBar, FlatList, Text, TextInput, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Back from '../../../assets/svgs/Back';
import styles from './styles';
import { connect } from 'react-redux';
import {detailTecnician, detailWaiting}  from '../../actions';
import network from '../../network';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  _cancelTeknisi = async () => {
    await fetch(network.ADDRESS+'/cancel_teknisi', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        id_service : this.props.detailWaiting.idService
      })
    }).then( response => response.json())
      .then(responseJson => {
        if(responseJson.success === true) {
          Alert.alert('Success Cancel Service !')
        }
        else {
          Alert.alert('Failed Cancel Service !')
        }
      })
      .catch( error => Alert.alert(JSON.stringify(error)))

      this.props.navigation.navigate('ServiceScreen')
  }

  render() {
    return (
     <View style={{flex:1}}>
       <StatusBar
             transculent={false}
             backgroundColor='#175873'
             barStyle='light-content'
             />
        <View style={{backgroundColor: '#175873', height : 56, width: 411, flexDirection: 'row'}}>
          <Back style={{alignSelf:'flex-start', marginTop: 10, marginLeft : 10}} onPress={() =>this.props.navigation.navigate('Waiting')}/>
          <Text style={styles.title}>Detail Technician</Text>
        </View>
       <View style={{flex:1, marginTop:10}}>
          {/* ICON */}
          <View style={{width:90, height:90, borderRadius:90/2, borderWidth:1, borderColor:'#000000', alignSelf: 'center', marginTop:5}}>
            <Image
              style={{alignSelf: 'center', marginTop:10}}
              source={require('../../../assets/images/mechanic-user-medium.png')}
            />
          </View>
          {/* Content */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:20, fontFamily:'Roboto', fontWeight: '500', marginTop:10}}>{this.props.detailTechnician.teknisi.namaTeknisi}</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30, marginTop:10}}>
            <Text>Specialist : </Text>
            <Text>{this.props.detailTechnician.teknisi.specialist}</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30, marginTop:10}}>
            <Text>Phone : </Text>
            <Text>{this.props.detailTechnician.teknisi.no_hp}</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginHorizontal: 30, marginTop:10}}>
            <Image
              // style={{position: 'absolute', top: 10, left: 10}}
              source={require('../../../assets/images/small_location_red.png')}
            />
            <Text style={{marginLeft: 10}}>{this.props.detailTechnician.teknisi.lokasiTeknisi}</Text>
          </View>
       </View>
       {/* Button Cancel */}
       <View style={{flex:1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
          <TouchableOpacity onPress={this._cancelTeknisi}>
              <View style={{borderColor: '#DB1313', borderWidth: 2.5, width: 120, height: 33, justifyContent: 'center', alignItems: 'center', borderRadius:25, marginBottom:20}}>
                <Text style={{color:'#DB1313', fontFamily: 'roboto', fontWeight: '500', fontSize: 15}}>Cancel</Text>
              </View>
          </TouchableOpacity>
       </View>
     </View> 
    );
  }
}

const mapStateToProps = state => {
  return {
    //  projects : state.dataProject,
    //  user : state.user,
    //  dataUser : state.dataProject,
    detailWaiting: state.detailWaiting,
    detailTechnician: state.detailTechnician
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchDetailWaiting: (kategori, lokasiPelanggan, teknisi) => dispatch(detailWaiting(kategori, lokasiPelanggan, teknisi))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
