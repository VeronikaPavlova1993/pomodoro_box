import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RootState } from './redux/store';
import { Header } from './components/Header/header';
import { LayoutPage } from './components/LayoutPage/LayoutPage';
import { Layout } from './components/Layout/Layout';
import { StatPage } from './components/Layout/StatPage/StatPage';
import { addNewItem } from './redux/slice/statistic';

function App() {
  const statList = useSelector((state: RootState) => state.stat) 
  const currentDay = moment().format('YYYY.MM.DD')
  const dispatch = useDispatch()

  useEffect(() => {
    if (!statList.find(item => item.date === currentDay)) dispatch(addNewItem(currentDay))
  }, [currentDay])

  return (
    <LayoutPage>
      <Header />
      <Routes >
        <Route path='/' element={<Layout />} />
        <Route path='/stat' element={<StatPage />} />
      </Routes>
    </LayoutPage>
  );
}

export default App;
