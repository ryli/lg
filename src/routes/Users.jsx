import React, { PropTypes } from 'react'

import { routerRedux } from 'dva/router'
import { connect } from 'dva'

import UserList from '../components/Users/UserList'
import UserSearch from '../components/Users/UserSearch'
import UserModal from '../components/Users/UserModal'

import styles from './Users.less'

function Users({ location, dispatch, users }) {
  const {
    loading,
    list,
    total,
    pageSize,
    current,
    currentItem,
    modalVisible,
    modalType,
    keyword,
    field,
    } = users

  const userSearchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      dispatch({
        type: 'users/query',
        payload: fieldsValue,
      })
    },
    onAdd() {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  const userListProps = {
    dataSource: list,
    total,
    current,
    loading,
    pageSize,
    onPageChange(page) {
      // dispatch(routerRedux.push({
      //   pathname: '/users',
      //   query: { page, field, keyword },
      // }))
      dispatch({
        type: 'users/query',
        payload: { page, pageSize, field, keyword },
      })
    },
    onShowSizeChange(current, pageSize) {
      dispatch({
        type: 'users/query',
        payload: { page: current, pageSize, field, keyword },
      })
    },
    onDeleteItem(id) {
      dispatch({
        type: 'users/del',
        payload: id,
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
  }

  const userModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: `users/${modalType}`,
        payload: data,
      })
    },
    onCancel() {
      dispatch({
        type: 'users/hideModal',
      })
    },
  }

  const UserModalGen = () => <UserModal {...userModalProps} />

  return (
    <div className="styles.normal">
      <UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModalGen />
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps)(Users)
