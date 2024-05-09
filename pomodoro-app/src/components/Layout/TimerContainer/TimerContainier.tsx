import { ITask } from '../../../redux/slice/tasks';
import { HeaderTimer } from './HeaderTimer/HeaderTimer';
import { Timer } from '../Timer/Timer';
import './timerContainer.css';

interface ITimerBlockProps {
 task: ITask | null;
}

export function TimerContainer({ task }: ITimerBlockProps) {
 return (
  <div className="block">
   <HeaderTimer
    text={task ? task.task : 'Задач нет'}
    pomodoro={task ? task.pomodoro : 'Задач нет'}
   />

   {task ? (
     <Timer id={task.id} task={task.task} pomodoro={task.pomodoro} />
   ) : (
    <div className="empty">
     <p>Задач пока что нет</p>
    </div>
   )}
  </div>
 );
}
