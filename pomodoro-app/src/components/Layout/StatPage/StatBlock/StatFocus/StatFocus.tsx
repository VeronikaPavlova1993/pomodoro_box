import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './statFocus.css';
import { FocusIcon } from '../../../../../icons/FocusIcon';

interface IStatFocusProps {
  workTime: number
  breakeTime: number
}

export function StatFocus({ workTime, breakeTime }: IStatFocusProps) {
  const [isEmpty, setIsEmpty] = useState(true)

  const commonTime = workTime + breakeTime
  const focusTime = Math.trunc(workTime / commonTime * 100)

  useEffect(() => {
    commonTime > 0 ? setIsEmpty(false) : setIsEmpty(true)
  }, [commonTime])

  const blockClass = classNames(
    'statBlock' + ' ' + 'block_focus',
    { ['colorBlock_focus']: !isEmpty },
  )

  return (
    <div className={blockClass}>
      <div className='wrapper_focus'>
        <h3 className='title_focus'>
          Фокус
        </h3>
        <span className='percent_focus'>
          {isNaN(focusTime) ? 0 + '%' : focusTime + '%'}
        </span>
      </div>

      <FocusIcon isColor={!isEmpty} />
    </div>
  );
}