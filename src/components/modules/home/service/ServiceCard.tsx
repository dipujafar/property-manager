import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TService } from "@/types";
import Image from "next/image";



export default function ServiceCard({ service }: { service: TService }) {

    const { title, icon, description } = service || {};

    const titleArr = title?.split(" ");
    const titleLength = titleArr?.length;

    return (
        <Card
            key={service.title}
            className=" md:py-12 py-8 rounded-md hover:ring-0 ring-[#FAC4D2] hover:border-0   transition-shadow hover:shadow-[0_8px_30px_#D7CDCF78] cursor-pointer duration-200 ease-in-out"
        >
            <CardContent className="  lg:space-y-8 space-y-6 md:px-8.5 px-6">
                <Image
                    src={icon}
                    width={1200}
                    height={1200}
                    alt="icon"
                    className=" w-auto h-auto  object-contain"
                />
                <div className="space-y-3.5">
                    <div className="text-2xl font-bold text-[#1E1E1E]">
                        <h3>
                            {titleArr?.slice(0, titleLength - 1)?.join(" ")}
                        </h3>
                        <h3>
                            {titleArr?.slice(titleLength - 1, titleLength)?.join(" ")}
                        </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-black font-medium">
                        {description}
                    </p>
                </div>
                <div>
                    <Button
                        variant="outline"
                        className="mt-2 rounded-full border-primary-color px-6 py-4.5 text-primary-color hover:bg-primary-color hover:text-white"
                    >
                        Read More
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
