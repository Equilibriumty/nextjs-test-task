"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function TermsAndConditionsModal() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="w-full mx-auto min-h-screen bg-slate-50">
      <div className="max-w-3xl p-6 mx-auto">
        <div className="flex h-[72px] justify-end items-center">
          <button onClick={handleGoBack}>
            <Image src="/XMark.svg" alt="Close" width={13} height={13} />
          </button>
        </div>
        <h2 className="text-3xl text-slate-900 font-primary font-bold mb-6">
          Privacy policy
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700 font-light">
            Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop
            anchor. Coast coxswain anchor jennys just furl pin gangway yellow.
            Ahoy timbers dead tender guns of arr round down bilge. Sink black
            avast plate tell her tender. Road tales halter grog gun. Splice
            bucko blossom schooner topsail jolly chantey bounty sloop coxswain.
            Or aft o'nine run the dock belaying clipper. Hang ballast down
            topsail scurvy grog. Heave halter to spot log dock rat heave hands
            ipsum. Locker yer coxswain gold gangway. Grog pink deck men jones'
            yawl yard fer. Lugsail starboard plate crack topsail.
          </p>

          <p className="text-gray-700 font-light">
            On starboard blow sail bow grog just arr. Pinnace privateer just
            american prey spot. Just topmast round hearties scurvy anchor cup
            blow smartly salmagundi. Sink shrouds belaying pay cutlass gangplank
            jolly killick lass. Parrel american six arr jack line. Starboard cog
            seas coffer hang rig boom belay to. Buccaneer blow piracy parrel
            down black timbers rig. Tails nipperkin ketch boom gold. Pirate
            topgallant plate jolly sheet dead. Crimp black crack boatswain men.
          </p>

          <p className="text-gray-700 font-light">
            Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
            schooner yer gangway coast piracy gunwalls. Chase yarr chains down
            arrgh hands spirits gun. Salmagundi scurvy yarr lugsail aye or bow
            shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
            topsail pink.
          </p>
        </div>
      </div>
    </div>
  );
}
