import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#040504',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center', 
  },
  
  eventImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#32CD32',
    marginLeft: 30,
  },
  ticketType: {
    color: '#32CD32',
    fontWeight: 'bold',
    marginLeft: 60,
  },
  ticketPrice: {
    marginLeft: 60,
    color: '#32CD32',
  },
  // Defina a cor do texto para verde
  ticketButtons: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ticketSummary: {
    marginTop: 10,
    alignItems: 'center',
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
    width: '48%', 
    left: '2%', 
  },
  closeButton: {
    backgroundColor: '#FF0000', 
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    height: 45,
    position: 'absolute',
    bottom: 5,
    width: '48%', 
    right: '2%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    marginRight: 10,
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
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    marginLeft: 8,
    top: 24,
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
  }
});

export default styles;
