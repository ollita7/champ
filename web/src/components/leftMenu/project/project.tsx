
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss'

export interface IProjectProps {
  project: any
}

const Project: React.FC<IProjectProps> = ({project,  ...props }): ReactElement => {


  return (
      <div className="project">
        <img src={project.imgSrc} className='img'/>
        <div className="title">
            <h2>{project.title}</h2>
            <h3>{project.desc}</h3>
        </div>
      </div>
      
  );
}
export default (Project);
