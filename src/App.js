import Todo from './components/Todo';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './App.css'


function App() {
  let Component
  switch(window.location.pathname){
    case "/dashboard":
      Component = Dashboard
      break
      case "/calendar":
        Component = Calendar
        break
      case "/todo":
        Component = Todo
        break
  }
  
  return (
    <>
      <body>
        <Header/>
        <Component/>
      </body>
    </>
  );
}

export default App;
