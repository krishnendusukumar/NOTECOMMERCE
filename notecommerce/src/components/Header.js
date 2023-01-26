import React from 'react'
import './Header.css'
import { RxReset } from 'react-icons/rx';
import { GlobalContext } from '../context/globalContext'
import { Link } from 'react-router-dom';
const Header = () => {
    const { type, size, searchQuery, dispatch } = GlobalContext();

    return (
        <div className="header">
            <section className="header__sec">
                <select className="slct" value={type} onChange={(eve) => dispatch({ type: 'onTypeChange', payload: eve.target.value })}>
                    <option disabled>select</option>
                    <option value="tshirt">T Shirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="short">Short</option>
                    <option value="sweatshirt">Sweatshirt</option>
                </select>
                <select className="slct ml-2" value={size} onChange={(eve) => dispatch({ type: 'onSizeChange', payload: eve.target.value })}>
                    <option disabled>size</option>
                    <option value="XL">XL</option>
                    <option value="L">L</option>
                    <option value="MD">MD</option>
                </select>
                <button type="button" className="btn ml-2" onClick={() => dispatch({ type: 'onClearFilter' })}>
                    {' '}
                    <RxReset /> Reset{' '}
                </button>
            </section>
            <section className="header__sec on-right">
                Search:
                <input
                    type='text'
                    className='srch ml-1'
                    name='srch'
                    value={searchQuery}
                    onChange={(eve) => dispatch({ type: "onQueryChange", payload: eve.target.value })}
                />

                <Link to='/checkout' className='lnk ml-2' style={{ backgroundColor: "#198cb0", color: "white" }}>Add to cart</Link>
            </section>
        </div>
    )
}

export default Header
