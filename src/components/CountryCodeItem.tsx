import * as React from "react";
import Image from "next/image";
import { Country } from "@/components/CountryCodeSelector";
import { useFormStore } from "@/store/formStore";
import { useModalStore } from "@/store/modalStore";

type CountryCodeItemProps = {
  country: Country;
};

export const CountryCodeItem: React.FC<CountryCodeItemProps> = ({
  country,
}) => {
  const { phoneVerification, setPhoneVerificationData } = useFormStore();

  const { close } = useModalStore()

  const handleClick = () => {
    setPhoneVerificationData({
      ...phoneVerification,
      countryCode: country.code,
    });
    close()
  };

  return (
    <div
      onClick={handleClick}
      className="flex hover:cursor-pointer overflow-hidden gap-2 items-center py-4 pr-4 pl-6 w-full min-h-[64px] whitespace-nowrap hover:bg-[#021626]/[4%]"
    >
      <div className="flex gap-2 items-center self-stretch my-auto">
        <Image
          src={`https://flagcdn.com/w40/${country.shorthand.toLowerCase()}.png`}
          alt={`${country} flag`}
          width={32}
          height={32}
          className="flex rounded-[32px] min-h-[32px]"
        />
        <div className="self-stretch my-auto w-10">{country.code}</div>
      </div>
      <div className="flex-1 shrink self-stretch my-auto basis-0">
        {country.country}
      </div>
    </div>
  );
};
