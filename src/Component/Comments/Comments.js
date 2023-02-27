import React,{useEffect,useState} from 'react';
import { useParams,Link } from "react-router-dom";
import Comment from '../Comment/Comment';

const Comments = () => {
	const {id} = useParams();
	
	      const [comments, setComments] = useState([])
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data => setComments(data))
}, [])
	return (
		<div>
	
		{comments.map(cm => <Comment comment={cm}></Comment>)}
           
		</div>
		
		
		
	)
}

export default Comments