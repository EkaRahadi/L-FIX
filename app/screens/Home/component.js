import React from 'react';
import { View, Image, StatusBar, SectionList, Text, TouchableOpacity, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
// import Header from '../../components/elements/Header';
import styles from './styles';
import { connect } from 'react-redux';
import {getDataProject, getSquadSelected} from '../../actions';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      bandwitdh: '0',
      dataSource: [],
      // data : this.props.user.response.data.key
    };
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
        <View style={{backgroundColor:'#175873',flexDirection:'row', flexWrap: 'wrap', width:380, height: 370, borderRadius: 100/4, marginTop:150, marginLeft:16}}>
          {/* Box Kotak */}
          <View style={{flexDirection:'row', justifyContent: 'space-between', width: '100%'}}> 
          <TouchableOpacity onPress={this._onPress}>
            <View style={{backgroundColor:'#ffffff', width:100, height:130, marginTop:50, marginHorizontal:10, borderRadius:100/6}}>
              <View style={{backgroundColor:'#175873', borderRadius:100/2, width:90, height:90, marginTop:5, alignSelf:'center'}}>
                {/* Gambar */}
                <Image style={{width:70, height:70, marginTop: 13, marginLeft:10}} source={require('../../../assets/images/kulkas.png')}/>
              </View>
              <View style={{height: 1, width: 100, backgroundColor:'#000', marginTop:10}}/>
              <Text style={{color:'#000', alignSelf:'center'}}>Refrigerator</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress}>
            <View style={{backgroundColor:'#ffffff', width:100, height:130, marginTop:50, marginHorizontal:10, borderRadius:100/6}}>
              <View style={{backgroundColor:'#175873', borderRadius:100/2, width:90, height:90, marginTop:5, alignSelf:'center'}}>
                {/* Gambar */}
                <Image style={{width:60, height:60, marginTop: 13, marginLeft:10}} source={require('../../../assets/images/ac.png')}/>
              </View>
              <View style={{height: 1, width: 100, backgroundColor:'#000', marginTop:10}}/>
              <Text style={{color:'#000', alignSelf:'center'}}>AC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress} >
            <View style={{backgroundColor:'#ffffff', width:100, height:130, marginTop:50, marginHorizontal:10, borderRadius:100/6}}>
              <View style={{backgroundColor:'#175873', borderRadius:100/2, width:90, height:90, marginTop:5, alignSelf:'center'}}>
                {/* Gambar */}
                <Image style={{width:70, height:70, marginTop: 10,}} source={require('../../../assets/images/gadgets.png')}/>
              </View>
              <View style={{height: 1, width: 100, backgroundColor:'#000', marginTop:10}}/>
              <Text style={{color:'#000', alignSelf:'center'}}>Gadgets</Text>
            </View>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this._onPress}>
            <View style={{backgroundColor:'#ffffff', width:100, height:130, marginTop:50, marginLeft:10, borderRadius:100/6}}>
              <View style={{backgroundColor:'#175873', borderRadius:100/2, width:90, height:90, marginTop:5, alignSelf:'center'}}>
                {/* Gambar */}
                <Image style={{width:70, height:70, marginTop: 13, marginLeft:10}} source={require('../../../assets/images/cuci.png')}/>
              </View>
              <View style={{height: 1, width: 100, backgroundColor:'#000', marginTop:10}}/>
              <Text style={{color:'#000', alignSelf:'center', fontSize:12}}>Washing
              Mechine</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image style={styles.carousel} source={require('../../../assets/images/carousel.jpeg')}/>
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
    squadChoosen : (select) => dispatch(getSquadSelected(select))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Component)
