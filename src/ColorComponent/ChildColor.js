import React from 'react';
import { connect } from 'react-redux';
class ChildColor extends React.Component {
    render() {
        return (
            <h1 style={{ color: this.props.color }}>ColorCombination</h1>

        )
    }

}

const mapStateToProps = (store) => {
    return {
        color: store.colorReducer.color,
    }
};

export default connect(mapStateToProps)(ChildColor);
