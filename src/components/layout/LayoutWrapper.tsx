import NavigationLinks from "./NavigationLinks";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full px-[34px] py-[27px] flex flex-col-reverse items-end gap-5">
      <NavigationLinks />

      {children}
    </div>
  );
}
