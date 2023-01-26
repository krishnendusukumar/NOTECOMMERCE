import React, { useEffect } from 'react'
import { FcApproval } from 'react-icons/fc'
import { GlobalContext } from '../context/globalContext';

const Thankyou = () => {

  const { dispatch } = GlobalContext();

  useEffect(() => {
    dispatch({ type: 'CLEARCART' })
  }, [dispatch])
  return (
    <div className='container'>
      <h1>THANK YOU</h1>
      <FcApproval size={80} />
      <p>
        Thank you for your support. We truly appreciate your business and look forward to serving you again.
      </p>
    </div>
  )
}

export default Thankyou