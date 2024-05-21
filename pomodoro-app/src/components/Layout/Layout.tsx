import { useSelector } from 'react-redux';
import './layout.css';
import { TasksList } from './TasksList/TasksList';
import { TimerContainer } from './TimerContainer/TimerContainier';
import { RootState } from '../../redux/store';


export function Layout() {
    const tasks = useSelector((state: RootState) => state.tasks)
 return (
  <main className="main">
   <div className="wrapper">
    <TasksList tasks={tasks} />
    <TimerContainer task={tasks.length > 0 ? tasks[0] : null} />
   </div>
  </main>
 );
}
