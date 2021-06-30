import React from 'react';
import {View} from 'react-native';
import {Button} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import { average, totalCourse } from '../actions/actions-types';

import ListItem from "../components/ListItem";

const StudentScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {students} = useSelector((state) => state.school);

    return (
        <View>
            <View style={{margin: 12}}>
                <Button  mode="contained" onPress={() => navigation.navigate('Student')}>
                    reset abscence
                </Button>
                <Button onClick style={{marginTop: 5}} mode="contained" onPress={() => navigation.navigate('Student')}>
                    Order note
                </Button>
            </View>
            {
                students && students.map((student, k) => {
                 return <ListItem key={k} navigation={navigation} average={average} totalCourse={totalCourse} student={student}/>
                })
            }
        </View>
    );
}

export default StudentScreen;
