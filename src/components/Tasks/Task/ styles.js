import { StyleSheet } from "react-native";

const styles_t = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    position: "relative",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#bcbcbc',

  },
  toggleContainerclose: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-end',


  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',


  }
  ,
  alertBox: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 20,
    marginRight: 20,

    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  closeIcon: {
    width: 25,
    height: 25,

  },
  closeText: {
    color: 'blue',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default styles_t