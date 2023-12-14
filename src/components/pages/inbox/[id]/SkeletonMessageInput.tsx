export default function SkeletonMessageInput() {
  return (
    <form className="flex items-end gap-3 px-[29px] pb-[19px] pt-3">
      <div className="w-full flex">
        <label htmlFor="chatInput" className="sr-only">
          Type a new message
        </label>
        <input
          name="chatInput"
          placeholder="Type a new message"
          className="w-full px-4 py-[7px] resize-none border rounded-md border-primary-gray placeholder-[#333333]"
        />
      </div>
      <button className="min-w-fit px-[21px] py-2 rounded-md font-bold bg-primary-blue text-white">
        Send
      </button>
    </form>
  );
}
