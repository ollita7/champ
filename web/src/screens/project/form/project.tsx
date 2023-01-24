import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../../navigation/constants';
import { IProject, useCreateProject, useEditProject, useGetProject } from '../../../network/services/project/project.service';
import './styles.scss';

export interface IProjectProps {

}

const Project: React.FC<IProjectProps> = ({ ...props }): ReactElement => {
  let { id } = useParams();
  const navigate = useNavigate();
  const createMutation = useCreateProject();
  const editMutation = useEditProject();
  const { data, isLoading, isError, isSuccess } = useGetProject(id);
  const [project, setProject] = useState<IProject>({
    name: '',
  });
  const names = [
    'Risk 1',
    'Risk 2',
    'Risk 3',
    'Risk 4'
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      setProject(data[0]);
    }
  }, [data]);



  const changeInput = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name == 'risks') {
      typeof value === 'string' ? value = value.split(',') : value
    }
    setProject(values => ({ ...values, [name]: value }))
  }

  const resolve = (e) => {
    e.preventDefault()
    if (id) {
      editMutation.mutate(project, {
        onSuccess: async data => navigate(ROUTES.HOME),
      });
    } else {
      createMutation.mutate(project, {
        onSuccess: async data => navigate(ROUTES.HOME),
      });
    }

  }

  return (
    <div id='project-container'>
      <form className='form-project' onSubmit={resolve}>
        <div className='row'>
          <label className='title'>
            {id ? 'Edit project' : 'Create Project'}
          </label>
        </div>
        <div className='row'>
          <div className='row'>
            <TextField className='input' label="Name" variant="outlined" name="name" value={project.name} onChange={changeInput} />
            <FormControl className='input'>
              <InputLabel id="risk">Risk</InputLabel>
              <Select

                labelId="risk"
                id="risk"
                multiple
                value={[]}
                name="risks"
                onChange={changeInput}
                input={<OutlinedInput label="Risk" />}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className='row'>
            <TextField className='input score' label="Security Score" variant="outlined" type="number" name="securityScore" value={undefined} onChange={changeInput} />
            <TextField className='input score' label="Scale Score" variant="outlined" type="number" name="scaleScore" value={undefined} onChange={changeInput} />
            <TextField className='input score' label="Maintainability Score" variant="outlined" type="number" value={undefined} name="maintainabilityScore" onChange={changeInput} />
          </div>

        </div>
        <div className='row'>
          <Button variant="contained" type="submit">{id ? 'Edit' : 'Create'}</Button>
        </div>



      </form>
    </div>
  )
}
export default (Project);
