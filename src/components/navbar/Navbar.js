import { userContext } from '../../Context/Context';
import './Navbar.css'
import React, { useContext } from 'react'

const Navbar = () => {
  const {companyItem,checkCompany,searchItem,checkSearch} = useContext(userContext);
  return (
    <div className='navbar_two'>
      <header>
        {/* <input type="text" value={searchItem} onChange={checkSearch} placeholder='Entrer Your Search Shoes' /> */}
      </header>
      <div className='btn'>
        <h3>Recomended</h3>
        <div className='btns'>
          <button onClick={checkCompany} className={companyItem === 'all' ? 'active' : ''} name='all'>All Products</button>
          <button onClick={checkCompany} className={companyItem === 'Nike' ? 'active' : ''} name='Nike'>Nike</button>
          <button onClick={checkCompany} className={companyItem === 'Adidas' ? 'active' : ''} name='Adidas'>Adidas</button>
          <button onClick={checkCompany} className={companyItem === 'Puma' ? 'active' : ''} name='Puma'>Puma</button>
          <button onClick={checkCompany} className={companyItem === 'Vans' ? 'active' : ''} name='Vans'>Vans</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar