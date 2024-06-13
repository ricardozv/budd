import {View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/business/hooks/useCachedResources';
import Navigation from './src/presentation/navigation';
import LoadingScreen from './src/presentation/screens/load';
import { StripeProvider } from '@stripe/stripe-react-native';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const publishableKey = "pk_test_51L7TkIG9wzhxJLJNEnpN9fwRevqd2T7XRKdh6QgFjAHjj4iNLrffRfyjMC8m3t4jf5gfnOA3cKxxlgcEZdu5lcTv00JjJG9CGU";
export default function App() {
  const isLoadingComplete = useCachedResources();
  
  if (!isLoadingComplete) {
    return null;
    //return <LoadingScreen />;
  } else {
    return (
      <StripeProvider publishableKey={publishableKey}>
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <SafeAreaProvider>
          <StatusBar 
            style="light"
            backgroundColor="#000" />
          <Navigation colorScheme="dark" />
        </SafeAreaProvider>
      </View>
      </StripeProvider>
    );
  }
}

