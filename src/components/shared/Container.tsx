import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string
}) => {
  return (
    <div
    id={id}
      className={cn(
        "mx-auto max-w-325 px-4 md:px-5 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
