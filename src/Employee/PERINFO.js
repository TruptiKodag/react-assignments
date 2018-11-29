import React from 'react';
import EmpDel from './Employee/PERDETAIL';
export default class EmpInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "trupti", age: 20 },
                { name: "rahul", age: 30 },
                { name: "rk", age: 40 }
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map((user) => {
                            return (<EmpDel age={user.age}>{user.name}</EmpDel>);
                        })
                    }
                </ul>
            </div>
        );
    }
}
