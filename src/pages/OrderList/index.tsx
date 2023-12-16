import React, { useState } from 'react';
import { Card, Button, Form, Input, Table, Divider } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './index.less'

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

/*  TODO:
    样式隔离的问题，当前写的样式会覆盖。。。且相互影响。
    难道要写css-in-js来写吗。如何使用less来进行样式隔离。
*/
const OrderList: React.FC = () => {
    const [form] = Form.useForm();
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        { title: 'Column 6', dataIndex: 'address', key: '6' },
        { title: 'Column 7', dataIndex: 'address', key: '7' },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 120,
            render: () => <>
                <a>发起订单</a>
                <Divider type='vertical' />
                <a>修改订单</a>
                <Divider type='vertical' />
                <a>删除</a>
            </>,
        },
    ];
    const data: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `我是暴富人我是有钱人我是有钱有钱有钱人超级无敌有钱有钱有钱 ${i}`,
        });
    }
    return (
        <Card className='orderListCls'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form
                    layout="inline"
                    form={form}
                    initialValues={{ layout: "inline" }}
                >
                    <Form.Item label="姓名">
                        <Input placeholder="请输入" />
                    </Form.Item>
                    <Form.Item label="爱好">
                        <Input placeholder="请输入" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">查询</Button>
                    </Form.Item>
                </Form>
                <div>
                    <Button>导入</Button>
                    <Button style={{ marginLeft: '20px' }} type='primary'>下载</Button>
                </div>
            </div>
            <div style={{ marginTop: '30px' }} />
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </Card>
    );
}

export default OrderList;
