import moment from 'moment';
import { useSelector } from 'react-redux';
import 'moment/locale/ru';
import { StatDay } from './StatDay/StatDay';
import { StatChart } from './StatChart/StatChart';
import { RootState } from '../../../../redux/store';
import { StatFocus } from './StatFocus/StatFocus';
import { StatPause } from './StatPause/StatPause';
import { StatPomodoro } from './StatPomodoro/StatPomodoro';
import { StatStop } from './StatStop/StatStop';
import './starBlock.css';

export function StatBlocks() {
  const statItems = useSelector((state: RootState) => state.stat)
  const selectedDate = useSelector((state: RootState) => state.select.selectedDate)
  const index = statItems.findIndex(el => el.date === selectedDate)
  const statItem = statItems[index]
  
  const dayName = moment(statItem.date).format('dddd')

  return (
    <div className='blocks'>
      <StatDay dayName={dayName} workTime={statItem.workTime} />
      <StatChart />
      <StatPomodoro pomodoroCount={statItem.donePomodoroCount} />
      <StatFocus workTime={statItem.workTime} breakeTime={statItem.breakeTime}/>
      <StatPause pauseTime={statItem.pauseTime}/>
      <StatStop stopCount={statItem.stopCount} />
    </div>
  );
}