import './shatChart.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { RootState } from '../../../../../redux/store';
import { addNewItem } from '../../../../../redux/slice/statistic';
import { setSelectedDate } from '../../../../../redux/slice/selectSlice';
import { useWeekdays } from '../../../../../hooks/useWeekdays';

export function StatChart() {
 const [maxWorkTime, setMaxWorkTime] = useState(0);
 const statItems = useSelector((state: RootState) => state.stat);
 const dispatch = useDispatch();
 const [weekdays] = useWeekdays();

 useEffect(() => {
  const max = weekdays.reduce(
   (prev, current) => (prev > current.workTime ? prev : current.workTime),
   0
  );
  setMaxWorkTime(max);
 }, [weekdays]);

 const handleSelect = (date: string) => {
  if (!statItems.find((item) => item.date === date)) dispatch(addNewItem(date));
  dispatch(setSelectedDate(date));
 };

 function secToTime(sec: number) {
  const hour = Math.floor(sec / 60);
  const min = Math.round(sec % 60);

  return `${hour} ч ${min} мин`;
 }

 const calcHeight = (time: number) => {
  return time > 0 ? time : 5;
 };
 return (
  <div className={'statBlock' + ' ' + 'block_chart'}>
   <div className="grid_chart">
    <div className="line_chart">
     <span className="time_chart">{secToTime(maxWorkTime)}</span>
    </div>
    <div className="line_chart">
     <span className="time_chart">{secToTime((maxWorkTime / 4) * 3)}</span>
    </div>
    <div className="line_chart">
     <span className="time_chart">{secToTime((maxWorkTime / 4) * 2)}</span>
    </div>
    <div className="line_chart">
     <span className="time_chart">{secToTime(maxWorkTime / 4)}</span>
    </div>
   </div>

   <div className="weekdays_chart">
    {weekdays.map((day) => {
     const dayClass = classNames('day_chart', { ['active_chart']: day.active });

     const chartClass = classNames(
      'chart_chart',
      { ['chartSelected_chart']: day.active },
      { ['chartEmpty_chart']: day.workTime === 0 },
      { ['chartFill_chart']: day.workTime > 0 && !day.active }
     );
     return (
      <div
       className="weekday_chart"
       key={day.day}
       onClick={() => handleSelect(day.date)}
      >
       <button className={dayClass}>{day.day}</button>
       <div
        className={chartClass}
        style={{ height: calcHeight(day.workTime) + 'px' }}
        onClick={() => handleSelect(day.date)}
       />
      </div>
     );
    })}
   </div>
  </div>
 );
}
