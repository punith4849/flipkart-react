import React from 'react'
import logo1 from'./flogo3.png'
import logo2 from './search.png'
import logo3 from './store.png'
import logo4 from './user.png'
import logo5 from './shopping.png'

export default function Sidebar() {
  return (
    <>
    <div className='col-md-2'>
      <img src={logo1} width="50%" height="70%" className='logo' alt='logo'/>
    </div>
    <div className='col-md-5'>
      <div className='searchbar'>
      <img src= {logo2} width="20px" height="20px" className='search' />
      <input type='text' className='bar' placeholder='  Search for products, Brands and More'/>
      </div>
    </div>
    <div className='col-md-5 row'>
      <div className='col-md-5'>
      <img src={logo3} width="20px" height="20px" className='searchicon'></img>
      <span className='n1'>Become seller</span>
      </div>
      <div className='col-md-3'>
        <img src={logo4} width="20px" height="20px" className='searchicon'></img>
        <span className='n1'>sign in</span>
      </div>
      <div className='col-md-2'>
        <img src={logo5} width="20px" height="20px" className='searchicon'></img>
        <span>Cart</span>
      </div>
    </div>
    </>
    
  )
}
