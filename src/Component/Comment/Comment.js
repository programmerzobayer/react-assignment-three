import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Comment.css';
const Comment = (props) => {
	const {email,name, body}= props.comment ;
	console.log(props.comment)
	return (
		<div className='container-xl'>
       <div className="row">
       	<div className="col-xl-8 col-md-10 col-sm-12 m-auto">
       		<div className="comment ">
       			<h3>Name: {name}</h3>
       			<h4>Email: {email}</h4>
       			<small>{body}</small>
       		</div>
       	</div>
       </div>
		</div>
	)
}

export default Comment