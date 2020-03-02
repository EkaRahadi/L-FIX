import React from 'react';
import { View, Image, StatusBar, SectionList, Text, TouchableOpacity, TextInput, FlatList, Alert} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { connect } from 'react-redux';
import {getDataProject, getSquadSelected, dataCategory} from '../../actions';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import network from '../../network';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      bandwitdh: '0',
      data : []
    };
  }

  async componentDidMount() {
    const getData = new Promise(async (resolve, reject) => {
      await fetch(network.ADDRESS+'/kategoriBarang', {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json'
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          if(responseJson.success === true) {
            resolve({
              status: true,
              data: responseJson.data,
            })
          }
          else {
            reject({
              status: false,
              data: null
            })
          }
        })
          .catch( response => Alert.alert(JSON.stringify(response)))
    })

    // Call Promise
    await getData
            .then(response => {
              this.setState({
                isLoading: false,
                data: response.data
              })
            })
            .catch(response => console.log(response))
  }

  _onPress = () => {
    this.props.navigation.navigate('Find');
  };  


  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF', flex:1}}>
        <StatusBar
             transculent={false}
             backgroundColor='#175873'
             barStyle='light-content'
             />
        {/* Pembungkus Search dan Emergency */}
        <View style={{marginHorizontal:16, flexDirection:'row', marginTop:10}}>
          {/* Search Bar */}
          <View style={{position:'relative', flex:1}}>
            <TextInput
            underlineColorAndroid="transparent"
            style = {{borderWidth:1, borderColor: '#000000', borderRadius:10, height:40, fontSize:13, paddingLeft:45, paddingRight:20, marginRight:5}}
            placeholder = "What Are You Looking ?"
            />
            <Image source={require('../../../assets/images/search--v2.png')} style={{width:30, height:30, position:'absolute', top:5, left:5}}/>
          </View>
          <TouchableOpacity>
              <View style={{width:70, height:40, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{width:40, height:38}}
                  source={require('../../../assets/images/doctor_on_call-512.png')}
                />
              </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:'#175873',flexDirection: 'row', flexWrap: 'wrap', width:380, height: 370, borderRadius: 100/4, marginTop:150, marginLeft:16,justifyContent: 'space-between'}}>
          {/* Box Kotak */}
          <FlatList
            data={this.state.data}
            keyExtractor={ (item, index) => index.toString()}
            horizontal={false}
            numColumns={3}
            renderItem={({item, index}) => (
            <TouchableOpacity onPress={ async () => {
             await this.props.dispatchDataCategory(item.name, item.image, item.jenis_kerusakan);
             this.props.navigation.navigate('Find');
            }}>
                <View style={{backgroundColor:'#ffffff', width:100, height:130, marginTop:50, marginHorizontal:10, borderRadius:100/6}}>
                    <View style={{backgroundColor:'#175873', borderRadius:100/2, width:90, height:90, marginTop:5, alignSelf:'center'}}>
                    {/* Gambar */}
                        <Image style={{width:70, height:70, marginTop: 13, marginLeft:10}} source={{uri: item.image}}/>
                    </View>
                    <View style={{height: 1, width: 100, backgroundColor:'#000', marginTop:10}}/>
                        <Text style={{color:'#000', alignSelf:'center'}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            )}
          />
        </View>
        <Image style={styles.carousel} source={require('../../../assets/images/carousel.jpeg')}/>

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

Component.propTypes = {
  listUsers: PropTypes.array
}; 

Component.defaultProps = {
  listUsers: []
};

const mapStateToProps = state => {
  return {
     projects : state.dataProject,
     user : state.user,
     dataUser : state.dataProject     
  }
};

const mapDispatchToProps = dispatch => {
  return {
    sendDataProjects : (index) => dispatch(getDataProject(index)),
    squadChoosen : (select) => dispatch(getSquadSelected(select)),
    dispatchDataCategory : (name, image, jenisKerusakan) => dispatch(dataCategory(name, image, jenisKerusakan))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Component)
