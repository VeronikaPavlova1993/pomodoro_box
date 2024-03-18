import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../../../Dropdown/Dropdown';
import './todoList.css';
import { MenuControlsChecklist } from './MenuItemsList/MenuControlsChecklist';
import { useDispatch } from 'react-redux';
import { editTask } from '../../../../../redux/slice/tasks';
import { ModalDelete } from '../../../../ModalDelete/ModalDelete';

export interface ITodoItem {
 id: number;
 task: string;
}

export function TodoItem(props: ITodoItem) {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 const [titleValue, setTitleValue] = useState(props.task);
 const [isDisabled, setIsDisabled] = useState(true);

 const ref = useRef<HTMLInputElement>(null);
 const dispatch = useDispatch();

 const openModal = () => {
  console.log('Modal open!!!');
  setIsModalOpen(true);
  setIsDropdownOpen(false);
 };

 const onEdit = () => {
  setIsDropdownOpen(false);
  setIsDisabled(false);
  ref.current?.focus();
 };

 const onBlur = () => {
  ref.current?.blur();
  setIsDisabled(true);

  dispatch(editTask({ id: props.id, title: titleValue }));
 };

 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setTitleValue(event.target.value);
 };

 useEffect(() => {
  !isDisabled && ref.current?.focus();
 }, [isDisabled]);

 return (
  <li>
   <div className="todo_line">
    <div className="todo_item">
     <div className="pomodoro_task">1</div>
     <input
      disabled={isDisabled}
      ref={ref}
      value={titleValue}
      className="text_task" 
      onBlur={onBlur}
      onChange={handleChange}
     />
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
      <MenuControlsChecklist
       id={props.id}
       openModal={openModal}
       onEdit={onEdit}
      />
     }
    />
   </div>
   {isModalOpen && (
    <ModalDelete id={props.id} closeModal={() => setIsModalOpen(false)} />
   )}
  </li>
 );
}
