import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/globalContext';
import { data } from '../fakeStoreData';
import Cart from './Cart';
import './cart.css';

const ShoppingBag = () => {
    const { cart, totalBill, setCheckedState } = GlobalContext();

    return (
        <main className="main">
            <table className="tbl">
                <thead>
                    <tr className="main__tr">
                        <td style={{ width: '50%' }} className="t-title">
                            {' '}
                            Product{' '}
                        </td>
                        <td className="t-title"> Price </td>
                        <td className="t-title"> Quantity </td>
                        <td className="t-title"> Subtotal </td>
                    </tr>
                </thead>
                {cart.length > 0 ? (
                    cart.map(item => <Cart key={item.id} {...item} />)
                ) : (
                    <tbody>
                        <tr><td>Start shopping</td></tr>
                    </tbody>
                )}
            </table>
            <section className="bill">
                <h2 className="ml-3">Cart total</h2>
                <div>
                    <p>
                        <strong>Subtotal</strong>{' '}
                    </p>
                    <p>${totalBill}.00</p>
                </div>
                <div>
                    <p>
                        <strong>Total</strong>{' '}
                    </p>
                    <p>
                        <strong>${totalBill}</strong>{' '}
                    </p>
                </div>
                <Link to="/seeyousoon" className="end" onClick={() => { setCheckedState(new Array(data.length).fill({ amount: '', selected: false })) }}>
                    {' '}
                    Proceed To Checkout{' '}
                </Link>
            </section>
        </main>
    );
};

export default ShoppingBag;
