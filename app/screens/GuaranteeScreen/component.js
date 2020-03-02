import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from './styles';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import network from '../../network';
import {detailDone,detailGuarantee} from '../../actions';
import { connect } from 'react-redux';

class Component extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      isLoading: true,
      data: null
    };
  }

  async componentDidMount() {
    if (this.state.isLoading === true)
    {
      await fetch(network.ADDRESS+'/data_guarantee', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          userId: this.props.userAccount.data.data.id
        })
      }).then(response => response.json())
        .then(responseJson => {
          if(responseJson.success === true) {
            this.setState({
              ...this.state,
              isLoading: false,
              data: responseJson.data
            })
          }
          else {
            this.setState({
              ...this.state,
              isLoading: false,
              data: []
            })
          }
        })
          .catch(e => Alert.alert(JSON.stringify(e)))
    }
  }

  render() {
    return (
      <View style={{backgroundColor: '#ffffff',flex:1}}>
        {/* Header */}
          <View style={{backgroundColor: '#175873', height : 56, width: 411, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Guarantee</Text>
          </View>

        {/* Content */}
          <View style={{flex:1}}>
          <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity onPress={async () => {
                      let garansi = item.service.idService
                      let newGaransi = {
                        id_service : garansi,
                        valid_until: item.valid_until,
                        status: item.status,
                        id_guarantee: item.id_guarantee
                      }
                      await this.props.dispatchDetailGuarantee(item.service.kategori, item.service.lokasiPelanggan,
                      item.service.teknisi, newGaransi)
                      this.props.navigation.navigate('DetailGuarantee')
                      }}>
                      <View style={styles.containerInsideTab}>
                        <View style={{marginLeft: 10,marginTop:5}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold',color:'#000000',fontFamily:'roboto'}}>{item.service.kategori}</Text>
                            <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>{item.service.startDate}</Text>
                        </View>
                        <Image
                          style={{position: 'absolute', left: 350, top: 20}}
                          source={require('../../../assets/images/next.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
            />
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
    userAccount:state.userAccount
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchDetailDone: (damage, lokasiPelanggan, teknisi, kategori, guarantee) => dispatch(detailDone(damage, lokasiPelanggan, teknisi, kategori, guarantee)),
    dispatchDetailGuarantee: (kategori, lokasiPelanggan, teknisi, guarantee) => dispatch(detailGuarantee(kategori, lokasiPelanggan, teknisi, guarantee))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
