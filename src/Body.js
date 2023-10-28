import { useContext } from 'react'
import './App.css'
import { userContext } from './Context/Context'
import data from './Data'
import Card from './components/card/Card'


const Body = () => {
  const {categoryItem,priceItem,priceItemSecond,colorItem,companyItem,searchItem} = useContext(userContext);

  console.log(Number(priceItem));
  console.log(Number(priceItemSecond));
  return (
          <>
          {
            data.map((product,id)=>{
              if (
                (product.title.includes(searchItem) || searchItem === '') &&
                (product.company === companyItem || companyItem === 'all') &&
                (product.color === colorItem || colorItem === 'all') &&
                (product.category === categoryItem || categoryItem === 'all') &&
                (product.newPrice >= Number(priceItem) && product.newPrice <= Number(priceItemSecond) || priceItem === 'all')
              ) {
                return <Card key={id} data={product} />;
              }

            })
          }
          </>
  )
}

export default Body
