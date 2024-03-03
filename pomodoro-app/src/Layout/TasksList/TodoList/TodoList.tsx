import './todoList.css';

export function TodoList() {
 return (
  <div className="todo_list">
   <ul>
    <li>
     <div className="todo_line">
      <div className="pomodoro_task">1</div>
      <div className="text_task">Сверстать сайт</div>
      <button className="button_task">
       <span className="button_disc"></span>
       <span className="button_disc"></span>
       <span className="button_disc"></span>
      </button>
     </div>
    </li>
   </ul>
  </div>
 );
}
