import React from 'react';
import { View, FlatList,Text,Image, ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import Tabs from '../../components/elements/Tabs';
import {waitingService, onProcessService, doneService, detailWaiting} from '../../actions';
import { connect } from 'react-redux';
import styles from './styles';
import network from '../../network';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tabIndex: 0,
      isLoading: true
    };
  }

  _onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

  async componentDidMount() {
    if (this.state.isLoading === true) 
      {
          let waiting = []
          let onProcess = []
          let done = []
          await fetch(network.ADDRESS+'/data_service', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
              userId: 1
            })
          })
            .then(response => response.json())
            .then(async responseJson => {
              if(responseJson.success === true) {
                //Mapping ke reducer berdasarkan status service e.g waiting / On Process / Done
                responseJson.data.map( async item => {
                  if(item.status === 'Waiting') {
                    waiting = waiting.concat(item);
                  }
                  else if (item.status === 'On Process') {
                    onProcess = onProcess.concat(item);
                  }
                  else if (item.status === 'Done') {
                    done = done.concat(item);
                  }
      
                  await this.props.dispatchWaiting(waiting);
                  await this.props.dispatchOnProcess(onProcess);
                  await this.props.dispatchDone(done);
                  this.setState({
                    ...this.state,
                    isLoading: false
                  })
                  // console.log(waiting)
                  // console.log(onProcess)
                  // console.log(done)
                })
              }
              else {
                  await this.props.dispatchWaiting(waiting);
                  await this.props.dispatchOnProcess(onProcess);
                  await this.props.dispatchDone(done);
              }
            })
            .catch(response => {
              Alert.alert("Error : "+JSON.stringify(response))
            })
      } //end if
   
  }

  _getTabData = () => [
    {
      name: 'Waiting',
      renderer: this._renderTabWaiting
    },
    {
      name: 'On Process',
      renderer: this._renderTabOnProcess
    },
    {
      name: 'Done',
      renderer: this._renderTabDone
    }
  ];

  _onTabChanged = index => {
    this.setState({ tabIndex: index });
  };

  _renderTabWaiting = () => {
    return (
      <View>
        <FlatList
                data={this.props.waitingService.waiting}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity onPress={async () => {
                     await this.props.dispatchDetailWaiting(item.kategori, item.lokasiPelanggan, item.teknisi);
                      this.props.navigation.navigate('Waiting');
                    }}>
                      <View style={styles.containerInsideTab}>
                        <View style={{marginLeft: 5,marginTop:5}}>
                          <Text style={{fontSize: 22, fontWeight: '500',color:'#000000',fontFamily:'roboto'}}>{item.kategori}</Text>
                          <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>{item.lokasiPelanggan}</Text>
                        </View>
                        <Image
                          style={{position: 'absolute', left: 350, top: 40}}
                          source={require('../../../assets/images/next.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
            />
      </View>
      
    );

  };

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 1, width: '100%', backgroundColor: '#000' }}
      />
    ); 
  };

  _renderTabOnProcess = () => {

    return (
      <View>
        <FlatList
                data={this.props.onProcessService.onProcess}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('OnProcess')}}>
                      <View style={styles.containerInsideTab}>
                        <View style={{marginLeft: 5,marginTop:5}}>
                          <Text style={{fontSize: 22, fontWeight: '500',color:'#000000',fontFamily:'roboto'}}>{item.kategori}</Text>
                          <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>{item.lokasiPelanggan}</Text>
                        </View>
                        <Image
                          style={{position: 'absolute', left: 350, top: 40}}
                          source={require('../../../assets/images/next.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
            />
      </View>
    );
  } 
  
  _renderTabDone = () => {

    return (
      <View>
        <FlatList
                data={this.props.doneService.done}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Done')}}>
                      <View style={styles.containerInsideTab}>
                        <View style={{marginLeft: 5,marginTop:5}}>
                          <Text style={{fontSize: 22, fontWeight: '500',color:'#000000',fontFamily:'roboto'}}>{item.kategori}</Text>
                          <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>{item.lokasiPelanggan}</Text>
                        </View>
                        <Image
                          style={{position: 'absolute', left: 350, top: 40}}
                          source={require('../../../assets/images/next.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
            />
      </View>
    );
  } 

  render() {
    return (
        <View style={styles.container}>
          <Tabs
            tabsData={this._getTabData()}
            tabContainerStyle={styles.tabContainer}
            tabLabelStyle={styles.tabLabelStyle}
            tabLabelSelectedStyle={styles.tabSelectedLabel}
            bottomLineStyle={styles.bottomLineStyle}
            onTabChanged={this._onTabChanged}
          />
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

} //End Class

const mapStateToProps = state => {
  return {
    //  projects : state.dataProject,
    //  user : state.user,
    //  dataUser : state.dataProject,
    waitingService:state.waitingService,
    onProcessService:state.onProcessService,
    doneService:state.doneService
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchWaiting : (waiting) => dispatch(waitingService(waiting)),
    dispatchOnProcess : (onProcess) => dispatch(onProcessService(onProcess)),
    dispatchDone : (done) => dispatch(doneService(done)),
    dispatchDetailWaiting: (kategori, lokasiPelanggan, teknisi) => dispatch(detailWaiting(kategori, lokasiPelanggan, teknisi))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)