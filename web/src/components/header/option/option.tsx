import React, { ReactElement } from 'react';
import './styles.scss'
import { Link, Navigate } from 'react-router-dom';
export interface IOptionProps {
  title: string,
  options: Array<any>,
  selected: boolean,
  url: string
}

const Option: React.FC<IOptionProps> = ({ title, options,selected,url, ...props }): ReactElement => {
  const [open, setOpen] = React.useState(false);
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
   

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={`menu-item`}>
      <Link className={`title`} to={url}>
        {title}
      </Link>
      <div className={`line ${selected ? 'selected' : ''}`}></div>
    </div>
  );
}

export default (Option);
