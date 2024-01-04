
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  },
  card: {
    width: '100%', 
    marginBottom: 16, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 8,
    elevation: 2, 
  },
  image: {
    height: 350,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

 
  },
  description: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16, 
    marginTop : 20,
    color : 'black'
  },
  name: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    textAlign: 'center',
    color : 'black',
    padding: 8, 

  },
  backButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'black', 
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    color : 'black',
    paddingHorizontal: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    color : 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
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
});

export default styles;
