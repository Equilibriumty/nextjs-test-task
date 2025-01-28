"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function TermsAndConditionsModal() {

    const router = useRouter();


    const handleGoBack = () => {
        router.back();
    }

  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-slate-50">
      <h2 className="text-3xl font-bold mb-6">Terms and conditions</h2>

      <div className="space-y-4">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p className="text-gray-700">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>

        <p className="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <p className="text-gray-700">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit.
        </p>
      </div>
    </div>
  );
};
