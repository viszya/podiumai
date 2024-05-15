import { cn, twp } from "@/src/server/utils";

export default function PrivacyPolicy() {
  return (
    <div className={cn(twp().wrapper, "mt-10 mb-20")}>
      <object className="pdf"
            data="/PodiumAI Terms.pdf"
            width="800"
            height="500">
    </object>
    </div>
  );
}
