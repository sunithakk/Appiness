import axios from "axios";
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)

mock.onPost("/login", {
    username: "hruday@gmail.com",
    password: "hruday123"
}).reply(200, {
    response: {
        Code: 200,
        status: "success",
        message: "login successful",
        error: {},
        data: {
            name: "username",
            user_id: 1,
            email: "admin@creatise.in",
            access_token:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODEwNTIyMTUsIm5iZiI6MTU4MTA1MjIxNSwianRpIjoiMzcyYWFhNzAtNjdhOS00MmM3LWI4ZDUtMTE0ZmZiN2IyYTk2IiwiZXhwIjoxNTgxMDUzMTE1LCJpZGVudGl0eSI6MSwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.4fu-jYoONZsF-T5jLMfWzIOpdrkMoYuoeOlcsQEp1yY",
            Refresh_token:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODEwNTIyMTUsIm5iZiI6MTU4MTA1MjIxNSwianRpIjoiNTU3NzdjMTItMmI4Ny00ZDNjLTlhYTctOTc5MjM0ZmRiZWJmIiwiZXhwIjoxNTgzNjQ0MjE1LCJpZGVudGl0eSI6MSwidHlwZSI6InJlZnJlc2gifQ.1ori6n12Dp8_xlPKBfs1ketfctaWdXToXJGSZjYxgec"
        }
    }
});

mock.onGet("/users").reply(200, {
    response: {
        code: 200,
        status: "success",
        message: "User List Retrived successfully",
        Error: {},
        user: [
            {
                id: 1,
                name: "test1",
                age: "11",
                gender: "male",
                email: "test1@gmail.com",
                phoneNo: "9415346313"
            },
            {
                id: 2,
                name: "test2",
                age: "12",
                gender: "male",
                email: "test2@gmail.com",
                phoneNo: "9415346314"
            },
            {
                id: 3,
                name: "test3",
                age: "13",
                gender: "male",
                email: "test3@gmail.com",
                phoneNo: "9415346315"
            },
            {
                id: 4,
                name: "test4",
                age: "14",
                gender: "male",
                email: "test4@gmail.com",
                phoneNo: "9415346316"
            },
            {
                id: 5,
                name: "test5",
                age: "15",
                gender: "male",
                email: "test5@gmail.com",
                phoneNo: "9415346317"
            },
            {
                id: 6,
                name: "test6",
                age: "16",
                gender: "male",
                email: "test6@gmail.com",
                phoneNo: "9415346318"
            }
        ]
    }
});
