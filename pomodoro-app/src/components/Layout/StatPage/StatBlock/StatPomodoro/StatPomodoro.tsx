import './statPomodoro.css';

interface IStatPomodoroProps {
 pomodoroCount: number;
}

const words = ['помидор', 'помидора', 'помидоров'];

function validWorld(value: number) {
 value = Math.abs(value) % 100;
 const num = value % 10;
 if (value > 10 && value < 57) return words[2];
 if (num > 1 && num < 5) return words[1];
 if (num == 1) return words[0];
 return words[2];
}


export function StatPomodoro({ pomodoroCount }: IStatPomodoroProps) {
 return (
  <div className={'statBlock' + ' ' + 'block_pomodoro'}>
   {pomodoroCount === 0 ? (
    <img src="img/tomato-stat-empty.png" alt="" />
   ) : (
    <>
     <div className="blockTop_pomodoro">
      <img src="img/tomato-stat-notempty.png" alt="tomato" />
      <span className="counter_pomodoro">x {pomodoroCount}</span>
     </div>
     <div className="blockBottom_pomodoro">{pomodoroCount} {validWorld(pomodoroCount)}</div>
    </>
   )}
  </div>
 );
}
