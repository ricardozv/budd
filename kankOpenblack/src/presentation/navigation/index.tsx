import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import HomeEvents from '../screens/HomeEvents';
import EstablishmentDetails from '../screens/EstablishmentDetails';
import EventDetails from '../screens/EventDetails';
import Profile from '../screens/Profile';
import Map from '../screens/Map';
import ComprasScreen from '../screens/ComprasScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RetiradaScreen from '../screens/RetiradaScreen';
import Carousel from '../screens/Carousel/Carousel';

function TabBarIcon({ name, color } : { name: string; color: string}) {
  return <Fontisto name={name} size={25} color={color} />;
         
}
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Carousel" component={Carousel} options={{ headerShown: false }} />
    <Stack.Screen name="Root" component={Carousel} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="EstablishmentDetails" component={EstablishmentDetails} 
        options={{ title: 'Bar', headerTitleStyle: { color: '#32CD32' }, headerTintColor: '#32CD32'}}/>
    <Stack.Screen name="EventDetails" component={EventDetails} 
        options={{ title: 'Evento', headerTitleStyle: { color: '#32CD32'}, headerTintColor: '#32CD32' }}/>
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    <Stack.Group screenOptions={{ presentation: 'modal'}}>
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
  )}

const Tab = createMaterialTopTabNavigator();
function TopTabNavigator() {
  return (
    <Tab.Navigator
    style={{ paddingTop: 30 }}
    screenOptions={{
      tabBarActiveTintColor: '#54FF54',
      tabBarIndicatorStyle: {
        backgroundColor: '#54FF54',
        height: 3,
      },
      tabBarLabelStyle: {
        fontSize: 13,
      },
      tabBarStyle: { backgroundColor: '#000' },
    }}
  >
    <Tab.Screen name="Bares" component={Home} />
    <Tab.Screen name="Eventos" component={HomeEvents} />
  </Tab.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor:'#54FF54', tabBarInactiveTintColor: '#006400'}}>
      <BottomTab.Screen name="Home" component={TopTabNavigator}
          options={ ({ navigation }: RootTabScreenProps<'Home'>) => ({
              title: 'barbuddy', headerShown: false, tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Modal')} style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}>
                </Pressable>
          )})}/>
      <BottomTab.Screen name="Mapa" component={Map} options={{
          title: 'Mapa', headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}/>
      <BottomTab.Screen name="Retirar" component={RetiradaScreen}
        options={{ title: 'Retirar', headerShown: false,
          tabBarIcon: ({ color}) => (
            <View style={{ backgroundColor: '#1c1c1c',borderRadius: 35, padding: 18, elevation: 5, height: 60, top:-18 }}>
              <TabBarIcon name="qrcode" color={color}/>
            </View>
          ),
        }}/>
      <BottomTab.Screen
        name="Compras" component={ComprasScreen} options={{
          title: 'Compras',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-basket-add" color={color} />,}}/>
      <BottomTab.Screen name="Perfil" component={Profile}
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user-secret" color={color} />,}}/>
    </BottomTab.Navigator>
  );
}





