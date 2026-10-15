import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Informativa from './src/componentes/informativa';
import Capturados from './src/componentes/capturados';
import Favoritos from './src/componentes/favoritos';
import Lista from './src/componentes/lista';
import Usuario from './src/componentes/usuario';
import Pokemon from './src/componentes/pokemon';
import Menu from './src/componentes/menu';
import { AppProvider } from './src/context/AppContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const conMenu = { headerRight: () => <Menu /> };

function ListaStack() {
  return (
    <Stack.Navigator screenOptions={conMenu}>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function FavoritosStack() {
  return (
    <Stack.Navigator screenOptions={conMenu}>
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

function CapturadosStack() {
  return (
    <Stack.Navigator screenOptions={conMenu}>
      <Stack.Screen name="Capturados" component={Capturados} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Lista" component={ListaStack} />
          <Tab.Screen
            name="Informativa"
            component={Informativa}
            options={{ headerShown: true, headerRight: () => <Menu /> }}
          />
          <Tab.Screen name="Capturados" component={CapturadosStack} />
          <Tab.Screen name="Favoritos" component={FavoritosStack} />
          <Tab.Screen
            name="Usuario"
            component={Usuario}
            options={{ headerShown: true, headerRight: () => <Menu /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}