import React from 'react';
import {View} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";

const LessonScreen = ({navigation}) => {
    const {lessons} = useSelector((state) => state.school);

    return (
        <View style={{margin:12}}>
            <Button style={{marginBottom: 10}} mode="contained" onPress={() => navigation.navigate('Home')}>
                Home
            </Button>
            { lessons && lessons.map((l, i) => {
                return <Card.Title style={{backgroundColor: "white", marginBottom: 5}} key={i}
                            title={l.title} />
                })
            }
        </View>
    );
}

export default LessonScreen;
