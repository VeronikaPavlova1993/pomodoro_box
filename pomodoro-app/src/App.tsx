import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header/header';
import { Layout } from './components/Layout/Layout';
import { RootState } from './redux/store';

function App() {
 const tasksList = useSelector((state: RootState) => state.tasks);
 console.log(tasksList);
 return (
  <>
   <Header />
   <Layout tasks={tasksList} />
  </>
 );
}

export default App;
