import React from 'react';
import {View, SafeAreaView, FlatList, ScrollView} from 'react-native';
import {Button, Text} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import { average, totalCourse, resetAbscence, orderNote } from '../actions/actions-types';
import {Styles} from '../Styles';

import Student from "../components/Student";

const StudentScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {students} = useSelector((state) => state.school);

    return (
        <SafeAreaView style={{flex:1}}>

            <View style={{margin: 12}}>
                <Button  mode="contained" onPress={() =>dispatch(resetAbscence())}>
                    reset abscence
                </Button>
                <Button onClick style={{marginTop: 5}} mode="contained" onPress={() => dispatch(orderNote())}>
                    Order note
                </Button>
            </View>
            <ScrollView>
                <FlatList
                    data={students}
                    renderItem={({ item, index }) => {
                        const {notes} = item;
                        return (
                            <Student style={{padding: 5}}
                                key={item.id + index}
                                {...item}
                                average={average(notes)}
                                student={item}
                                totalCourse={totalCourse}
                                navigation={navigation}
                            />
                        );
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default StudentScreen;
