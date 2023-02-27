import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Post.css'
import { Link } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState([])
useEffect(() => {
	fetch(`https://jsonplaceholder.typicode.com/posts`)
	.then(res => res.json())
	.then(data => setPost(data))
}, [])

	return (
		<div className='container-xl'>
		<div className="row">
		<div className="col-xl-8 col-md-10 col-sm-12 m-auto ">
			{post.map(ps => 
                 
				<div className="">
                <div className="post">
				<h2 className="id">{ps.id}</h2>

				<div className="title">
				<span>Post Title <h2>{ps.title}</h2></span>
				</div>

				</div>
                <div className="buttons">
               <Link className="link" to={`details/id/${ps.id}`}><button className='first'>Details</button></Link>
				<Link className="link" to={`comments/id/${ps.id}`}><button  className='mid'>Comment</button></Link>
				<Link className="link" to=""><button  className='last'>Share</button></Link>
				
                </div>
				
				</div>
                   
             
              
              
          )}
		</div>
		</div>
		</div>
	)
}

export default Post