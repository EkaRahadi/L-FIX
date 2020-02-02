import React from 'react';
import { View, Image, StatusBar, Text, TouchableOpacity} from 'react-native';
import Textarea from 'react-native-textarea';
import Back from '../../../assets/svgs/Back';
import styles from './styles';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        feedback : '',
        Default_Rating : 0,
        Max_Rating : 5,
    };
  }

  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }


  _onPress = () => {
    this.props.navigation.navigate('Done');
  };

  onChange = (value) => {
    this.setState({
      feedback : value
    });
  }

  render() {

    let React_Native_Rating_Bar = [];
    for (var i = 1; i<= this.state.Max_Rating; i++){
      React_Native_Rating_Bar.push(
        <TouchableOpacity 
         activeOpacity={0.7}
         key={i}
         onPress={this.UpdateRating.bind(this,i)} >
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating ? require('../../../assets/images/star_filled.png') :require('../../../assets/images/star_corner.png')
            }
          />
        </TouchableOpacity>

      );   
    }
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
          <Text style={styles.title}>Rating</Text>
        </View>

        {/* Content */}
        <View style={{flex:1, alignItems: 'center'}}>
          {/* Title */}
          <View style={{ marginTop:10}}>
              <Text style={{color: '#000000', fontFamily: 'roboto', fontWeight: '500', fontSize:20}}>Share Your Experience With Us</Text>
          </View>
          {/* Icon and Name */}
          <View style={{alignItems: 'center'}}>
            {/* Circle */}
            <View style={{width: 100, height: 100, borderWidth:1, borderRadius: 100/2, position: 'relative', marginTop: 20}}>
              <Image
                  style={{position: 'absolute', top: 30, left: 15}}
                  source={require('../../../assets/images/mechanic-user-medium.png')}
              />
            </View>
            <Text style={{color: '#000000', fontWeight: '500', fontFamily: 'roboto', fontSize: 20}}>Elba Ayu Kurnia</Text>
          </View>

          {/* Rating */}
          <View>
            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
            <Text style={styles.textStyle}>
              {this.state.Default_Rating} / {this.state.Max_Rating}
            </Text>
          </View>

          {/* Details Technician */}
          <View style={{alignItems: 'center', position: 'relative', marginBottom:20}}>
            {/* Specialist */}
            <View style={{flexDirection: 'row', marginBottom: 5, marginRight: 15}}>
                <Text style={{flexWrap: 'wrap', marginLeft: 130}}>Specialist : </Text>
                <Text style={{flexWrap: 'wrap', flex: 1}}>Refrigerator , AC</Text>
            </View>
            {/* Phone */}
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Text>Phone : </Text>
              <Text>087889057672</Text>
            </View>
      
            {/* Location */}
            <Text style={{marginLeft: 30}}>Jl. Asia Afrika No.32</Text>
            <Image
              style={{position: 'absolute', top: 45, left: 130}}
              source={require('../../../assets/images/small_location_red.png')}
            />
          </View>

          {/* FeedBack Area */}
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={(defaultValue) => this.onChange(defaultValue)}
            defaultValue={this.state.feedback}
            maxLength={250}
            placeholder={'Type your feedback...'}
            underlineColorAndroid={'transparent'}
          />

          {/* Button */}
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom:10}}>
            <TouchableOpacity onPress={() => {/**Handle Press */}}>
                  <View style={{backgroundColor: '#175873', height: 33, width:170, borderRadius:25, justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                    <Text style={{color:'#FFFFFF', fontFamily: 'roboto', fontWeight: 'bold', fontSize: 20}}>Submit</Text>
                  </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default (Component)
