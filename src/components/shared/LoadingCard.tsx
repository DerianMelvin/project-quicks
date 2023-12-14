import LoadingIcon from "../icons/LoadingIcon";

export default function LoadingCard({ title }: { title: string }) {
  return (
    <div className="grow flex flex-col items-center justify-center gap-1 text-center">
      <div className="animate-spin">
        <LoadingIcon />
      </div>
      <span className="font-bold">{title}</span>
    </div>
  );
}
