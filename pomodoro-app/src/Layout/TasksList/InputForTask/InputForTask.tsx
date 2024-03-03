import './input.css';

export function InputForTask() {
 return (
  <div className="tasks">
   <form className='form_task'>
    <input className="input_task" placeholder="Название задачи" />
    <button type="submit" className="submit_task">
     Добавить
    </button>
   </form>
  </div>
 );
}
