import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 100,
    paddingTop:10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 10
  },
  text : {
    margin: 5,
    fontSize: 16,
    fontWeight: '500'
  },
  touchableHighlight: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 10
  },
  textView: {
    flex: 1,
    alignItems: 'center'
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row'
  }
});

export default styles;
