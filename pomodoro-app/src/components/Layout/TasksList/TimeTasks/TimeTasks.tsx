import { useEffect, useState } from 'react';
import { ITask } from '../../../../redux/slice/tasks';
import './timerTask.css';

interface ITimeTasks {
 tasks: ITask[];
}

function toHoursAndMinutes(totalMinutes: number) {
 const hours = Math.floor(totalMinutes / 60);
 const minutes = totalMinutes % 60;
 if (hours === 0) {
  return `${minutes}мин`;
 } else {
  return `${hours}ч ${minutes}мин`;
 }
}

export function TimeTasks({ tasks }: ITimeTasks) {
 const [time, setTime] = useState('');

 useEffect(() => {
  const timeMinute =
   tasks.reduce((acc, task) => (acc = acc + task.pomodoro), 0) * 25;
  setTime(toHoursAndMinutes(timeMinute));
 }, [tasks, time]);
if (time === `0мин`) return null;
 return <div className='time_tasks'>{time}</div>;
}
