import React from 'react';
import Main from './components/main';
import AuthorsSupervision from './components/authors_supervision';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='main'
                component={Main}
                options={{title:'Главная'}}
            />
            <Stack.Screen 
                name='authors_supervision'
                component={AuthorsSupervision}
                options={{title:'Авторский надзор'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}