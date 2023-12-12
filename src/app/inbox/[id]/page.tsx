import ChatList from "@/components/pages/inbox/[id]/ChatList";
import MessageHeader from "@/components/pages/inbox/[id]/MessageHeader";
import MessageInput from "@/components/pages/inbox/[id]/MessageInput";
import { Post } from "@/types/dummyApi/GetPost";
import { GetPostComment } from "@/types/dummyApi/GetPostComment";
import axios from "axios";
import { revalidatePath } from "next/cache";

type GetPostDataType = {
  post: Post;
  postComment: GetPostComment;
};

async function getPostData(id: string) {
  const config = {
    headers: {
      "app-id": `${process.env.DUMMYAPI_APP_ID}`,
    },
  };

  const post = await axios.get(
    `https://dummyapi.io/data/v1/post/${id}`,
    config
  );

  const postComment = await axios.get(
    `https://dummyapi.io/data/v1/post/${id}/comment`,
    config
  );

  return { post: post.data, postComment: postComment.data };
}

export default async function InboxMessage({
  params,
}: {
  params: { id: string };
}) {
  // Revalidate cached data on next page visit
  revalidatePath("/inbox/[id]", "page");

  const { post, postComment }: GetPostDataType = await getPostData(params.id);

  return (
    <main className="w-[734px] h-[737px] flex flex-col rounded-md overflow-y-auto bg-white">
      <MessageHeader post={post} postComment={postComment} />

      <div className="w-full grow flex flex-col items-center gap-3 px-[29px] py-3 overflow-y-auto">
        <ChatList postComment={postComment} />
      </div>

      <MessageInput />
    </main>
  );
}
