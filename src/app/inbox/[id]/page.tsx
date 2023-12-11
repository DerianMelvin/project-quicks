import { Comment, GetPostComment } from "@/types/dummyApi/GetPostComment";
import axios from "axios";
import { revalidatePath } from "next/cache";

async function getPostData(id: string) {
  const res = await axios.get(
    `https://dummyapi.io/data/v1/post/${id}/comment`,
    {
      headers: {
        "app-id": `${process.env.DUMMYAPI_APP_ID}`,
      },
    }
  );

  return res.data;
}

export default async function InboxMessage({
  params,
}: {
  params: { id: string };
}) {
  // Revalidate cached data on next page visit
  revalidatePath("/inbox/[id]", "page");

  const { data }: GetPostComment = await getPostData(params.id);

  return (
    <main className="w-[734px] h-[737px] px-8 py-6 rounded-md overflow-y-auto bg-white">
      <div className="w-full flex flex-col gap-3">
        {data.length === 0 ? (
          <div>No comments to display</div>
        ) : (
          data.map((comment: Comment) => (
            <span key={comment.id}>{comment.message}</span>
          ))
        )}
      </div>
    </main>
  );
}
