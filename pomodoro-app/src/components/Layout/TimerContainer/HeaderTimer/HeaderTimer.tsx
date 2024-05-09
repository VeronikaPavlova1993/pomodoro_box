import './headerTimer.css';

interface IHeaderTimerProps {
 text: string;
 pomodoro: number | string;
}

export function HeaderTimer(props: IHeaderTimerProps) {
 return (
  <div className="task_timer">
   <div className="title_task">{props.text}</div>
   <div className="pomodoro_task">{ typeof props.pomodoro == 'number' ? `Помидор ${props.pomodoro}` : 'Заданий нет'}</div>
  </div>
 );
}
