import './menuControlsChecklist.css';
import { PlusIcon } from '../../../../../../icons/PlusIcon';
import { MinusIcon } from '../../../../../../icons/MinusIcon';
import { EditIcon } from '../../../../../../icons/EditIcon';
import { DeleteIcon } from '../../../../../../icons/DeleteIcon';
import { minusPomodoro, plusPomodoro } from '../../../../../../redux/slice/tasks';
import { useDispatch } from 'react-redux';

interface IMenuControlsChecklistProps {
  id: number
  openModal: () => void
  onEdit: () => void
}

export function MenuControlsChecklist(props: IMenuControlsChecklistProps) {
  const dispatch = useDispatch();

  return (
    <div className="tasks_checklist">
      <ul className="list">
          <li className="item_checklist">
            <button className="control__checklist" onClick={() => dispatch(plusPomodoro(props.id))}>
              <PlusIcon />
              <span className="title__checklist">Увеличить</span>
            </button>
          </li>
          <li className="item_checklist">
            <button className="control__checklist"  onClick={() => dispatch(minusPomodoro(props.id))}>
              <MinusIcon />
              <span className="title__checklist">Уменьшить</span>
            </button>
          </li>
          <li className="item_checklist">
            <button className="control__checklist" onClick={props.onEdit}>
              <EditIcon />
              <span className="title__checklist">Редактировать</span>
            </button>
          </li>
          <li className='item_checklist'>
            <button className="control__checklist" onClick={props.openModal}>
              <DeleteIcon />
              <span className="title__checklist">Удалить</span>
            </button>
          </li>
        </ul>
    </div>
  );
}