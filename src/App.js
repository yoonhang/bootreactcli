import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
    const [posts, setPosts] = useState([]);

        axios({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/photos'
        }).then(response => setPosts(response.data))

        // axios.get('https://jsonplaceholder.typicode.com/photos')
        //      .then(response => setPosts(response.data))

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    //             setPosts(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <div>{post.title}</div>
                    <div><img src={post.thumbnailUrl} alt={post.title} /></div>
                </li>
            ))}
        </ul>
    );
};

export default App;
