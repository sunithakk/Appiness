import React, { useContext } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Icon } from "antd";
import { Typography } from "antd";
import axios from "axios";
import server from "../../../utility/server";
import UserContext from "../../../UserContext";
const { Title } = Typography;

function Login({ form, history }) {
    const { user, setUser } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);

                axios
                    .post("/login", {
                        username: values.email,
                        password: values.password
                    })
                    .then(response => {
                        if (response.data.response.status === "success") {
                            alert(response.data.response.message);
                            const data = response.data.response.data;
                            localStorage.setItem(
                                "myData",
                                JSON.stringify(data)
                            );
                            setUser(JSON.stringify(data));
                            history.push("/dashboard");
                        }
                    })
                    .catch(err => {
                        console.log(err.response);
                        if (err.response.status === 404) {
                            alert("Please enter correct useName and password");
                        }
                    });
            }
        });
    }

    const { getFieldDecorator } = form;
    return (
        <div className="form-div">
            <div className="my-container">
                <Form onSubmit={handleSubmit} className="login-form">
                    <Title level={3}>Login To Appiness </Title>
                    <Form.Item hasFeedback>
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your username!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Email"
                            />
                        )}
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your password!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className="forgot-password">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Login
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;
