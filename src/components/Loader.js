import LoadingIcon from '../assets/loader-icon.svg';


export default function Loader(){
  return (
    <div>
      <img id="loader1" alt="loader" src={LoadingIcon}/>
      <img id="loader2" alt="loader" src={LoadingIcon}/>
    </div>
  )
}
