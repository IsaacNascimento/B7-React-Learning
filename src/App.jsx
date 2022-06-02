import store from 'store2';
import './App.css';
import Menu from './components/Menu';
import Index from './pages';

store('Profile', {name:"Isaac", age: 25,})
store.setAll('Person', {name: "Isaac", age: 20})
console.log(store('name'))
console.log(store.getAll())
const App = () => {
  
  return (
    <div>
      <Menu/>
      <div className='container mx-auto'>
      <Index />
      </div>
    </div>
  )
}

export default App;
