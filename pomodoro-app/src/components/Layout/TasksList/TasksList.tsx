import { InputForTask } from './InputForTask/InputForTask';
import { TimeTasks } from './TimeTasks/TimeTasks';
import { ITodoItem } from './TodoList/TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import './taskList.css';
interface ITaskList {
    tasks: ITodoItem[];
   }

const rules = [
 'Выберите категорию и напишите название текущей задачи',
 'Запустите таймер («помидор»)',
 'Работайте пока «помидор» не прозвонит',
 'Сделайте короткий перерыв (3-5 минут)',
 'Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)',
];

export function TasksList({tasks}: ITaskList) {
 return (
  <div className="tasks_list">
   <p> Ура! Теперь можно начать работать:</p>
   <ul>
    {rules.map((rule) => (
     <li className="rule">{rule}</li>
    ))}
   </ul>
   <InputForTask />
   <TodoList tasks={tasks} />
   <TimeTasks tasks={tasks} />
  </div>
 );
}
