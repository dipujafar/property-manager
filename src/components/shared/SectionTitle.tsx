import React from "react";

type TProps = {
  title: string;
  subTitle: string;
};

export default function SectionTitle({ title, subTitle }: TProps) {
  const titleLength = title?.split(" ")?.length;
  return (
    <div className="lg:space-y-5 space-y-3 max-w-184.5 text-black text-center mx-auto">
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
      <p className="text-sm font-medium">{subTitle}</p>
    </div>
  );
}
