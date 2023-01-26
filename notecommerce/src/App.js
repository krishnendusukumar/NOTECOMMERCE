import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Thankyou from './pages/Thankyou'


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/seeyousoon" element={<Thankyou />} />
            </Routes>
        </>
    )
}

export default App
