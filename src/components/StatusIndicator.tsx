import * as React from "react";
import { StatusIndicatorProps } from "./types";

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  number,
  isActive,
}) => (
  <div
    className={`self-stretch my-auto w-8  h-8 min-h-[32px] rounded-[48px] flex items-center justify-center ${
      isActive
        ? "bg-sky-600 text-slate-50"
        : "bg-slate-900 bg-opacity-15 text-slate-900 text-opacity-20"
    }`}
    role="status"
    aria-current={isActive ? "step" : undefined}
    aria-label={`Step ${number} ${isActive ? "active" : "inactive"}`}
  >
    <span className="font-primary font-bold text-[16px]">{number}</span >
  </div>
);
