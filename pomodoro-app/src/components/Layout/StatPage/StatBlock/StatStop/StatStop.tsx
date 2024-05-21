import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './statStop.css';
import { StopIcon } from '../../../../../icons/StopIcon';

interface IPauseStatProps {
 stopCount: number;
}

export function StatStop({ stopCount }: IPauseStatProps) {
 const [isEmpty, setIsEmpty] = useState(true);

 useEffect(() => {
  stopCount > 0 ? setIsEmpty(false) : setIsEmpty(true);
 }, [stopCount]);

 const blockClass = classNames('statBlock' + ' ' + 'block_stop', {
  ['colorBlock_stop']: !isEmpty,
 });

 return (
  <div className={blockClass}>
   <div className='wrapper_stop'>
    <h3 className='title_stop'>Остановки</h3>
    <span className='count_stop'>{stopCount}</span>
   </div>

   <StopIcon isColor={!isEmpty} />
  </div>
 );
}
