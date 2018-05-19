import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter'
import Register from '../components/Register'
// import * as CounterActions from '../actions'
import * as RegisterActions from '../actions/user.actions';

const mapStateToProps = (state) => ({
  counter: state.counter,
  registration:state.registration
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( RegisterActions, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(Register)