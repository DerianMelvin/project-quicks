import { Comment, GetPostComment } from "@/types/dummyApi/GetPostComment";
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";

type ChatListType = {
  postComment: GetPostComment;
};

export default function ChatList({ postComment }: ChatListType) {
  const { data } = postComment;

  const uniqueOwnerIdList = data
    .map((comment) => comment.owner.id)
    .filter((val, i, self) => self.findIndex((v) => v === val) === i);

  return data.length === 0 ? (
    <EmptyChat />
  ) : (
    data.map((comment: Comment) => (
      <ChatBox key={comment.id} comment={comment} ownerIdList={uniqueOwnerIdList} />
    ))
  );
}
