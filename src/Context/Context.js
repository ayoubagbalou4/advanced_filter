import React, { createContext, useState } from 'react'

export const userContext = createContext();

const Context = (props) => {
    const [categoryItem,setCategoryItem] = useState('all')
    const [priceItem,setPriceItem] = useState('all')
    const [priceItemSecond,setPriceItemSecond] = useState('all')
    const [colorItem,setcolorItem] = useState('all')
    const [companyItem,setComapnyItem] = useState('all')
    const [searchItem,setSearchItem] = useState('')

    const checkCategory = (e) => {
        setCategoryItem(e.target.value)
    }
    
    const checkPrice = (e) => {
        let valueinput = e.target.value
        if(valueinput === '0-50'){
            setPriceItem(0)
            setPriceItemSecond(50)
        }else if(valueinput === '50-100'){
            setPriceItem(50)
            setPriceItemSecond(100)
        }else if(valueinput === '100-150'){
            setPriceItem(100)
            setPriceItemSecond(150)
        }else if(valueinput === '150+'){
            setPriceItem(150)
            setPriceItemSecond(10000)
        }else{
            setPriceItem('all')
        }
    }

    const checkColor = (e) => {
        setcolorItem(e.target.value)
    }

    const checkCompany = (e) => {
        setComapnyItem(e.target.name)
    }

    const checkSearch = (e) => {
        setSearchItem(e.target.value)
    }


const uContext = {
    categoryItem,
    checkCategory,
    priceItem,
    priceItemSecond,
    checkPrice,
    companyItem,
    checkCompany,
    colorItem,
    checkColor,
    searchItem,
    checkSearch,
}

  return (
    <userContext.Provider value={uContext}>
        <div>{props.children}</div>
    </userContext.Provider>
  )
}

export default Context