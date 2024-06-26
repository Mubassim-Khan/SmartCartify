import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const { numOfItems } = useSelector((store) => store.cart);

    return (
        <nav>
            <div className="nav-center">
                <h3>SmartCartify - Store</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{numOfItems}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
