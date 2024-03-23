import {v1} from 'uuid';
import {StateType} from '../App';

// let rerenderThree = () => {
//     console.log('hello')
// }
// export const subscribe = (observer: () => void) => {
//     rerenderThree = observer
// }

export type StoreType = {
    _state: StateType,
    updateText: (id: string, value: string) => void,
    addPost: (value: string) => void,
    addMessage: (value: string) => void,
    _rerenderThree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => StateType
}

export const store: StoreType = {
    _state: {
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

    },
    updateText(id: string, value: string) {
        if (id === 'post') {
            this._state.profile.newPostText = value
        } else if (id === 'dialogs') {
            this._state.dialogs.newMessageText = value
        }
        this._rerenderThree();
    },
    addPost(value: string) {
        const newPost = {id: v1(), message: value, likes: 0};
        this._state.profile.posts.push(newPost);
        this._state.profile.newPostText = ''
        this._rerenderThree();
    },
    addMessage(value: string) {
        const newMessage = {id: v1(), message: value};
        this._state.dialogs.messages.push(newMessage);
        this._state.dialogs.newMessageText = ''
        this._rerenderThree();
    },
    _rerenderThree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderThree = observer
    },
    getState() {
        return this._state
    }
}
export default store;

// export const updateText = (id: string, value: string) => {
//     if (id === 'post') {
//         state.profile.newPostText = value
//     } else if (id === 'dialogs') {
//         state.dialogs.newMessageText = value
//     }
//     rerenderThree();
// }

// export const addPost = (value: string) => {
//     const newPost = {id: v1(), message: value, likes: 0};
//     state.profile.posts.push(newPost);
//     state.profile.newPostText = ''
//     rerenderThree();
// }

// export const addMessage = (value: string) => {
//     const newMessage = {id: v1(), message: value};
//     state.dialogs.messages.push(newMessage);
//     state.dialogs.newMessageText = ''
//     rerenderThree();
// }

