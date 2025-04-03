import React from 'react';

const { useState, useEffect } = React;

const postsUrl = `https://jsonplaceholder.typicode.com/posts`;
const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=`;
// `https://jsonplaceholder.typicode.com/comments?postId=:postId`;

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

function Posts() {
    return (<div>TODO 123</div>);
}

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`${commentsUrl}${postId}`)
            .then((response) => {
                return response.json();
            })
            .then((comments_res) => {
                setComments(comments_res);
            });
    }, []);

    console.log("comments", comments);

    return (
        <div>
            <h3>Comments</h3>
            {
                comments && comments.slice(0, 5).map((comment, idx) => (
                    <div key={idx}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

// Post component:
function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(postsUrl)
            .then((response) => {
                return response.json();
            })
            .then((articles) => {
                setPosts(articles);
            });
    }, []);

    return (
        <div className="Post">
            {posts && posts.slice(0, 5).map((post, idx) => (
                <div key={idx}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Comments postId={post.id} />
                </div>
            ))}
        </div>
    );
}

export function App() {
    return (
        <div className="App">
            <Post />
        </div>
    )
}