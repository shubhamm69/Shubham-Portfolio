"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Update import for useRouter
import Image from "next/image";

const Dashboard = () => {
    const session = useSession();
    const router = useRouter(); // Use useRouter instead of next/navigation
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR( // Remove isLoading since it is not needed for this purpose
        `/api/posts?username=${session?.data?.user.name}`,
        fetcher
    );

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router.push("/dashboard/login");
        return null; // Return null here to prevent rendering the dashboard when unauthenticated
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const image = e.target.image.value;
        const content = e.target.content.value;

        try {
            await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    desc,
                    image,
                    content,
                    username: session.data.user.name,
                }),
            });
            mutate();
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {data?.map((post) => (
                    <div className={styles.post} key={post._id}>
                        <div className={styles.imgContainer}>
                            <Image src={post.image} alt="" width={200} height={100} />
                        </div>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <span className={styles.delete} onClick={() => handleDelete(post._id)}>
                            X
                        </span>
                    </div>
                ))}
            </div>
            <form className={styles.new} onSubmit={handleSubmit}>
                <h1>Add New Post</h1>
                <input type="text" placeholder="Title" name="title" className={styles.input} />
                <input type="text" placeholder="Desc" name="desc" className={styles.input} />
                <input type="text" placeholder="Image" name="image" className={styles.input} />
                <textarea
                    placeholder="Content"
                    name="content"
                    className={styles.textArea}
                    cols="30"
                    rows="10"
                ></textarea>
                <button className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default Dashboard;
