import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { formatTime, SizeOptions } from '../../../../utils/formatTime';
import './statPause.css';
import { PauseIcon } from '../../../../../icons/PauseIcon';

interface IPauseStatProps {
  pauseTime: number
}

export function StatPause({ pauseTime }: IPauseStatProps) {
  const [isEmpty, setIsEmpty] = useState(true)
  const time = formatTime(pauseTime, SizeOptions.short)

  useEffect(() => {
    pauseTime > 0 ? setIsEmpty(false) : setIsEmpty(true)
  }, [pauseTime])

  const blockClass = classNames(
    'statBlock' + ' ' + 'block_pause',
    { ['colorBlock_pause']: !isEmpty },
  )

  return (
    <div className={blockClass}>
      <div className='wrapper_pause'>
        <h3 className='title_pause'>
          Время на паузе
        </h3>
        <span className='time_pause'>
          {time} 
        </span>
      </div>

      <PauseIcon isColor={!isEmpty} />
    </div>
  );
}