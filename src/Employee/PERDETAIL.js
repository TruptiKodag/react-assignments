import React from 'react';
export default class EmpDel extends React.Component {
    render() {
        const user = (props) => {
            return (<li>
                <span>name:{props.children},age:{props.age}</span>
            </li>)

        }
    }
} 