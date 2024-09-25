"use client"
import Post from "@/components/post/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    const buscarPosts = async () => {
        const resposta = (await axios.get("http://localhost:8088/postagem")).data;
        setPosts(resposta);
    }

    useEffect(() => {
        buscarPosts();
    })

    return (


    <main className="grid justify-center font-poppins">
        <div className="text-center">
        <p className="text-3xl my-10 font-bold">Feed</p>
        </div>
        {posts.map((post: any) => (
        <Post
            {...post}
        />
        ))}
    </main>
    );
}