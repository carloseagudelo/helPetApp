const React = require('react-native');

const { StyleSheet, Dimensions } = React;
const { width, height } = Dimensions.get("window");

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  image: {
    width: 320, 
    height: 320
  },
  buttons:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingTop: 20
  },
  loginButton: {
    backgroundColor: "#ffcc29",
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#ffcc29',
    width: 150,
    alignItems: 'center'
  },
  registerButton: {
    backgroundColor: "#ff7610",
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#ff7610',
    width: 150,
    alignItems: 'center'
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold'
  }
}