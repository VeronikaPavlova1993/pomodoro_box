import { SizeOptions, formatTime } from '../../../../utils/formatTime';
import './statDay.css';

interface IStatDayProps {
 dayName: string;
 workTime: number;
}

export function StatDay({ dayName, workTime }: IStatDayProps) {
 const time = formatTime(workTime, SizeOptions.large);

 return (
  <div className={'statBlock_day' + ' ' + 'block_day'}>
   <h3 className="day_day">{dayName[0].toUpperCase() + dayName.slice(1)}</h3>
   {workTime === 0 ? (
    <span className="info">Нет данных</span>
   ) : (
    <span className="info">
     Вы работали над задачами 
     в течение <span className="time_day">{time}</span>
    </span>
   )}
  </div>
 );
}
