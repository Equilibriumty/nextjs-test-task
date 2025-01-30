"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

export const Header = () => {
  const router = useRouter();

  const pathname = usePathname();
  const withNavigation = pathname !== "/";

  return (
    <header
      className={clsx("flex flex-row justify-center items-center h-[72px]", {
        "justify-between": withNavigation,
      })}
    >
      {withNavigation && (
        <button
          className="animate-in duration-200 fade-in"
          onClick={() => router.back()}
          aria-label="Go back to previous page"
        >
          <Image src="/ArrowLeft.svg" alt="" width={14} height={14} />
        </button>
      )}
      <Image
        src="/Logo.svg"
        alt="Company Logo"
        width={64}
        height={64}
        className="w-16 h-16 object-contain"
      />

      {withNavigation && <div className="w-[14px] h-[14px] invisible" />}
    </header>
  );
};
