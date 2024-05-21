import { useDispatch, useSelector } from 'react-redux';
import { ControlsTimer } from '../TimerContainer/ControlsTimer/ControlsTimer';
import './timer.css';
import { RootState } from '../../../redux/store';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
 resetTimer,
 stopTimer,
 pause,
 increaseBreakeCounter,
 increasePomodoroCounter,
 setBreake,
 unpause,
 startTimer,
} from '../../../redux/slice/timer';
import { delTask } from '../../../redux/slice/tasks';
import {
 increaseBreakeTime,
 increaseDonePomodoro,
 increasePauseTime,
 increaseStopCount,
 increaseWorkTime,
} from '../../../redux/slice/statistic';
import { Time } from '../TimerContainer/Time/Time';

interface ITimerProps {
 id: number;
 task: string;
 pomodoro: number | string;
}

export function Timer(props: ITimerProps) {
 const { pomododroTime, shortBreakeTime, longBreakeTime, longBreakeAmount } =
  useSelector((state: RootState) => state.setting);
 const { isStart, isPause, isBreake, isPomodoroCounter, isBreakeCounter } =
  useSelector((state: RootState) => state.timer);
 const dispatch = useDispatch();

 const [timeLeft, setTimeLeft] = useState(pomododroTime);

 const firstUpdate = useRef(true);

 useEffect(() => {
  setTimeLeft(pomododroTime);
 }, [pomododroTime, shortBreakeTime, longBreakeTime, longBreakeAmount]);

 useLayoutEffect(() => {
  if (firstUpdate.current) {
   firstUpdate.current = false;
  } else {
   dispatch(resetTimer());
   dispatch(stopTimer());
   setTimeLeft(pomododroTime);
  }
 }, [props.id]);

 useEffect(() => {
  if (isBreake) {
   isBreakeCounter % longBreakeAmount === 0
    ? setTimeLeft(longBreakeTime)
    : setTimeLeft(shortBreakeTime);
  } else {
   setTimeLeft(pomododroTime);
  }
 }, [isBreake]);

 useEffect(() => {
  const timer = setInterval(() => {
   if (isStart) {
    setTimeLeft(timeLeft - 1);

    isBreake ? dispatch(increaseBreakeTime()) : dispatch(increaseWorkTime());
   }

   if (isPause) {
    dispatch(increasePauseTime());
   }

   if (timeLeft === 0) {
    clearInterval(timer);
    dispatch(stopTimer());

    if (isBreake) {
     dispatch(increaseBreakeCounter());
    } else {
     dispatch(increasePomodoroCounter());

     dispatch(increaseDonePomodoro());
    }

    dispatch(setBreake(!isBreake));

    if (typeof props.pomodoro == 'number') {
     if (isPomodoroCounter >= props.pomodoro) {
      dispatch(delTask(props.id));
      dispatch(resetTimer());
     }
    }
   }
  }, 1000);

  return () => clearInterval(timer);
 }, [timeLeft, isStart, isBreake]);

 const resetTime = () => {
  dispatch(stopTimer());
  dispatch(unpause());
 };

 const handleStart = () => {
  dispatch(startTimer());
 };

 const handlePause = () => {
  if (isPause) {
   dispatch(unpause());
   dispatch(startTimer());
  } else {
   dispatch(pause());
   dispatch(stopTimer());
  }
 };


 const handleDone = () => {
  resetTime();
  dispatch(setBreake(true));
  dispatch(increasePomodoroCounter());

  dispatch(increaseDonePomodoro());

  if (typeof props.pomodoro == 'number') {
   if (isPomodoroCounter >= props.pomodoro) {
    dispatch(delTask(props.id));
    dispatch(resetTimer());
   }
  }
 };

 const handleStop = () => {
  dispatch(stopTimer());
  setTimeLeft(pomododroTime);
  dispatch(increaseStopCount());
 };


 const handleSwitch = () => {
  resetTime();
  dispatch(setBreake(false));
  dispatch(increaseBreakeCounter());
 };

 return (
  <section className="timer">
   <Time
    task={props.task}
    id={props.id}
    timeLeft={timeLeft}
    isStarted={isStart}
    isPause={isPause}
   />
   <ControlsTimer
    onStart={handleStart}
    onStop={handleStop}
    onDone={handleDone}
    onPause={handlePause}
    onSwitch={handleSwitch}
   />
  </section>
 );
}
