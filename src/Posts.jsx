import { use } from "react"

function Post({post}) {
    return (
        <div className="card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise);

    return (
        <div className="card">
            <h2>All Posts are here: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}