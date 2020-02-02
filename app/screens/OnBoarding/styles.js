import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, FONT_HEADLINE6_PRIMARY, COLOR_WHITE  } from '../../styles';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-end', 
    flex:1, 
    alignItems: 'center', 
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  },
  title : {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    alignSelf: 'center',
    marginLeft: 100
  },
  circle: {
     width: 70, 
     height: 70,
     borderRadius: 100/2, 
     backgroundColor: '#175873',
    //  marginLeft:50,
    //  marginTop: 20,
     top:100,
     left:50,
     position:'absolute'
     },
  lock: {
     width: 60, 
     height: 60,
     top:100,
     left:60,
     position:'absolute'
  },
  judul: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 320,
    height: 320,
  },
  slide:{
    flex:1
  }
});

export default styles;
