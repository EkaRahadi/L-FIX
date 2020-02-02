import { StyleSheet } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY } from '../../styles';

const styles = StyleSheet.create({
  container: {
    borderRadius:100/4,
    height:370,
    width:380,
    backgroundColor:'#175873',
    top:200,
    left:16,
    flexDirection:'column'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#000',
  
  },
  SectionHeaderStyle: {
    backgroundColor: '#289f97',
    fontSize: 15,
    padding: 5,
    color: '#fff',
    alignSelf:'stretch',
    textAlign:'center',
    fontStyle:'italic'
  

  },
  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
  title : {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    alignSelf: 'center',
    marginLeft: 120
  },
  textAreaContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius:100/8,
    width: 300,
    paddingLeft:5,
    height:40

  },
  textArea: {
    height: 35,
    justifyContent: "center",

  },
  textareaContainer: {
    height: 170,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 160,
    fontSize: 14,
    color: '#333',
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 10,
    marginBottom:5
  },
  StarImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  }, 
  
});

export default styles;
