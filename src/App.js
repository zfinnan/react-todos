import logo from './logo.svg';
import './App.css';
import ListItem from './Components/ListItem';

const doThis = ["wake up", "brush teeth", "eat breakfast"]

function App() {
  const list = ['Learn React', '???', 'Profit','Chill']
  const todos = list.map((todo, index) => {
    return <ListItem doThis={todo} key={`list-item-${index}`} />
  })
  
  return(
    <div>
      <header id="header">My List</header>
      <div>
        <p id="toDoList">
          {todos}
        </p>
      </div>
      <p>👌🏻</p>
      <p id="gloat">Best, most impressive React App ever</p>
    </div>
  )
}


export default App;
