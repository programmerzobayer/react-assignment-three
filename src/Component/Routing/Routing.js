import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Post from '../Post/Post';
import Details from '../Details/Details';
import Comments from '../Comments/Comments'

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Post/>} />
				<Route path="/post" element={<Post/>} />
				<Route path="/details/id/:id" element={<Details/>} />
				<Route path="/post/details/id/:id" element={<Details/>} />
				<Route path="/comments/id/:id" element={<Comments/>} />
				<Route path="/post/comments/id/:id" element={<Comments/>} />
				<Route path="/post/comments" element={<Comments/>} />

			</Routes>
		</BrowserRouter>
	)
}

export default Routing