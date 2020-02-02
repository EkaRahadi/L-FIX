import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import styles from './styles';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        width : Dimensions.get('window').width,
    };

    Dimensions.addEventListener('change', (e) => {
      this.setState(e.window);
    });
  }

  closeModal = () => {
    this.props.changeModalVisibility(false);
  }

  onConfirm = () => {
    this.props.onConfirm();
  }

  render() {
    return (
     <TouchableOpacity activeOpacity={1} disabled={true} style={styles.contentContainer}>
       <View style={[styles.modal, {width: this.state.width-80}]}>
          <View style={styles.textView}>
              <Text style={[styles.text, {fontSize:20}]}>Are you sure want to cancel this service ?</Text>
          </View>
       </View>
       <View style={styles.buttonsView}>
        <TouchableHighlight onPress={() => this.closeModal()} style={styles.touchableHighlight} underlayColor= '#f1f1f1'>
            <Text style={[styles.text, {color: '#175873'}]}> No </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.onConfirm()} style={styles.touchableHighlight} underlayColor= '#f1f1f1'>
            <Text style={[styles.text, {color: '#BB0D0D'}]}> Yes </Text>
        </TouchableHighlight>
       </View>
     </TouchableOpacity>
    );
  }
}

export default (Component)
