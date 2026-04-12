import { cn } from "@/lib/utils";

type TProps = {
  title: string;
  subTitle: string;
  className?: string;
};

export default function SectionTitle({ title, subTitle, className }: TProps) {
  const titleLength = title?.split(" ")?.length;
  return (
    <div className={cn("lg:space-y-5 space-y-3 max-w-184.5 text-black text-center mx-auto text-sm", className)}>
      <h4 className="lg:text-[32px] text-2xl font-bold">
        {title
          ?.split(" ")
          ?.slice(0, titleLength - 1)
          ?.join(" ")}{" "}
        <span className="text-primary-color">
          {title
            ?.split(" ")
            ?.slice(titleLength - 1)
            ?.join(" ")}
        </span>
      </h4>
      <p className=" font-medium">{subTitle}</p>
    </div>
  );
}
