import { useState } from 'react';
import './statHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { RootState } from '../../../../redux/store';
import { Periods, setPeriod } from '../../../../redux/slice/selectSlice';
import { SelectArrowIcon } from '../../../../icons/SelectArrowIcon';
import { Dropdown } from '../../../Dropdown/Dropdown';

const selectOptions = [
  {
    name: 'Эта неделя',
    value: Periods.CurrentWeek,
  },
  {
    name: 'Прошедшая неделя',
    value: Periods.LastWeek,
  },
  {
    name: '2 недели назад',
    value: Periods.TwoWeeksAgo,
  }
]

export function StatHeader() {
  const selectedPeriod = useSelector((state: RootState) => state.select.selectedPeriod)
  const dispatch = useDispatch()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSelect = (option: Periods) => {
    dispatch(setPeriod(option))
    setIsDropdownOpen(false)
  }

  const selectClass = classNames(
    'selectButton_stat',
    { ['active_stat']: isDropdownOpen },
  )

  return (
    <div className='header_stat'>
      <h2 className='title_stat'>
        Ваша активность
      </h2>

      <div className='selectContainer_stat'>
        <Dropdown
          isOpen={isDropdownOpen}
          handleClose={() => setIsDropdownOpen(false)}
          hanldeСlick={() => setIsDropdownOpen(!isDropdownOpen)}
          button={
            <button className={selectClass}>
              {selectOptions.find(option => option.value === selectedPeriod)?.name}
              <SelectArrowIcon />
            </button>
          }
          controls={
            <div className='listContainer_stat'>
              <ul className='list_stat'>
                {selectOptions.map(item => (
                  <li className='item_stat' key={item.value}>
                    <button
                      className='button_stat'
                      onClick={() => handleSelect(item.value)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          } 
        />
      </div>
    </div>
  );
}