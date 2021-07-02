import { Card, Paragraph} from 'react-native-paper';
import React from "react";

const Student = ({student, navigation, average, totalCourse}) => {
    return (
        <>
            <Card style={{backgroundColor: "white", marginBottom: 5}}  onPress={() => navigation.navigate('Abscence', student)}>
                <Card.Title title={student.name} />
                <Card.Content>
                    <Paragraph>{"Nombre d'abscence " + student.attendance}</Paragraph>
                    <Paragraph>{"Nombre de cours : " + totalCourse(student.lessons)}</Paragraph>
                    <Paragraph>{"Moyenne " + average}</Paragraph>
                </Card.Content>
            </Card>
        </>
    )
};

export default Student;
