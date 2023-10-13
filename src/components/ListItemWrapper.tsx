import { Fragment, useState } from 'react'
import ListItem from './ListItem';

const todo_obj = (task_name: string, task_date: string) => {
  return { task_name, task_date };
}

const todo_list = [
  todo_obj('Task', 'Task Date')
];

interface props {
  items: typeof todo_list;

  handle_delete_item: (name_to_delete: string) => void;
}

const ListItemWrapper = ({ items, handle_delete_item }: props) => {
  const sent_items = useState(items);

  const delete_list_item = (name_of_item: string) => {
    handle_delete_item(name_of_item);
  };

  return (
    <Fragment>
      <ol className="list-group list-group-numbered"> 
        {
          sent_items[0].map((val) => { 
            return(
              <ListItem task_name={val.task_name} task_date={val.task_date} handle_delete_click={delete_list_item} />
            );
          })
        }
      </ol>
    </Fragment>
  )
}

export default ListItemWrapper