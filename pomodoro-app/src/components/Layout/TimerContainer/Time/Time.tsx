import classNames from 'classnames';
import './time.css';
import { useDispatch } from 'react-redux';
import { increaseTime } from '../../../../redux/slice/timer';
import { useState } from 'react';

interface ITimeProps {
 id: number;
 task: string;
 timeLeft: number;
 isStarted: boolean;
 isPause: boolean;
}
const formatTime = (time: number) =>
 time < 10 ? time.toString().padStart(2, '0') : time;

export function Time(props: ITimeProps) {
const minutes = formatTime(Math.floor(props.timeLeft / 60));
 const seconds = formatTime(Math.floor(props.timeLeft - Number(minutes) * 60));
 const dispatch = useDispatch();
 const  [minuteNow, setMinuteNow] = useState(minutes);
 const timeClass = classNames(
  'time',
  { ['timeRed']: props.isStarted },
  { ['timerGreen']: props.isPause }
 );
 return (
  <>
   <div className="time_container">
    <span className={timeClass}>
    {minuteNow}:{seconds}
    </span>
    <button
     className="update_time"
     onClick={() => {
     dispatch(increaseTime());
     setMinuteNow(Number(minuteNow) + 1);
     }}
    >
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
    <span className="number_task">Задача - </span>
    <span className="name_real-task">{props.task}</span>
   </div>
  </>
 );
}
