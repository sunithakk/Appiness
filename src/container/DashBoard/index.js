import React from "react";
import PropTypes from "prop-types";
import { PageHeader, Button, Table } from "antd";
import axios from "axios";
import server from "../../utility/server";
import "./index.css";

const columns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Age",
        dataIndex: "age"
    },
    {
        title: "Gender",
        dataIndex: "gender"
    },
    {
        title: "Email",
        dataIndex: "email"
    },
    {
        title: "PhoneNo",
        dataIndex: "phoneNo"
    }
];

class Dashboard extends React.Component {
    state = {
        employeeData: ""
    };
    componentDidMount() {
        axios
            .get("/users")
            .then(res => {
                console.log(res.data, "good....");
                if (res.data.response.status === "success") {
                    this.setState({
                        employeeData: res.data.response.user
                    });
                }
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status === 404) {
                    alert("Something went wrong...");
                }
            });
    }
    handleLogout = () => {
        localStorage.removeItem("myData");
        window.location.reload();
    };
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header-responsive"
                    title="Dashboard"
                    subTitle="This  page is to Display Employee List"
                    extra={[
                        <Button
                            key="1"
                            type="primary"
                            onClick={this.handleLogout}
                        >
                            LogOut
                        </Button>
                    ]}
                ></PageHeader>

                <div className="ant-my-table">
                    <h4>Employee List Table</h4>
                    {this.state.employeeData && (
                        <Table
                            columns={columns}
                            dataSource={this.state.employeeData}
                            size="small"
                        />
                    )}
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Dashboard;
