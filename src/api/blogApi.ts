import axios from 'axios';

export type BlogSummary = {
    id: string;
    title: string;
    summary: string;
};

export type BlogPost = {
    id: string;
    title: string;
    content: string;
    comments: string[];
};

/*
    We use JSONPlaceholder (https://jsonplaceholder.typicode.com/) mock APIs for prototyping. 
*/

export async function fetchBlogList(): Promise<BlogSummary[]> {
    const sample = [
        { id: '1', title: 'Understanding React', summary: 'A guide to React basics.' },
        { id: '2', title: 'Async/Await in JS', summary: 'Clean asynchronous code.' },
    ];

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data.slice(0, 10).map((post: any) => ({
        id: post.id.toString(),
        title: post.title,
        summary: post.body,
    }));
}

export async function fetchBlogPost(id: string): Promise<BlogPost> {
    const sample = {
        id,
        title: `Post ${id}`,
        content: `This is the full content for blog post ${id}.`,
        comments: [`Great post ${id}!`, `Thanks for the info.`],
    };

    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return {
        id: postResponse.data.id.toString(),
        title: postResponse.data.title,
        content: postResponse.data.body,
        comments: commentsResponse.data.map((comment: any) => comment.body),
    };
}
