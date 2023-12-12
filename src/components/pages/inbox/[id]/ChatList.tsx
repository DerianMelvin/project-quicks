import { Comment, GetPostComment } from "@/types/dummyApi/GetPostComment";
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";

type ChatListType = {
  postComment: GetPostComment;
};

export default function ChatList({ postComment }: ChatListType) {
  const { data } = postComment;

  return data.length === 0 ? (
    <EmptyChat />
  ) : (
    data.map((comment: Comment) => (
      <ChatBox key={comment.id} comment={comment} />
    ))
  );
}
