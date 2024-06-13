import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    padding: 2,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: '20%', // Ajustado para margem superior
    fontSize: 24,
    fontWeight: 'bold',
    color: '#54FF54',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginVertical:'70%' , // Ajustado para margem superior
    color: '#54FF54',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 55,
    width: '96%',
    backgroundColor: '#54FF54',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    elevation: 9,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default styles;
