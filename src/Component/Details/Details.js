import React,{useEffect,useState} from 'react';
import { useParams,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  import DeleteIcon from '@mui/icons-material/Delete';

import Post from '../Post/Post';


 

const Details = () => {
    const {id} = useParams();
        const [details, setDetails] = useState([])
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data))
}, [])

const history = useNavigate();
const close =() =>{
history('/post');
}
    
	return (
    <div className="main-details" >
    <div className="container-xl">
    <div className="row">
        <div className="col-xl-8 col-md-10 col-sm-12 m-auto">
            <div className="details">
           <DeleteIcon className="close" onClick={()=> close()} />


               <h2 className="userid">UserId<span>  {id}</span></h2>
                <h3>{details.body}</h3>
            </div>
            </div>
        </div>
    </div>
    </div>
	)
}

export default Details