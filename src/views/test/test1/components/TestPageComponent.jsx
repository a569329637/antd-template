import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'antd';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import IndexLayout from '../../../../layouts/IndexLayout.jsx';
import { addData, delData, clearData } from '../reducers/dataList.jsx';

class TestPage extends Component {
  static propTypes = {
    dataList: ImmutablePropTypes.list.isRequired,
    addData: PropTypes.func.isRequired,
    delData: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
  };

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, data) => (
        <Button onClick={() => this.props.delData(data.id)}>删除</Button>
      ),
    }];

    const dataSource = this.props.dataList.toJS().map(data => ({
      id: data.id,
      name: data.name,
      age: data.age,
      address: data.address,
      key: data.id,
    }));

    return(
      <IndexLayout>
        <Button type="primary" onClick={this.props.addData}>添加数据</Button>
        <Button type="primary" onClick={this.props.clearData}>清空数据</Button>
        <Table columns={columns} dataSource={dataSource} />
      </IndexLayout>
    )
  }
}

function mapStateToProps(state) {
  return { dataList: state.dataList }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addData, delData, clearData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
