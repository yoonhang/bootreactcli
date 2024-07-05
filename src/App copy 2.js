import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// axios 인터셉터 관련https://third9.github.io/posts/Axios%EB%8B%A4%EC%96%91%ED%95%98%EA%B2%8C_%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-interceptor/

const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        // axios({
        //     method:'GET',
        //     url:'https://jsonplaceholder.typicode.com/photos'
        // }).then(response => setPosts(response.data))

        // axios.get('https://jsonplaceholder.typicode.com/photos')
        //      .then(response => setPosts(response.data))

        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(response.data);
        }catch(error) {
            console.log(error)
        }    
    })

    return (
      
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <div>{post.title}</div>
                    <div><img src={post.thumbnailUrl}/></div>
                </li>
            ))}
        </ul>
    )
}

export default App;

