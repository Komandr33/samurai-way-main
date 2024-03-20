import {v1} from "uuid";

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
    },
    profile: {
        posts: [
            {id: v1(), message: 'Hello!!!', likes: 15},
            {id: v1(), message: 'Hello! How, are you?', likes: 20},
            {id: v1(), message: 'GO, GO, GO!!!', likes: 10},
            {id: v1(), message: 'Be happy!', likes: 5},
        ]
    }
}
export default state;

export const addPost = (value) => {
    const newPost = {id: v1(), message: value, likes: 0}
    state.profile.posts.push(newPost)
    console.log(state.profile.posts)
}

export const addMessage = (value) => {
    const newMessage = {id: v1(), message: value}
    state.dialogs.messages.push(newMessage)
    console.log(state.dialogs.messages)
}