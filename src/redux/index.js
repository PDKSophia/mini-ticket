/**
 * @Author: PDK
 * @Date:   2019-02-25
 * @Last modified by:   PDK
 * @Last modified time:  2019-02-25
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import global from './global'
import plane from './plane'

const rootReducer = combineReducers({
  global,
  plane
})

const logger = createLogger()
const middlewares = [thunk]

// 非线上环境打印redux日志信息
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}
