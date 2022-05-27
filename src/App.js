import logo from './logo.svg';
import './App.css';
import Search  from './Search';

function App() {

  let data=[{
    name:'monika',
    id:1,
    email:'monika28may@gmail.com'
  },
  {
    name:'shivani',
    id:2,
    email:'shivani@gmail.com'
  },
  {
    name:'reeema',
    id:2,
    email:'shivani@gmail.com'
  },


  ]
  return (
  <Search mylist={data}/>
  );
}

export default App;

