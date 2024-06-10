"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import Heads from '../components/header';
import Foots from '../components/footer';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        //console.log('Fetched data:', response.data.posts);
        setData(response.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
        <Heads>
        </Heads>
        {data.map((post, index) => (
            <a key={index} href={`/posts/${post.id}`}>
              <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto m-10 p-10">
                  <h1 className="text-2xl">{post.title}</h1>
                  <p className="mt-5">{post.body}</p>
                  <p className="mt-5">Tags: </p>
                  {post.tags.map((element, index) => (
                    <div key={index}>
                        <span className="bg-slate-950 rounded-lg">{element}</span>
                    </div>
                 ))}
                  <p className="mt-5">Views: {post.views}</p>
                  <p className="mt-5">Votes: {post.reactions.likes - post.reactions.dislikes}</p>
                  <p className="mt-5">User {post.userId}</p>
              </div>
            </a>
          ))}
        <Foots></Foots>
      </div>
  );
};

export default Posts;
