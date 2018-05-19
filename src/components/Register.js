import React from 'react'
import PropTypes from 'prop-types'

const Register = ({register}) => (
  <p>
          <button onClick={register}>Please Register</button>
    
  </p>
)

Register.propTypes = {
    register: PropTypes.func.isRequired
}

export default Register