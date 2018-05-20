import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { Registration } from '../containers/Registration';

class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        
    }
    render() {        
        return (
            <div >
                <div >
                    <div >
                        <Router history={history}>
                            <div>
                                <Route path="/register" component={Registration} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
  alert:state.alert,
});

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 