import { HeaderTimer } from './HeaderTimer/HeaderTimer';
import './timer.css';

interface ITimerProps{
    task: string,
    pomodoro: number | string,
}

export function Timer(props: ITimerProps) {
 return (
  <section className="timer">
  <HeaderTimer text={props.task} pomodoro={props.pomodoro} />
   <div className="time">
    25:00
    <button className="update_time">
     <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
      <path
       d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z"
       fill="white"
      ></path>
     </svg>
    </button>
   </div>
   <div className="real-task">
    <span className="number_task">Задача №1 - </span>
    <span className="name_real-task">Сверстать сайт</span>
   </div>
   <div className="controls_timer">
    <button className="controls">Старт</button>
    <button className="controls" disabled>Стоп</button>
   </div>
  </section>
 );
}
