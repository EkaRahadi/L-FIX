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
      isLoading: true,
      sk : []
    };
  }

  _onPress = () => {
    this.props.navigation.navigate('Find');
  };

  async componentDidMount() {
    if(this.state.isLoading === true) {
      await fetch(network.ADDRESS+'/sk', {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json'
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          if(responseJson.success === true) {
            this.setState({
              ...this.state,
              isLoading: false,
              sk : responseJson.data
            })
          }
        })
    }
  }

  render() {
    // console.log(this.state.sk)
    return (
     <View style={{flex:1}}>
       <StatusBar
             transculent={false}
             backgroundColor='#175873'
             barStyle='light-content'
             />
        {/* Header */}
        <View style={{backgroundColor: '#175873', height : 56, width: 411, flexDirection: 'row'}}>
          <Back style={{alignSelf:'flex-start', marginTop: 10, marginLeft : 10}} onPress={this._onPress}/>
          <Text style={styles.title}>Terms And Conditions</Text>
        </View>
        <View style={{marginHorizontal:10, flexWrap: 'wrap', marginTop:10}}>
          {
            this.state.sk.map((item) => {
              return (
                <Text key={item.id_sk}>{item.isi_sk}</Text>
              )
            })
          }
        </View>

        {/* Loading */}
        <OrientationLoadingOverlay
            visible={this.state.isLoading}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Loading..."
            />
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
