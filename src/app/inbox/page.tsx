import MessagePreview from "@/components/pages/inbox/MessagePreview";
import SearchBar from "@/components/pages/inbox/SearchBar";
import axios from "axios";
import { GetPost, Post } from "@/types/dummyApi/GetPost";

async function getPostData() {
  const res = await axios.get(
    "https://dummyapi.io/data/v1/post?page=0&limit=10",
    {
      headers: {
        "app-id": `${process.env.DUMMYAPI_APP_ID}`,
      },
    }
  );

  return res.data;
}

export default async function InboxPage() {
  const { data }: GetPost = await getPostData();

  return (
    <main className="w-[734px] h-[737px] px-8 py-6 rounded-md overflow-y-auto bg-white">
      <SearchBar />

      {data.map((post: Post) => (
        <MessagePreview key={post.id} post={post} />
      ))}
    </main>
  );
}
