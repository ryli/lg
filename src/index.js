import dva, { connect } from 'dva'
import { browserHistory } from 'dva/router'
import './index.html'
import './index.less'

// 1. Initialize
const app = dva({
  history: browserHistory,

  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },

  onError(e) {
    throw Error(`ELEVEN Error:${e.message}`)
  },
})

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require('./models/products'))
app.model(require('./models/users'))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
