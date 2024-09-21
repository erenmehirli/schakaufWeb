import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = () => {
  return (
    <div>
      <div className='px-10 pt-10 font-serif text-3xl font-thin'>
        Your cart
      </div>


      <div className='flex px-8 pt-6'>
  <div className='w-2/3  shadow-lg border border-gray-300 text-center'>
    <div className='p-20 h-[30rem] flex flex-col justify-center items-center'>
      <p>Your cart is empty</p>
      <br />
      <button  onClick={() => {
                window.location.href='/';
              }} className='bg-black text-white px-4 py-2 mt-2 flex items-center justify-center'>
        <ShoppingCartIcon style={{ fontSize: '30px', color: 'white', marginRight: '8px' }} />
        Continue shopping
      </button>
    </div>
  </div>
</div>



    </div>
  );
}

export default ShoppingCart;
