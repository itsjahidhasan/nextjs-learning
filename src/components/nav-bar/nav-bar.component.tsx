import { NavItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export const NavBar = ({}) => {
  return (
    <div className="w-full items-center justify-items-center">
      <div className="w-300 bg-[#dedcf51f] ps-5 pe-5 pt-5 pb-5 flex justify-between rounded-sm">
        <div>
          <Link
            href={"/"}
            className="text-sm text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            <Image
              aria-hidden
              src="/vercel.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div>
          {NavItems?.map((item, idx) => {
            return (
              <Link
                href={item?.href}
                className="text-sm text-blue-500 hover:text-blue-600 transition-colors duration-300"
                key={idx}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
