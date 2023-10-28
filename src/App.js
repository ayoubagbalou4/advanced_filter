import './App.css'
import Body from './Body'
import Context from './Context/Context'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'


const App = () => {
  return (
    <Context >
      <div className='app'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='acceuil'>
          <Navbar />
          <div className='products'>
            <Body />
          </div>
        </div>
      </div>
    </Context>
  )
}

export default App
