"use client"

import { cn, twp } from "@/src/server/utils";

export default function PrivacyPolicy() {
  return (
    <div className={cn(twp().wrapper, "mt-10 mb-20")}>
      <object className="pdf"
            data="/PodiumAI Privacy.pdf"
            width="100%"
            height="800">
    </object>
    </div>
  );
}
