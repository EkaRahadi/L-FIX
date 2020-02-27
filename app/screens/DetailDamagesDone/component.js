import React from 'react';
import { View, Image, StatusBar, FlatList, Text, TextInput, ImageBackground, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Back from '../../../assets/svgs/Back';
import styles from './styles';
import { connect } from 'react-redux';
import {detailTecnician, detailWaiting}  from '../../actions';
import network from '../../network';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

let total;
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      total: 0,
      data : [{name: 'Lampu', harga: 10000}, {name: 'ASa', harga: 15000}, {name: 'Ldfdff', harga: 20000}]
    };
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
          <Back style={{alignSelf:'flex-start', marginTop: 10, marginLeft : 10}} onPress={() =>this.props.navigation.navigate('Done')}/>
          <Text style={styles.title}>Detail Damages</Text>
        </View>

        {/* Content */}
        <View style={{}}>
          <FlatList
                  data={this.props.detailDamage.damages}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => {
                    this.setState(state => ({
                      total: state.total + item.harga
                    }))
                    return (
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10, marginHorizontal: 100}}>
                        <Text>{item.jenis}</Text>
                       <Text>{item.harga}</Text>
                      </View>
                     )
                  }}
            />
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop:10, marginHorizontal: 100}}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10, marginHorizontal: 100}}>
            <Text style={{fontWeight: 'bold'}}>TOTAL</Text>
            <Text style={{fontWeight: 'bold'}}>{this.state.total}</Text>
        </View>
        </View>
    </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailWaiting: state.detailWaiting,
    detailTechnician: state.detailTechnician,
    detailDamage: state.detailDamage
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchDetailWaiting: (kategori, lokasiPelanggan, teknisi) => dispatch(detailWaiting(kategori, lokasiPelanggan, teknisi))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
