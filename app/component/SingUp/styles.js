const React = require('react-native');

const { StyleSheet, Dimensions } = React;
const { width, height } = Dimensions.get("window");

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },



  inputsContainer: {
    flex: 3,

  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderColor: 'transparent',
    flexDirection: 'row',
    marginRight:20,
    marginLeft:20,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },

  footerContainer: {
    flex: 1
  },
  signup: {
    backgroundColor: '#ffcc29',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:20,
    marginLeft:20,
    marginBottom: 15,
    borderRadius:30
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: 'black',
    fontWeight: 'bold'
  },
  whiteFont: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontWeight: 'bold'
  },
  grayFont:{
    color: 'gray',
    fontSize: 15,
  }
}