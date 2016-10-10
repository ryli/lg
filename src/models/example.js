
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * fetchRemote({ payload }, { call, put }) {
      yield 1
    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload }
    },
  },

}
