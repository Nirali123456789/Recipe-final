import { StyleSheet } from "react-native";

const styles_p = StyleSheet.create({

  pizzaContainer: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    position: "relative",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#bcbcbc',



  },
  image: {
    height: 250,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  text: {
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: '#000',
  },
});

export default styles_p;
