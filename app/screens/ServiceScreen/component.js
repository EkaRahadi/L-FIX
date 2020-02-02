import React from 'react';
import { View, FlatList,Text,Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import Back from '../../../assets/svgs/Back';
import Check from '../../../assets/svgs/Check'
import Button from '../../components/elements/Button';
import Tabs from '../../components/elements/Tabs';
import styles from './styles';

class Component extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tabIndex: 0,
    };
  }

  _onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

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
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Waiting')}}>
          <View style={styles.containerInsideTab}>
            <View style={{marginLeft: 5,marginTop:5}}>
              <Text style={{fontSize: 22, fontWeight: 'bold',color:'#000000',fontFamily:'roboto'}}>Refrigerator</Text>
              <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>Jl. Siliwangi No.48</Text>
            </View>
            <Image
              style={{position: 'absolute', left: 350, top: 40}}
              source={require('../../../assets/images/next.png')}
            />
          </View>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('OnProcess')}}>
          <View style={styles.containerInsideTab}>
            <View style={{marginLeft: 5,marginTop:5}}>
              <Text style={{fontSize: 22, fontWeight: 'bold',color:'#000000',fontFamily:'roboto'}}>Refrigerator</Text>
              <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>Jl. Siliwangi No.48</Text>
            </View>
            <Image
              style={{position: 'absolute', left: 350, top: 40}}
              source={require('../../../assets/images/next.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  } 
  
  _renderTabDone = () => {

    return (
      <View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Done')}}>
          <View style={styles.containerInsideTab}>
            <View style={{marginLeft: 5,marginTop:5}}>
              <Text style={{fontSize: 22, fontWeight: 'bold',color:'#000000',fontFamily:'roboto'}}>Refrigerator</Text>
              <Text style={{fontSize:15, marginTop: 5,fontFamily:'roboto'}}>Jl. Siliwangi No.48</Text>
            </View>
            <Image
              style={{position: 'absolute', left: 350, top: 40}}
              source={require('../../../assets/images/next.png')}
            />
          </View>
        </TouchableOpacity>
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
        </View>
    );
  
}

} //End Class

export default (Component)