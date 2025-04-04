import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Fragment } from 'react';



let urlApi = 'http://localhost:3000'
const onFinish =async (values) => {
  console.log('Success:', values);
await axios.post(`${urlApi}/adduser,values`)
  console.log('user added');
  

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Home = () => {

    const [user,setUsers] = useState([])
    let allUsers=async()=>{
      let values = await axios.get(`${urlApi}/users`)
      console.log(values.data);
      setUsers(values.data)
      
    }
    useEffect(()=>{
    allUsers()
    },[])

    return(
        <Fragment>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  {user.map((v) =>(<div>{v.email}</div>))}
  </Fragment>  
)};


export default Home;