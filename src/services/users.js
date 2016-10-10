import qs from 'qs'
import request from '../utils/request'

export async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`)
}

export async function create(params) {
  return request('/api/users', {
    method: 'post',
    body: qs.stringify(params),
  })
}

export async function del(params) {
  return request('/api/users', {
    method: 'delete',
    body: qs.stringify(params),
  })
}

export async function update(params) {
  return request('/api/users', {
    method: 'put',
    body: qs.stringify(params),
  })
}
