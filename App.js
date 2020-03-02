import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './app/routers';
import store from './app/store/configureStore';
import {fcmService} from './src/FCMService';
import network from './app/network';
import AsyncStorage from '@react-native-community/async-storage';


export default class App extends Component {

  getData = async () => {
    
  }

  componentDidMount() {
    fcmService.register(this.onRegister,
    this.onNotification, this.onOpenNotification)
  }

 async onRegister(token) {
      console.log("[NotificationFCM] onRegister: ", token)
      try {
        const value = await AsyncStorage.getItem('user_account')
        const user_account = JSON.parse(value)
        if(value !== null) {
          // value previously stored
          console.log('App')
          console.log(user_account)
          await fetch(network.ADDRESS+'/updateToken', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              userId : user_account.id,
              token: token
            })
          })
            .then(response => response.json())
            .then(responseJson => {
              if(responseJson.success === true) {
                console.log('Token Disimpan di DB')
              }
              else {
                console.log('Token Tidak Disimpan di DB')
              }
            })
            .catch(e => console.log(e))
        }
      } catch(e) {
        // error reading value
        console.log(e)
      }
  }

  onNotification(notify) {
      console.log("[NotificationFCM] onNotification: ", notify)
      //For Android
      const channelObj = {
          channelId: "SampleChannelID",
          channelName: "SampleChannelName",
          channelDes: "SampleChannelDes"
      }

      const channel = fcmService.buildChannel(channelObj)

      const buildNotify = {
          dataId: notify._notificationId,
          title: notify._title,
          content: notify._body,
          sound: 'default',
          channel: channel,
          data: {},
          colorBgIcon: "#1A243B",
          largeIcon: 'ic_launcher',
          smallIcon : 'ic_launcher',
          vibrate: true
      }

      const notification = fcmService.buildNotification(buildNotify)
      fcmService.displayNotification(notification)

  }

  onOpenNotification(notify) {
      console.log("[NotificationFCM] onOpenNotification: ", notify)
      Alert.alert("Open Notification: " + notify._body)

  }

  render() {
    return (
      <Provider store={store()}>
        <Router />
      </Provider>
    );
  }
}
