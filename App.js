import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './app/routers';
import store from './app/store/configureStore';
import {fcmService} from './src/FCMService';


export default class App extends Component {

  componentDidMount() {
    fcmService.register(this.onRegister,
    this.onNotification, this.onOpenNotification)
  }

  onRegister(token) {
      console.log("[NotificationFCM] onRegister: ", token)
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
