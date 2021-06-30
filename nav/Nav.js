import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import StudentScreen from "../screen/StudentScreen";
import LessonScreen from '../screen/LessonScreen';
import AbscenseScreen from '../screen/AbscenseScreen';

const Nav = () => {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Student" component={StudentScreen}/>
              <Stack.Screen name="Lesson" component={LessonScreen}/>
              <Stack.Screen name="Abscence" component={AbscenseScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    );

}
export default Nav;
