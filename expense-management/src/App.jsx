
import AddExpence from './Components/AddExpence'
import AllExpence from './Components/AllExpence'
import ListExpence from './Components/ListExpence'
import Navbar from './Components/Navbar'

function App() {
  


  return (
    <>
    <Navbar/>
      <main className="w-[80%] mx-auto">
        <AddExpence/>
       <AllExpence/>
        <ListExpence/>
      </main>
    </>
  )
}

export default App
