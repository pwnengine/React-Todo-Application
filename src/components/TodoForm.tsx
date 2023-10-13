import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import ListItemWrapper from './ListItemWrapper';
//<input type="text" className="todo-input" placeholder="Enter A Task" />
const TodoForm = () => {
  const todo_obj = (task_name: string, task_date: string) => {
    return { task_name, task_date };
  };
  
  const [ todo_list, set_todo_list ] = useState([todo_obj('Add A Task', 'NOW!')]);

  const [text_value, set_text_value] = useState('');
  const [date_value, set_date_value] = useState('');

  const get_input_text = (value: string) => {
    set_text_value(value);
  };
  const get_input_date = (value: string) => {
    set_date_value(value);
  };

  const [seed, set_seed ] = useState(1); // thanks stackoverflow
  const click = () => {
    todo_list.push(todo_obj(text_value, date_value));
    set_todo_list(todo_list);
    console.log(todo_list);

    set_seed(Math.random());
  };

  const handle_delete = (item_name: string) => {
    const new_item_list = todo_list.filter(val => {
      if(val.task_name === item_name) {
        return false;
      }
      return true;
    });

    set_todo_list(new_item_list);
    set_seed(Math.random());
  };
  
  return (
    <form className="todo-form">
      <center>
      <Input place_holder="Add Todo" on_change={get_input_text} />
      <Input input_type="date" place_holder="Add Todo" on_change={get_input_date} />
      
      <Button style="light" on_click={click}>Add</Button>

      <ListItemWrapper key={seed} items={todo_list} handle_delete_item={handle_delete} />
      </center>
    </form>
  )
}

export default TodoForm