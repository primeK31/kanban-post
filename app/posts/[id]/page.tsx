'use client'

import Heads from "@/app/components/header";
import Foots from "@/app/components/footer";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";


function PostDetail() {

    const [data, setData] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
          if (id) {
            try {
              const response = await axios.get(`https://dummyjson.com/posts/${id}`);
              setData(response.data);
            } catch (error) {
                console.error(error);
            }
          }
        };
    
        fetchData();
      }, [id]);

    return(
        <div>
        <Heads />
        <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto m-10 p-10">
                  <h1 className="text-2xl">{data?.title}</h1>
                  <p className="mt-5">{data?.body}</p>
                  <p className="mt-5">Tags: </p>
                  {data?.tags.map((element, index) => (
                    <div key={index}>
                        <span className="bg-slate-950 rounded-lg">{element}</span>
                    </div>
                 ))}
                  <p className="mt-5">Views: {data?.views}</p>
                  <p className="mt-5">Votes: {data?.reactions.likes - data?.reactions.dislikes}</p>
                  <p className="mt-5">User {data?.userId}</p>
              </div>
        <Foots />
      </div>
    )
}

export default PostDetail;
