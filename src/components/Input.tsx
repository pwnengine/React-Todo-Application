import { Fragment } from 'react'

interface props {
  place_holder?: string;
  input_type?: 'text' | 'date';
  
  on_change: (value: string) => void;
}

const Input = ({ place_holder='input element', input_type='text', on_change }: props) => {
  return (
    <Fragment>
      <input type={input_type} aria-describedby="addon-wrapping" className={'form-control'} placeholder={place_holder} onChange={(event) => {
          
          on_change(event.target.value);
      
        }
      } />
    </Fragment>    
  )
}

export default Input