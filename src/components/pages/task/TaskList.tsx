import axios from "axios";
import Task from "./Task";
import { GetPost } from "@/types/dummyApi/GetPost";

async function getPostData() {
  const res = await axios.get(
    "https://dummyapi.io/data/v1/post?page=0&limit=5",
    {
      headers: {
        "app-id": `${process.env.DUMMYAPI_APP_ID}`,
      },
    }
  );

  return res.data;
}

export default async function TaskList() {
  const { data }: GetPost = await getPostData();

  return (
    <div className="flex flex-col">
      {data.map((post) => (
        <Task key={post.id} post={post} />
      ))}
    </div>
  );
}
