import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import FlatList from '../../components/elements/FlatList';
import Tabs from '../../components/elements/Tabs';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }
  _onPress = () => {};

  _getTabData = () => [
    {
      name: 'Member',
      renderer: this._renderTab
    },
    {
      name: 'Event',
      renderer: this._renderTabEvent
    }
  ];

  _onTabChanged = index => {
    
  };

  _renderTab = () => {
    
    return (
      <View style={styles.containerInsideTab}>
        <FlatList/>
      </View>
    );

  };

  _renderTabEvent = () => {
    return(
      <View style={styles.containerInsideTabEvent}>
        <View style={styles.subContainer}>
          <View style={{height:50, width:412, backgroundColor:'#fff', justifyContent:'flex-start', marginBottom:5, borderBottomColor:'#000', borderBottomWidth:1, flexDirection:'row'}}>
            <Text style={{color:'#000', fontSize:17, marginRight:280, marginTop:10}} onPress={this._onPressEvent}>
              Sprint Planning
            </Text>
          </View>
        </View>
        <Button title="create event" disabled={false} onPress={this._onPress} type="raised-ripple" />
      </View>
    );
  }
  _onPress = () => {
      this.props.navigation.navigate('CreateEvent');
  }
  
  _onPressEvent = () => {
    this.props.navigation.navigate('ListAssessment')
};

  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title="(Project Name)" setting back />
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
      </MainScreen>
    );
  }
}
