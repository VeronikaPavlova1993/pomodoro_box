import './menuControlsChecklist.css';
import { PlusIcon } from '../../../../../../icons/PlusIcon';
import { MinusIcon } from '../../../../../../icons/MinusIcon';
import { EditIcon } from '../../../../../../icons/EditIcon';
import { DeleteIcon } from '../../../../../../icons/DeleteIcon';

interface IMenuControlsChecklistProps {
  id: number
  openModal: () => void
  onEdit: () => void
}

export function MenuControlsChecklist({ openModal, onEdit }: IMenuControlsChecklistProps) {
  
  return (
    <div className="tasks_checklist">
      <ul className="list">
          <li className="item_checklist">
            <button className="control__checklist">
              <PlusIcon />
              <span className="title__checklist">Увеличить</span>
            </button>
          </li>
          <li className="item_checklist">
            <button className="control__checklist">
              <MinusIcon />
              <span className="title__checklist">Уменьшить</span>
            </button>
          </li>
          <li className="item_checklist">
            <button className="control__checklist" onClick={onEdit}>
              <EditIcon />
              <span className="title__checklist">Редактировать</span>
            </button>
          </li>
          <li className='item_checklist'>
            <button className="control__checklist" onClick={openModal}>
              <DeleteIcon />
              <span className="title__checklist">Удалить</span>
            </button>
          </li>
        </ul>
    </div>
  );
}