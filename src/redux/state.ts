import {v1} from 'uuid';
import {StateType} from '../App';

let rerenderEntireThree = (state: StateType) => {}

const state = {
    dialogs: {
        dialogs: [
            {id: v1(), name: 'Anna'},
            {id: v1(), name: 'Ivan'},
            {id: v1(), name: 'Artem'},
            {id: v1(), name: 'Alexey'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Oleg'},
        ],
        messages: [
            {id: v1(), message: 'Hello! How are you?'},
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
        ],
        newMessageText: ''
    },
    profile: {
        posts: [
            {id: v1(), message: 'Hello!!!', likes: 15},
            {id: v1(), message: 'Hello! How, are you?', likes: 20},
            {id: v1(), message: 'GO, GO, GO!!!', likes: 10},
            {id: v1(), message: 'Be happy!', likes: 5},
        ],
        newPostText: ''
    },

}
export default state;

export const updateText = (id: string, value: string) => {
    if (id === 'post') {
        state.profile.newPostText = value
    } else if (id === 'dialogs') {
        state.dialogs.newMessageText = value
    }
    rerenderEntireThree(state);
}

export const addPost = (value: string) => {
    const newPost = {id: v1(), message: value, likes: 0};
    state.profile.posts.push(newPost);
    state.profile.newPostText = ''
    rerenderEntireThree(state);
}

export const addMessage = (value: string) => {
    const newMessage = {id: v1(), message: value};
    state.dialogs.messages.push(newMessage);
    state.dialogs.newMessageText = ''
    rerenderEntireThree(state);
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireThree = observer
}