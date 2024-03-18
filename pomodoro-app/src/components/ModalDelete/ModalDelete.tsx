import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import './modalDelete.css';
import { CloseIcon } from '../../icons/CloseIcon';
import { delTask } from '../../redux/slice/tasks';

interface IModalDeleteProps {
 id: number;
 closeModal: () => void;
}

export function ModalDelete(props: IModalDeleteProps) {
 const dispatch = useDispatch();
 const node = document.getElementById('modal-root');
 if (!node) return null;

 return ReactDOM.createPortal(
  <div className="modal">
   <div className="content">
    <button className="buttonClose" onClick={props.closeModal}>
     <CloseIcon />
    </button>

    <h2 className="title">Удалить задачу?</h2>

    <button
     className="buttonDelete"
     onClick={() => dispatch(delTask(props.id))}
    >
     Удалить
    </button>

    <button className="buttonCancel" onClick={props.closeModal}>
     Отмена
    </button>
   </div>
  </div>,
  node
 );
}
