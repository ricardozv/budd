import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  selectedButton: { 
    backgroundColor: '#1c1c1c', 
    borderWidth: 1,
    width: 100,
    height: 30,
    borderRadius: 10,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#1c1c1c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    marginTop: 10,
    height: 90,
  },
  payButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    height: 45,
    position: 'absolute',
    bottom: 5,
    width: '95%',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
