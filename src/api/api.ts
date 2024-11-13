import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '54674fe9-3989-480d-b07c-39c3a8b77a5a'
  }
})

export const authAPI = {
  getIsAuth() {
    return instance.get(`auth/me`).then(res => res.data)
  }
}

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
  }
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then(res=> res.data)
  }
}

export const followAPI = {
  addFollow(userId: number) {
    return instance.post(`follow/${userId}`).then(res=> res.data)
  },

  deleteFollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res=> res.data)
  }
}