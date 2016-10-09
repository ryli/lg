import request from '../utils/request'

export async function query() {
  return request('/api/users')
}

export async function query2() {
  return request('/api/users2')
}
