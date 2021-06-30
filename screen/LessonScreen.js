import React from 'react';
import {View, FlatList} from 'react-native';
import { Text, Card, Avatar, IconButton, Divider} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";

const LessonScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {lessons} = useSelector((state) => state.school);

    return (
        <View style={{margin:12}}>
            { lessons && lessons.map((l, i) => {
                return <Card.Title style={{backgroundColor: "white", marginBottom: 5}} key={i}
                            title={l.title} />
                })
            }
        </View>
    );
}

export default LessonScreen;
