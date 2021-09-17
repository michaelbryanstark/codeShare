import React, { useState, useEffect } from 'react'
import * as PostService from '../../../api/PostService'

const MyPosts = ({user}) => {

    const [myPosts, setMyPosts] = useState([]);
    const [heading] = useState(['Title', 'High Vote'])

    async function fetchPosts() {
        let res = await PostService.getAll();
        console.log("POST SERVICE RESPONSE: ", res.data);
        console.log(user)

        const posts = []
        if (res.status === 200) {
            res.data.data.forEach((post, index) => {
                if (post.author._id === user._id) {
                    // console.log(post)
                    posts.push([post.title, post.likes])
                }
            })
            
            setMyPosts(posts);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []); //eslint-disable-line

    return (
        <div>
            <h1>My Posts</h1>

            <Table heading={heading} body={myPosts} />

        </div>
    )
}

const Table = ({heading, body}) => {
    return (
        <table>
            <thead>
                <tr>
                    {heading.map((head) => <th>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {body.map(row => <TableRow row={row} />)}
            </tbody>
        </table>
    )
}

const TableRow = ({row}) => {
    return (
        <tr>
            {row.map(val => <td>{val}</td>)}
        </tr>
    )
}

export default MyPosts
