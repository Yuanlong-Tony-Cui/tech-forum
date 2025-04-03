import { useEffect, useState } from 'react';
import { fetchBlogPost, BlogPost as BlogPostType } from '../api/blogApi';
import styles from './BlogPost.module.css';

type Props = {
	id: string;
	onBack: () => void;
};

export default function BlogPost({ id, onBack }: Props) {
	const [post, setPost] = useState<BlogPostType | null>(null);

	useEffect(() => {
		fetchBlogPost(id)
			.then(setPost);
	}, [id]); // runs after id changes

	if (!post) return <p>Loading...</p>;

	return (
		<div className={styles.container}>
			<button onClick={onBack} className={styles.backButton}>← Back</button>
			<h2 className={styles.title}>{post.title}</h2>
			<p className={styles.content}>{post.content}</p>

			<h3 className={styles.commentTitle}>Comments</h3>
			<div className={styles.commentList}>
				{post.comments.map((comment, idx) => (
					<div key={idx} className={styles.commentItem}>
						<span className={styles.commentIcon} role="img" aria-label="user">👤</span>
						<span className={styles.commentText}>{comment}</span>
					</div>
				))}
			</div>
		</div>
	);
}
