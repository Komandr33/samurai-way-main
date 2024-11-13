import {addPost} from './profile-reducer';

// export type ActionType =
//   ReturnType<typeof addPostAC>
//   | ReturnType<typeof addMessageAC>
//   | ReturnType<typeof updateTextAC>

// export type StoreType = {
//     _state: StateType,
//     _onChange: () => void,
//     subscribe: (observer: () => void) => void,
//     getState: () => StateType,
//     dispatch: (action: ActionType) => void
//     // updateText: (id: string, value: string) => void,
//     // addPost: (value: string) => void,
//     // addMessage: (value: string) => void,
// };

// export const store: StoreType = {
//     _state: {
//         dialogs: {
//             dialogs: [
//                 {id: v1(), name: 'Anna'},
//                 {id: v1(), name: 'Ivan'},
//                 {id: v1(), name: 'Artem'},
//                 {id: v1(), name: 'Alexey'},
//                 {id: v1(), name: 'Andrey'},
//                 {id: v1(), name: 'Oleg'},
//             ],
//             messages: [
//                 {id: v1(), message: 'Hello! How are you?'},
//                 {id: v1(), message: 'Hello'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'Yo'},
//                 {id: v1(), message: 'Yo'},
//             ],
//             newMessageText: ''
//         },
//         profile: {
//             posts: [
//                 {id: v1(), message: 'Hello!!!', likes: 15},
//                 {id: v1(), message: 'Hello! How, are you?', likes: 20},
//                 {id: v1(), message: 'GO, GO, GO!!!', likes: 10},
//                 {id: v1(), message: 'Be happy!', likes: 5},
//             ],
//             newPostText: ''
//         },
//
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//
//     subscribe(observer) {
//         this._onChange = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     // updateText(id: string, value: string) {
//     //     if (id === 'post') {
//     //         this._state.profile.newPostText = value
//     //     } else if (id === 'dialogs') {
//     //         this._state.dialogs.newMessageText = value
//     //     }
//     //     this._onChange();
//     // },
//     // addPost(value: string) {
//     //     const newPost = {id: v1(), message: value, likes: 0};
//     //     this._state.profile.posts.push(newPost);
//     //     this._state.profile.newPostText = ''
//     //     this._onChange();
//     // },
//     // addMessage(value: string) {
//     //     const newMessage = {id: v1(), message: value};
//     //     this._state.dialogs.messages.push(newMessage);
//     //     this._state.dialogs.newMessageText = ''
//     //     this._onChange();
//     // },
//     // dispatch(action: ActionType) {
//     //     if (action.type === 'UPDATE-TEXT') {
//     //         if (action.id === 'post') {
//     //             this._state.profile.newPostText = action.value
//     //         } else if (action.id === 'dialogs') {
//     //             this._state.dialogs.newMessageText = action.value
//     //         }
//     //         this._onChange();
//     //     } else if (action.type === 'ADD-POST') {
//     //         const newPost = {id: v1(), message: this._state.profile.newPostText, likes: 0};
//     //         this._state.profile.posts.push(newPost);
//     //         this._state.profile.newPostText = ''
//     //         this._onChange();
//     //     } else if (action.type === 'ADD-MESSAGE') {
//     //         const newMessage = {id: v1(), message: action.value};
//     //         this._state.dialogs.messages.push(newMessage);
//     //         this._state.dialogs.newMessageText = ''
//     //         this._onChange();
//     //     }
//     // }
//     dispatch(action: ActionType) {
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//         this._state.profile= profileReducer(this._state.profile, action)
//         // this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//         this._onChange()
//         }
//     };







