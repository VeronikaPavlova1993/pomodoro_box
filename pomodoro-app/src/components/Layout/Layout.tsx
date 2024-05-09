import './layout.css';
import { TasksList } from './TasksList/TasksList';
import { ITodoItem } from './TasksList/TodoList/TodoItem/TodoItem';
import { TimerContainer } from './TimerContainer/TimerContainier';

interface ILayout {
 tasks: ITodoItem[];
}

export function Layout({ tasks }: ILayout) {
 return (
  <main className="main">
   <div className="wrapper">
    <TasksList tasks={tasks} />
    <TimerContainer task={tasks.length > 0 ? tasks[0] : null} />
   </div>
  </main>
 );
}
