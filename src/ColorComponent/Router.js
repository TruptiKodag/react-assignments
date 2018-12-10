import React from 'react';
import { connect } from 'react-redux';

class Router extends React.Component {
    render() {
        return (
            <div className="border">
                <button onClick={() => { this.props.handleColor('pink') }}>PINK</button>
                <button onClick={() => { this.props.handleColor('orange') }}> ORANGE</button >
            </div>
        )
    }
}


const dispatchToProps = (dispatch) => ({
    handleColor: (color) => { dispatch({ type: 'CHANGE_COLOR', payload: color }) }

});

export default connect(null, dispatchToProps)(Router);
