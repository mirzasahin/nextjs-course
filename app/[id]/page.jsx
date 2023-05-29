import React from 'react'

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const Page = async ({ params }) => {

    const data = await fetchPosts();
    return (
        <div>Page
            <div>{params.id}</div>
            <div>{data[0].title}</div>
        </div>
    )
}

export default Page

export async function generateStaticParams(){
    const posts = await fetchPosts();
    console.log(posts)
    return (posts.map(post => ({id: post.id.toString()}))) 
}