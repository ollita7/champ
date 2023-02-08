import './ModalContainer.scss'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type IProps = {
    onShowModal: () => any,
    children: any
}

const ModalContainer = ({ children, onShowModal }: IProps) => {
    const modalRoot = document.getElementById('modal-root') as HTMLElement;
    const el = document.createElement('div');
    
    useEffect(() => {
        if (modalRoot) {
            modalRoot.appendChild(el);
            return () => {
                modalRoot.removeChild(el);
            };
        }
    }, [el, modalRoot]);

    const onkeydown = (event: any) => {
        return event.keyCode === 27 && onShowModal();
    }

    return ReactDOM.createPortal(
        <div className="modal" onKeyDown={onkeydown}>
            {children}
        </div>,
        modalRoot
    );
};

export default ModalContainer;
