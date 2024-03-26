import './layout.css';
import { TasksList } from './TasksList/TasksList';
import { ITodoItem } from './TasksList/TodoList/TodoItem/TodoItem';
import { Timer } from './Timer/Timer';

interface ILayout {
  tasks: ITodoItem[];
 }

export function Layout( {tasks}: ILayout) {
 return (
  <main className="main">
    <TasksList tasks={tasks} />
    <Timer task={tasks.length > 0 ? tasks[0].task : '' } pomodoro={tasks.length > 0 ? tasks[0].pomodoro : ''} />
  </main>
 );
}
