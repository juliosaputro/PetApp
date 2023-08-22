import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//screen
import OwnerList from '../screen/OwnerList';
import OwnerDetail from '../screen/OwnerDetail';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OwnerList"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#F8F8FF',
          },
        }}>
        <Stack.Screen name="OwnerList" component={OwnerList} />
        <Stack.Screen name="OwnerDetail" component={OwnerDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
