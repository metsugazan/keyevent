import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

const oneName = "Ecran 1";
const twoName = "Ecran 2";
const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Ecran 1" screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#222222', paddingBottom: 5 },
                tabBarLabelStyle: {
                  fontSize: 10,
                  fontWeight: 'bold',
                },
                tabBarActiveTintColor: '#9F8236',
                tabBarInactiveTintColor: '#adabab',
                headerTitleAlign: 'center',
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;
        
                  if (rn === oneName) {
                    iconName = Platform.OS === 'ios' ? `cloud${focused ? '' : 'cloud'}` : 'cloud';
                  } else if (rn === twoName) {
                    iconName = Platform.OS === 'ios' ? `cloud${focused ? '' : 'cloud'}` : 'cloud';
                  } 
        
                  return <Icon name={iconName} size={size} color={focused ? '#9F8236' : '#adabab'} style={{ marginTop: 5 }} />
        
        
                }
    })}>
                <Tab.Screen name="Ecran 1" options={{headerShown: false}} component={ScreenOne} />
                <Tab.Screen name="Ecran 2" options={{headerShown: false}} component={ScreenTwo} />
            </Tab.Navigator>
            </NavigationContainer>
    )
}

export default TabNavigation