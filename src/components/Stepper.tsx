import * as React from "react";
import { usePathname } from "next/navigation";

const activeStepToRoute = {
  1: "/",
  2: "/phone-validation",
};

export const Stepper = () => {
  const pathname = usePathname();

  const steps = Object.keys(activeStepToRoute);
  return (
    <div className="flex gap-1 items-center">
      {steps.map((_, index) => {
        const isActive =
          activeStepToRoute[(index + 1) as keyof typeof activeStepToRoute] ===
          pathname;
        return (
          <React.Fragment key={index}>
            <div
              className={`self-stretch my-auto w-8 h-8 min-h-[32px] rounded-[48px] flex items-center justify-center ${
                isActive
                  ? "bg-btnPrimary text-slate-50"
                  : "bg-slate-900 bg-opacity-15 text-slate-900 text-opacity-20"
              }`}
              role="status"
              aria-current={isActive ? "step" : undefined}
              aria-label={`Step ${index + 1} ${
                isActive ? "active" : "inactive"
              }`}
            >
              <span className="font-primary font-bold text-[16px]">
                {index + 1}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex shrink-0 w-1 h-1 rounded-full bg-slate-900 bg-opacity-10" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
