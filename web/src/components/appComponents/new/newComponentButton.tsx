import AddCircleIcon from '@mui/icons-material/AddCircle';
import './styles.scss'

type IProps = {
  onShowComponentModal?: () => any,
}

const NewComponentButton = ({ onShowComponentModal }: IProps) => {
  return <div className='new-component-button' onClick={onShowComponentModal}>
    Components <AddCircleIcon />
  </div>
};

export default NewComponentButton;
