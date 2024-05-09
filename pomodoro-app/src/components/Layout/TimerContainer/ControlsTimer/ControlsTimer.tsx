import { useSelector } from 'react-redux';
import './controlsTimer.css';
import { RootState } from '../../../../redux/store';

interface ITimerButtonsProps {
 onStart: () => void;
 onPause: () => void;
 onStop: () => void;
 onDone: () => void;
 onSwitch: () => void;
}

export function ControlsTimer({
 onStart,
 onStop,
 onDone,
 onPause,
 onSwitch,
}: ITimerButtonsProps) {
 const { isStart, isPause, isBreake } = useSelector(
  (state: RootState) => state.timer
 );

 return (
  <div className="controls_timer">
   {!isStart && !isPause ? (
    <button className="controls" onClick={onStart}>
     Старт
    </button>
   ) : (
    <button className="controls" onClick={onPause}>
     {isPause ? 'Продолжить' : 'Пауза'}
    </button>
   )}
   {!isPause && !isBreake && (
    <button className="controls" onClick={onStop} disabled={!isStart}>
     Стоп
    </button>
   )}
   {isPause && !isBreake && <button className='controls_read' onClick={onDone}>Сделано</button>}

   {isBreake && <button onClick={onSwitch}>Продолжить</button>}
  </div>
 );
}
