import { useRef, useState } from 'react';
import { Dropdown } from '../../../../Dropdown/Dropdown';
import './todoList.css';
import { MenuControlsChecklist } from './MenuItemsList/MenuControlsChecklist';

export interface ITodoItem {
 id: number;
 task: string;
}

export function TodoItem(props: ITodoItem) {
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const ref = useRef<HTMLInputElement>(null);

 const openModal = () => {
  setIsDropdownOpen(false);
 };

 const onEdit = () => {
  setIsDropdownOpen(false);
  ref.current?.focus();
 };
 return (
  <li>
   <div className="todo_line">
    <div className="todo_item">
     <div className="pomodoro_task">1</div>
     <div className="text_task">{props.task}</div>
    </div>
    <Dropdown
     isOpen={isDropdownOpen}
     handleClose={() => setIsDropdownOpen(false)}
     hanldeСlick={() => setIsDropdownOpen(!isDropdownOpen)}
     button={
      <button className="button_task">
       <span className="button_disc"></span>
       <span className="button_disc"></span>
       <span className="button_disc"></span>
      </button>
     }
     controls={
      <MenuControlsChecklist id={props.id} openModal={openModal} onEdit={onEdit} />
     }
    />
   </div>
  </li>
 );
}
