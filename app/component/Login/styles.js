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
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 5,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 5,
    height: 40,

    marginRight: 20,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ffcc29",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginRight:20,
    marginLeft:20,
    borderRadius:30
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold'
  },
  forgotPasswordText: {
    color: "black",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  accountText: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold'
  },
  signupLinkText: {
    color: "black"
  },
  networkTitle:{
    marginTop: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  networkWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  faceBookButton: {
    backgroundColor: "#3b5998",
    alignItems: "center",
    justifyContent: "center",
    marginRight:10,
    marginLeft:10,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10  
  },
  instagramButton: {
    backgroundColor: "#8a3ab9",
    alignItems: "center",
    justifyContent: "center",
    marginRight:10,
    marginLeft: 10,
    borderRadius:10,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  socialButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold'
  },
}