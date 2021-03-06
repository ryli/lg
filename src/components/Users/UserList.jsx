import React, { PropTypes } from 'react'

import { Table, Popconfirm, Pagination } from 'antd'

const UserList = ({
  total,
  current,
  pageSize,
  loading,
  dataSource,
  onPageChange,
  onShowSizeChange,
  onDeleteItem,
  onEditItem,
}) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="">{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => onEditItem(record)}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除？" onConfirm={() => onDeleteItem(record.id)}>
          <a >删除</a>
        </Popconfirm>
      </p>
    ),
  }]

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        showTotal={total => `共 ${total} 项`}
        current={current}
        pageSize={pageSize}
        onChange={onPageChange}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
      />
    </div>
  )
}

UserList.propTypes = {
  onPageChange: PropTypes.func,
  onShowSizeChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  total: PropTypes.any,
  pageSize: PropTypes.number,
  current: PropTypes.any,
}

export default UserList
