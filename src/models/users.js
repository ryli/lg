import { parse } from 'qs'
import { query, create, del, update } from '../services/users'

export default {
  namespace: 'users',

  state: {
    list: [],
    total: null,
    loading: false,
    current: 1,
    currentItem: {},
    pageSize: 10,
    modalVisible: false,
    modalType: 'create',
    keyword: '',
    field: 'name',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {
    * query({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const { data } = yield call(query, parse(payload))
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            ...payload,
            list: data.data,
            total: data.page.total,
            current: data.page.current,
          },
        })
      }
    },
    * create({ payload }, { call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
      const { data } = yield call(create, payload)
      if (data && data.success) {
        yield put({
          type: 'createSuccess',
          payload: data.data[0],
        })
      }
    },
    * del({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const { data } = yield call(del, { id: payload })
      if (data && data.success) {
        yield put({
          type: 'delSuccess',
          payload,
        })
      }
    },
    * update({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
      const id = yield select(({ users }) => users.currentItem.id)
      const newUser = { ...payload, id }
      const { data } = yield call(update, newUser)
      if (data && data.success) {
        yield put({
          type: 'updateSuccess',
          payload: newUser,
        })
      }
    },
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true }
    },
    showModal(state, action) {
      return { ...state, ...action.payload, modalVisible: true }
    },
    hideModal(state) {
      return { ...state, modalVisible: false }
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false }
    },
    createSuccess(state, action) {
      const newUser = action.payload
      return { ...state, list: [newUser, ...state.list], loading: false }
    },
    delSuccess(state, action) {
      const id = action.payload
      const newList = state.list.filter(user => user.id !== id)
      return { ...state, list: newList, loading: false }
    },
    updateSuccess(state, action) {
      const updateUser = action.payload
      const newList = state.list.map((user) => {
        return user.id === updateUser.id ? { ...user, ...updateUser } : user
      })
      return { ...state, list: newList, loading: false }
    },
  },
}
