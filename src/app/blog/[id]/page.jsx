import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>this is title</h1>
          <p className={styles.desc}>
            this is short description
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.unsplash.com/photo-1690649063909-6f56fb0e1a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>john doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1691064058419-0d1df7a7b9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          this is my paragraph description
        </p>
      </div>
    </div>
  );
};

export default BlogPost;