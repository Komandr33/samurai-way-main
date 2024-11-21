import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '388ea5a5-0820-4836-9791-d096339a5601'
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
    return instance.get(`profile/${userId}`).then(res => res.data)
  },
  getProfileStatus(userId: number) {
    return instance.get(`profile/status/${userId}`).then(res => res.data)
  },
  updateProfileStatus(status: string) {
    return instance.put(`profile/status`, {status: status}).then(res => res.data)
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