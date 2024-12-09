import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const BaseLogo = ({ link, className }: LogoModel) => {
  return (
    <Link href={link}>
      <Image
        src="drizzle-orm_dark.svg"
        width={100}
        height={0}
        alt="Logo"
        className={cn(className)}
      />
    </Link>
  );
};
export default BaseLogo;
