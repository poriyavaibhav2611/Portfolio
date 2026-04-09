import { cn } from "../../lib/utils";

export function Container({ className, children }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

