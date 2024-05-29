interface NavButtonContainerProps {
  children: React.ReactNode;
}

export default function NavButtonContainer({
  children,
}: NavButtonContainerProps) {
  return (
    <div className="flex flex-col border rounded-md p-4 w-1/4 space-y-2 items-center">
      {children}
    </div>
  );
}
