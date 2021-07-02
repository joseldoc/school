import React, {useEffect} from 'react';
import {View} from "react-native";
import {Button, Title} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {decrementAbscence, incrementAbscence, getStudent} from "../actions/actions-types";

const AbscenseScreen = ({route, navigation}) => {
    const {id} = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudent(id))
    }, [id])

    const { student } = useSelector((state) => state.school);
    return (
        <View style={{margin:12, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button style={{marginBottom: 10}} mode="contained" onPress={() => navigation.navigate('Home')}>
                Home
            </Button>
            <Title>Abscence de : {student && student.name}</Title>
            <Title>Nombre d'abscence : {student && student.attendance}</Title>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
            <Button
                icon="plus"
                mode="contained"
                compact={true}
                onPress={() => dispatch(incrementAbscence(id))} >
                Incrémenter
            </Button>
                {student.attendance !== 0 && (<Button
                    icon="minus"
                    compact={true}
                    style={{marginTop: 5}} mode="contained" onPress={() => dispatch(decrementAbscence(id))} >
                Décrémenter
                </Button>)
                }
            </View>
        </View>
    );
}

export default AbscenseScreen;
