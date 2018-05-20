import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {register} from '../../actions/user.actions'

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{
            userName:'',
            password:'',
            confirmPassword:'',
        },
            submitted:false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        debugger;
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        debugger;
        if (user.userName && user.confirmPassword && user.password) {
            dispatch(register(user));
            
        }
    }

    render(){
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return(
            <div >
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div >
                        <label htmlFor="userName">First Name</label>
                        <input type="text" name="userName" value={user.userName} onChange={this.handleChange} />

                    </div>
                    <div >
                        <label  htmlFor="password">Password</label>
                        <input type="password" name="password" value={user.password} onChange={this.handleChange} />

                    </div>
                    <div >
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password"  name="confirmPassword" value={user.confirmPassword} onChange={this.handleChange} />

                    </div>
                    <div >
                        <button >Register</button>
                        <Link to="/login">Cancel</Link>
                    </div>
                </form>
            </div>        )
    }

}


const mapStateToProps = (state) => ({    
    registering:state.registering
  })

const connectedRegisterPage = connect(mapStateToProps)(Registration);
export { connectedRegisterPage as Registration };