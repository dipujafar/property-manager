"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Container from "../Container";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { conpanyLinks, helpLinks, resourcesLinks } from "./utils";
const socialMediaIcon = [
  {
    icon: <FaTwitter size={18} />,
    link: "#",
  },
  {
    icon: <FaFacebook size={18} />,
    link: "#",
  },
  {
    icon: <FaInstagram size={18} />,
    link: "#",
  },
  {
    icon: <FaGithub size={18} />,
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#D6D6D6]">
      <div className="pb-20.5 lg:pt-22.5 ">
        <Container className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5  md:flex-row ">
            <div className="col-span-2">
              <Link href={"#"}>
                <Image
                  src={logo}
                  alt="logo"
                  className="w-auto object-cover "
                  placeholder="blur"
                  blurDataURL={"/blurImage.jpg"}
                />
              </Link>
              <p className="lg:mt-5 mt-3 text-sm font-normal text-[#52525B] max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                sodales in volutpat ullamcorper amet adipiscing fermentum.
              </p>
              <div className=" lg:mt-5 mt-3 flex flex-wrap gap-4">
                {socialMediaIcon.map((item) => {
                  return (
                    <Link
                      className="hover:bg-slate-50 duration-150  hover:text-black p-2.5 rounded-full"
                      target="_blank"
                      href={item?.link}
                    >
                      {item?.icon}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="space-y-5">
                <p className="text-primary-black font-bold leading-normal">
                  Company
                </p>
                <ul className="space-y-4">
                  {conpanyLinks.map((item) => {
                    return (
                      <li>
                        <Link
                          className={
                            "text-primary-black hover:text-deutziawhite/80 font-inter text-sm font-medium hover:font-semibold duration-150"
                          }
                          href={item?.link}
                        >
                          {item?.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-5">
                <p className="text-primary-black font-bold leading-normal">
                  Help
                </p>
                <ul className="space-y-4">
                  {helpLinks.map((item) => {
                    return (
                      <li>
                        <Link
                          className={
                            "text-primary-black hover:text-deutziawhite/80 font-inter text-sm font-medium hover:font-semibold duration-150"
                          }
                          href={item?.link}
                        >
                          {item?.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-5">
                <p className="text-primary-black font-bold leading-normal">
                  Resources
                </p>
                <ul className="space-y-4">
                  {resourcesLinks.map((item) => {
                    return (
                      <li>
                        <Link
                          className={
                            "text-primary-black hover:text-deutziawhite/80 font-inter text-sm font-medium hover:font-semibold duration-150"
                          }
                          href={item?.link}
                        >
                          {item?.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#230B41] text-center text-white py-4.5">
        © Copyright {new Date().getFullYear()}, All Rights Reserved by XYz
      </div>
    </footer>
  );
}
