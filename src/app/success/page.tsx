import Link from "next/link";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F6FAFE]">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-start size-[120px]">
        <Image src="/Check.svg" alt="Checkmark" width={100} height={100} />
        </div>
        <h1 className="text-center font-primary text-2xl font-bold text-slate-900">
          Congratulations
        </h1>
        <p className="font-secondary font-light  text-[#021626]">Welcome to your very own 25</p>
        <Link className="font-secondary font-bold text-btnPrimary" href={"/"}>
          Back to start
        </Link>
      </div>
    </div>
  );
}
