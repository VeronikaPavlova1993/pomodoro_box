import './TodoItem/todoList.css';
import { ITodoItem, TodoItem } from './TodoItem/TodoItem';

interface ITaskList {
 tasks: ITodoItem[];
}

export function TodoList({ tasks }: ITaskList) {
 if (tasks.length === 0) return null;
 return (
  <div>
   <ul className="tasks_list">
    {tasks.map((task) => { 
        return <TodoItem key={task.id} task={task.task} id={task.id} />;
    })}
   </ul>
  </div>
 );
}
