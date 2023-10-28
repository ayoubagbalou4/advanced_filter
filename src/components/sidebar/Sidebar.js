import { useContext } from 'react';
import './Sidebar.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { userContext } from '../../Context/Context';
import Input from './Input';

const Sidebar = () => {
  const {checkCategory,checkPrice,checkColor ,categoryItem,priceItem,colorItem} = useContext(userContext);

  return (
    <div className='sidebar_two'>
      <h2><AiOutlineShoppingCart size={35} /></h2>
      <div className='category'>
        <h3>Category</h3>
          <Input
            label="All"
            value="all"
            name="category"
            function={checkCategory}
            checked={categoryItem === 'all'}
          />
          <Input
            label="sneakers"
            value="sneakers"
            name="category"
            function={checkCategory}
            checked={categoryItem === 'sneakers'}
          />
          <Input
            label="flats"
            value="flats"
            name="category"
            function={checkCategory}
            checked={categoryItem === 'flats'}
          />
          <Input
            label="sandals"
            value="sandals"
            name="category"
            function={checkCategory}
            checked={categoryItem === 'sandals'}
          />
          <Input
            label="heels"
            value="heels"
            name="category"
            function={checkCategory}
            checked={categoryItem === 'heels'}
          />
      </div>
      <div className='price'>
        <h3>Price</h3>
          <Input
            label="All"
            value="all"
            name="price"
            function={checkPrice}
            checked={priceItem === 'all'}
          />
          <Input
            label="0$ - 50"
            value="0-50"
            name="price"
            function={checkPrice}
            checked={priceItem === 0}
          />
          <Input
            label="$50 - 100"
            value="50-100"
            name="price"
            function={checkPrice}
            checked={priceItem === 50}
          />
          <Input
            label="$100 - 150"
            value="100-150"
            name="price"
            function={checkPrice}
            checked={priceItem === 100}
          />
          <Input
            label="Over $150"
            value="150+"
            name="price"
            function={checkPrice}
            checked={priceItem === 150}
          />
      </div>
      <div className='color'>
        <h3>Color</h3>
          <Input
            label="All"
            value="all"
            name="color"
            function={checkColor}
            checked={colorItem === 'all'}
          />
          <Input
            label="black"
            value="black"
            name="color"
            function={checkColor}
            checked={colorItem === 'black'}
          />
          <Input
            label="red"
            value="red"
            name="color"
            function={checkColor}
            checked={colorItem === 'red'}
          />
          <Input
            label="green"
            value="green"
            name="color"
            function={checkColor}
            checked={colorItem === 'green'}
          />
          <Input
            label="blue"
            value="blue"
            name="color"
            function={checkColor}
            checked={colorItem === 'blue'}
          />
          <Input
            label="white"
            value="white"
            name="color"
            function={checkColor}
            checked={colorItem === 'white'}
          />
      </div>
    </div>
  )
}

export default Sidebar;