import React from 'react'
import { connect } from 'react-redux'

export const ShoppingCart = () => (
        <div>
            This is the ShoppingCart window
        </div>
)

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
