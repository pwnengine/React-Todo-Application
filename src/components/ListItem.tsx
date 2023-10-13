import { Fragment } from 'react'
import Button from './Button';

interface props {
  task_name: string;
  task_date: string;

  handle_delete_click: (task_name: string) => void;
}

const ListItem = ({ task_name, task_date, handle_delete_click }: props) => {
  return (
    <Fragment>
      <li className="list-group-item d-flex justify-content-between align-items-start" key={task_name}>
        <div className="ms-3 me-auto left-align">
          <div className="fw-bold">{task_name}</div>
          {task_date}
        </div>

        <Button size_type="small" style="success" on_click={() => handle_delete_click(task_name)}>Completed</Button>
      </li>
    </Fragment>
  )
}

export default ListItem