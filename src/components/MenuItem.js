import { Link } from 'react-router-dom';

export const MenuItem = (props) =>{

  return (
    <Link to={props.route} className="default-link"> {props.item} </Link>
  )

}
