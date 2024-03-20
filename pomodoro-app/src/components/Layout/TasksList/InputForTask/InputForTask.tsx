import { ChangeEvent, useState } from 'react';
import './input.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../../redux/slice/tasks';

export function InputForTask() {
 const [item, setItem] = useState('');
 const dispatch = useDispatch();


 const newItem = () => {
  if (item.trim() !== '') {
    dispatch(addTask({id: Date.now(), task: item, pomodoro: 1}))
    setItem(''); 
   } else {
   console.log('Enter task');
   setItem('');
  }
  console.log(item);
 };

 function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value);
  }
 return (
  <div className="tasks">
   <div className="form_task">
    <input
     type="text"
     value={item}
     className="input_task"
     placeholder="Название задачи"
     onChange={handleChange}
    />
    <button type="submit" className="submit_task" onClick={newItem}>
     Добавить
    </button>
   </div>
  </div>
 );
}
