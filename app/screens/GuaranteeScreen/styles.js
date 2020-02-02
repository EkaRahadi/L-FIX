import { StyleSheet } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLOR_WHITE
    backgroundColor: 'pink'
  },
  title : {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
  },
  containerInsideTab: {
    borderWidth : 1,
    borderRadius: 10,
    height: 70,
    marginHorizontal: 15,
    marginTop: 15,
    elevation: 5,
    position: 'relative'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});

export default styles;
