import './layout.css';
import { TasksList } from './TasksList/TasksList';
import { Timer } from './Timer/Timer';

export function Layout() {
 return (
  <main className="main">
    <TasksList />
    <Timer />
  </main>
 );
}
