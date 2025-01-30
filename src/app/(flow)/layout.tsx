import { Header } from "@/components/Header";

export default function FlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col mx-auto w-full max-w-[480px] px-6 py-6">
        <Header />
        {children}
      </div>
  );
}
