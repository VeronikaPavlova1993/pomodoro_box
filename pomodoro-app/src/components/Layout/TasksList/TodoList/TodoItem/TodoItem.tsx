import './todoList.css';

export interface ITodoItem {
    id: number;
    task: string
  }
  


export function TodoItem(props: ITodoItem ) {
 return (
    <li>
     <div className="todo_line">
      <div className="pomodoro_task">1</div>
      <div className="text_task">{props.task}</div>
      <button className="button_task">
       <span className="button_disc"></span>
       <span className="button_disc"></span>
       <span className="button_disc"></span>
      </button>
     </div>
    </li>
 );
}
