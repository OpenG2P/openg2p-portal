import Image from "next/image";
import Link from "next/link";
import {useLocale} from "next-intl";
import {prefixBasePath} from "@/utils/path";
import {Search} from "..";
import LanguageDropDown from "./LanguageDropdown";
import ProfileDropDown from "./ProfileDropdown";

export default function Header() {
  const lang = useLocale();
  return (
    <header>
      <nav className="w-full font-fontcustom bg-no-repeat shadow-md opacity-100  bg-brand border-gray-200 p-1 lg:px-4  ">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl ">
          <Link href={`/${lang}/home`} className=" ml-2 m-1 flex items-center">
            <Image
              src={prefixBasePath("/img/logo@2x.png")}
              priority={true}
              alt="Logo"
              width={300}
              height={300}
            />
          </Link>

          <div className="flex items-center gap-6 lg:order-2 mr-10 lg:ml-0 ml-auto">
            <Search />
            <LanguageDropDown />
            <ProfileDropDown />
          </div>
        </div>
      </nav>
    </header>
  );
}
