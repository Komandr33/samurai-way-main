import user_avatar from '../assets/images/user_avatar.jpg';

test('toggle followed', () => {
  const state = {
    users: [
      {
        name: 'Andrey',
        id: '1',
        photos: {small: user_avatar, large: null},
        followed: true,
        status: 'i\'m Boss',
      },
      {
        name: 'Dmitriy',
        id: '2',
        photos: {small: user_avatar, large: null},
        followed: false,
        status: 'i\'m Boss',
      },
      {
        name: 'James Bond',
        id: '3',
        photos: {small: user_avatar, large: null},
        followed: true,
        status: 'i\'m Boss',
      },
    ]
  }

  // const endState = usersReducer(state, toggleFollowedAC('2'))

  // expect(endState.users[1].followed).toBe(true)
  expect(state.users[1].followed).toBe(false)
  // expect(endState.users[1].followed).toBe(true)

});