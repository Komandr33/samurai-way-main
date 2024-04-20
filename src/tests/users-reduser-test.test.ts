import {toggleFollowedAC, usersReducer} from '../redux/users-reducer';
import user_avatar from '../img/user_avatar.jpg';

test('toggle followed', () => {
  const state = {
    users: [
      {
        id: '1',
        avatar: user_avatar,
        followed: true,
        userName: 'Andrey',
        status: 'i\'m Boss',
        location: {city: 'Krasnodar', country: 'Russia'}
      },
      {
        id: '2',
        avatar: user_avatar,
        followed: false,
        userName: 'Dmitriy',
        status: 'i\'m Boss',
        location: {city: 'Baku', country: 'Georgia'}
      },
      {
        id: '3',
        avatar: user_avatar,
        followed: true,
        userName: 'James Bond',
        status: 'i\'m Boss',
        location: {city: 'London', country: 'Britany'}
      },
    ]
  }

  const endState = usersReducer(state, toggleFollowedAC('2'))

  expect(endState.users[1].followed).toBe(true)
  expect(state.users[1].followed).toBe(false)
  // expect(endState.users[1].followed).toBe(true)

});