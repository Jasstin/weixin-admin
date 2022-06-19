import React, {useRef, useState} from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import {Space, Table, Button} from "antd";

const {Column} = Table;

interface RecordType {
  id: number,
  name: string,
  feature: string
  hasChildren: boolean,
  parentId: number
}

const List: React.FC = () => {
  const dataSource = [
    {
      id: '1',
      name: '我要订餐',
      feature: '打开网页',
      hasChildren: false,
      parentId: 0
    },
    {
      id: '2',
      name: '我的订单',
      feature: '打开网页',
      hasChildren: false,
      parentId: 0
    },
    {
      id: '3',
      name: '更多',
      feature: '打开二级菜单',
      hasChildren: true,
      parentId: 0
    },
    {
      id: '4',
      name: '用户中心',
      feature: '打开网页',
      hasChildren: false,
      parentId: 3
    },
    {
      id: '5',
      name: '联系我们',
      feature: '打开网页',
      hasChildren: false,
      parentId: 3
    },
    {
      id: '6',
      name: '订餐指引',
      feature: '打开网页',
      hasChildren: false,
      parentId: 3
    },
    {
      id: '7',
      name: '如何取餐',
      feature: '打开网页',
      hasChildren: false,
      parentId: 3
    },
    {
      id: '8',
      name: '了解悠饭',
      feature: '打开网页',
      hasChildren: false,
      parentId: 3
    },
  ];
  return <PageContainer>
    <div>
      <Button>新增</Button>
      <Button>组合(预览/发布)</Button>
    </div>
    <Table dataSource={dataSource}>
      <Column title="id" dataIndex="id" key="id" />
      <Column title="菜单名称" dataIndex="name" key="name" />
      <Column title="菜单功能" dataIndex="feature" key="feature" />
      <Column title="操作" dataIndex="action" key="action" render={(_: any, record: RecordType) => <Space size="middle">
        <a>编辑</a>
        <a>禁用</a>
        <a>删除</a>
      </Space>} />
    </Table>;
  </PageContainer>
}
export default List
