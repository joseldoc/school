import React from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{margin:12}}>
            <Button mode="contained" onPress={() => navigation.navigate('Student')}>
                Students
            </Button>
            <Button style={{marginTop: 12}} mode="contained" onPress={() => navigation.navigate('Lesson')}>
                Lessons
            </Button>
        </View>
    );
}

export default HomeScreen;
