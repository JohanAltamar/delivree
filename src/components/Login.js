import React from 'react'
import { connect } from 'react-redux'

export const Login = () => {
    return (
        <div>
            This is the Login window
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
