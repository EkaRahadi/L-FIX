import React from 'react';
import { View, Image, StatusBar, Text, TouchableOpacity, Modal } from 'react-native';
import Back from '../../../assets/svgs/Back';
import styles from './styles';
import ConfirmModal from '../../components/modals/ConfirmModal';
import {detailWaiting, detailTecnician} from '../../actions';
import { connect } from 'react-redux';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     isModalVisible: false
    };
  }

  _onPress = () => {
    this.props.navigation.navigate('ServiceScreen');
  };

  changeModalVisibility = (bool) => {
    this.setState({isModalVisible : bool});
  }

  onConfirm = () => {
    //Handle COnfirm Here
  }

  render() {
    console.log(this.props.detailWaiting.teknisi.namaTeknisi === null)
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
          <Text style={styles.title}>Waiting</Text>
        </View>

        {/* Content */}
        <View style={{flex:1}}>
          <View>
            {/* Service */}
              <View style={{borderBottomWidth: 1, height: 70, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                  <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: 'bold'}}>Service</Text>
                  <Text style={{fontSize:15, marginLeft: 50, marginTop:10}}>{this.props.detailWaiting.kategori}</Text>
                  <Image
                    style={{position: 'absolute', top: 10, left: 10}}
                    source={require('../../../assets/images/palu.png')}
                  />
              </View>
              {/* Location */}
              <View style={{borderBottomWidth: 1, height: 70, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                  <Text style={{fontSize:20, color:'#000000', marginLeft: 45, marginTop:5, fontWeight: 'bold'}}>Location</Text>
                  <Text style={{fontSize:15, marginLeft: 50, marginTop:10}}>{this.props.detailWaiting.lokasiPelanggan}</Text>
                  <Image
                    style={{position: 'absolute', top: 10, left: 10}}
                    source={require('../../../assets/images/small_location.png')}
                  />
              </View>
              {this.props.detailWaiting.teknisi.namaTeknisi === null ?
              <TouchableOpacity disabled={true}>
                      {/* Technician */}
                  <View style={{borderBottomWidth: 1, height: 85, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                      <Text style={{fontSize:20, color:'#000000', marginLeft: 50, marginTop:15, fontWeight: 'bold'}}>Technician</Text>
                      <Text style={{fontSize:15, marginLeft: 55, marginTop:10}}>Waiting</Text>
                      <Image
                        style={{position: 'absolute', top: 15, left: 10}}
                        source={require('../../../assets/images/mechanic-small.png')}
                      />
                      {/* <Image
                        style={{position: 'absolute', left : 30, top: 10, width:15, height:15}}
                        source={require('../../../assets/images/notifications-small.png')}
                      /> */}
                      {/* Icon Next */}
                      <Image
                        style={{position: 'absolute', top: 30, left: 380}}
                        source={require('../../../assets/images/next.png')}
                      />
                  </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={async () => {
                await this.props.dispatchDetailTechnician(this.props.detailWaiting.teknisi)
                this.props.navigation.navigate('DetailTechnician')
                }}>
                      {/* Technician */}
                  <View style={{borderBottomWidth: 1, height: 85, borderBottomColor: '#C4C4C4', position: 'relative'}}>
                      <Text style={{fontSize:20, color:'#000000', marginLeft: 50, marginTop:15, fontWeight: 'bold'}}>Technician</Text>
                      <Text style={{fontSize:15, marginLeft: 55, marginTop:10}}>See Details</Text>
                      <Image
                        style={{position: 'absolute', top: 15, left: 10}}
                        source={require('../../../assets/images/mechanic-small.png')}
                      />
                      <Image
                        style={{position: 'absolute', left : 30, top: 10, width:15, height:15}}
                        source={require('../../../assets/images/notifications-small.png')}
                      />
                      {/* Icon Next */}
                      <Image
                        style={{position: 'absolute', top: 30, left: 380}}
                        source={require('../../../assets/images/next.png')}
                      />
                  </View>
              </TouchableOpacity>
              }
          </View>

          {/* Button */}
          <View style={{ flex:1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10}}>
              {/* Button Cancel */}
              <TouchableOpacity onPress={() => {this.changeModalVisibility(true)}}>
                <View style={{borderColor: '#DB1313', borderWidth: 2.5, width: 120, height: 33, justifyContent: 'center', alignItems: 'center', borderRadius:25, marginBottom:20}}>
                  <Text style={{color:'#DB1313', fontFamily: 'roboto', fontWeight: '500', fontSize: 15}}>Cancel</Text>
                </View>
              </TouchableOpacity>
              {/* Button Confirm */}
              {this.props.detailWaiting.teknisi.namaTeknisi === null ?
              null
              :
              <TouchableOpacity onPress={() => {/**Handle Press */}}>
                <View style={{backgroundColor: '#175873', height: 33, width:170, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                  <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Confirm</Text>
                </View>
              </TouchableOpacity>
              }
          </View>

          {/* Modal */}
            <Modal transparent={true} animationType='fade' visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}>
                <ConfirmModal changeModalVisibility={this.changeModalVisibility} onConfirm={this.onConfirm}/>
            </Modal>
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
    detailWaiting: state.detailWaiting
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchDetailWaiting: (kategori, lokasiPelanggan, teknisi) => dispatch(detailWaiting(kategori, lokasiPelanggan, teknisi)),
    dispatchDetailTechnician: (teknisi) => dispatch(detailTecnician(teknisi))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
