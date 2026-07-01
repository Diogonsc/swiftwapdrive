import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

const BrowserFrame = ({ children, url = "app.swiftwapdrive.com", className }: BrowserFrameProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-card",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 rounded-md border border-border bg-background/60 px-3 py-1">
          <p className="truncate text-center text-xs text-muted-foreground">{url}</p>
        </div>
      </div>
      <div className="bg-background/40 p-1">{children}</div>
    </div>
  );
};

export default BrowserFrame;
