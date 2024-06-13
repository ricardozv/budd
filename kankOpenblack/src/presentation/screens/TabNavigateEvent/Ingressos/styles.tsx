import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1c1c1c',
  },
  row: {
    backgroundColor:'#1c1c1c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginLeft:5,
    marginRight:5,
    borderRadius: 10,
    marginTop:12,
    height: 130
  },
  payButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 10,
    height: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 0,
    width: '95%',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default styles;