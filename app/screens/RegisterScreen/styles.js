import { StyleSheet } from 'react-native';


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
      notes: {
         width: 50, 
         height: 60,
         top:110,
         left:80,
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
