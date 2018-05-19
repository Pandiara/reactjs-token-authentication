import {userConstants} from '../constants/user.constants'
import {userService} from '../services/user.service'
import {alertActions} from './alert.actions'
  
export const register =(user) =>(dispatch)=>{  
  debugger;
  dispatch(success(user))  
  userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    // history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
}

export const request = (user) => ({
  type: userConstants.REGISTER_REQUEST, user
})

export const success = (user) => ({
  type: userConstants.REGISTER_SUCCESS, user
})

export const failure = (error) => ({
  type: userConstants.REGISTER_FAILURE, error
})