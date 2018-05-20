import {userConstants} from '../constants/user.constants';
import {registerService} from '../services/user.service';
//import {alertActions} from './alert.actions'
import {history} from '../helpers/history';

export const register =(user) =>{  
  return async dispatch =>{
    try{
      
      await registerService(user);
      dispatch(success(user));
      history.push('/');
    }
    catch (error){
      debugger;
      console.log(error)
      dispatch(failure(error));
      //dispatch(alertActions.error(error));
    }
  }
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