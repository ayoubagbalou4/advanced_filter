import React from 'react'
import {AiTwotoneShopping} from 'react-icons/ai';


const Card = (props) => {
    const {img,title,star,reviews,prevPrice,newPrice,company,color,category} = props.data
  return (
    <div className='product'>
        <img src={img} alt={img} />
        <h4>{title}</h4>
        <div className='star-reviews'>
            {star}{star}{star}{star}{star} {reviews}
        </div>
        <div className='price-shop'>
            <div>
                <del>{prevPrice} </del>
                <span>{newPrice}</span>
            </div>
            <div><AiTwotoneShopping size={20} /></div>
        </div>
    </div>
  )
}

export default Card