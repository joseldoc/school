import {
    GET_STUDENTS,
    ORDER_NOTE,
    INCREMENT_ABSCENCE,
    GET_LESSONS,
    RESET_ABSCENCE,
    DECREMENT_ABSCENCE,
    GET_STUDENT
} from '../constants/actions';

export const getStudents = () => {
    return {
        type: GET_STUDENTS
    }
}

export const getLessons = () => {
    return {
        type: GET_LESSONS
    }
}

export const orderNote = payload => {
    return {
        type: ORDER_NOTE, action: payload
    }
}

export const incrementAbscence = payload => {
    return {
        type: INCREMENT_ABSCENCE, payload
    }
}
export const decrementAbscence = payload => {
    return {
        type: DECREMENT_ABSCENCE, payload
    }
}
export const resetAbscence = payload => {
    return {
        type: RESET_ABSCENCE, payload
    }
}

export const getStudent = payload => {
    return {
        type: GET_STUDENT, payload
    }
}

export const average = (notes) => {
    if (notes.length === 0) return null;
    let total = notes.reduce((a, c) => a + c);
    return Math.floor( (total / notes.length) * 100) / 100;
}

export const totalCourse = lessons => {
    if(!Array.isArray(lessons) || lessons.length === 0) return null;
    return lessons.length;
}
