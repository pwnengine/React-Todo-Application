import { ReactNode } from 'react'
import { Fragment } from 'react'

interface props {
  children?: ReactNode;
  style?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  size_type?: 'big' | 'small'; 

  on_click: () => void;
}

const Button = ({ children='button', style='primary', size_type='big', on_click }: props) => {
  return (
    <Fragment>
      <button className={size_type === 'small' ? 'small-btn' : 'btn btn-outline-' + style} onClick={ event => {
          event.preventDefault();
          on_click();
        }}>
        {children}
      </button>
    </Fragment>
  )
}

export default Button