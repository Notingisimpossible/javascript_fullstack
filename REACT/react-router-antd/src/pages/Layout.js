import React from 'react'
import {Table, Tag, Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge} from 'antd'
import{ Rout, Link, Route } from 'react-router-dom'
import {UserOutlined, SmileOutlined} from '@ant-design/icons'
import Search from 'antd/lib/input/Search'

function DropMenu() {
  return(
    <Menu>
      <Menu.Item key="0">
        <a href="#">修改密码</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">退出登录</a>
      </Menu.Item>
    </Menu>
  )
}

function Table1() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>Invite {record.name}</a>
          <a>Delete</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div>
      <h3>Table</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

const {Header, Sider, Content, Footer} = Layout
class PageLayout extends React.Component {
  // constructor (props) {

  // }

  render () {
    return (
      <Layout>
        <Header style={{color:'#fff', textAlign:'center', fontWeight: 'bold'}}>
          <Row>
            <Col span={10}>React + antd 实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的" />
            </Col>
            <Col span={6}>
              <Avatar style={{backgroundColor:'#666',marginRight:20}} icon={<UserOutlined/>}></Avatar>
              <Dropdown overlay={DropMenu}>
                <a href="">Hi, 敏哥</a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout style={{position:'relative'}}>
          <Sider>
            <Menu defaultOpenKeys={['sub1']} defaultSelectedKeys={['sub1-1']} mode='inline' style={{width:256, height: '90vh', overflow:'auto', minWidth:256}}>
              <Menu.SubMenu key="sub1" title={<span><SmileOutlined></SmileOutlined>部分UI组件实践</span>}>
                <Menu.Item key="sub1-1"><Link to={{pathname:'/table', search:'?id=1'} }>展示表格</Link></Menu.Item>
                <Menu.Item key="sub1-2">显示标签</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu mode='inline' key="sub2" title={<span><SmileOutlined></SmileOutlined>部分UI组件实践2</span>}>
                <Menu.Item key="sub2-1">展示表格2</Menu.Item>
                <Menu.Item key="sub2-2">显示标签2</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content style={{marginLeft:'5%'}}>
            {/* 实现表格展示，当点击菜单，表格展示时候 路由：http://localhost:3000/table
            在右边展示yable组件里面一个表格 */}
            <Route path="/table" component={Table1}></Route>
          </Content >

          <Footer style={{ position:'absolute',right:0, bottom: 0, left:256, textAlign:'center'}}>
            Footer
          </Footer>
        </Layout>
      </Layout>
    )
  }
}


export default PageLayout