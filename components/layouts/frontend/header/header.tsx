import prisma from "@/lib/prisma.db";
import NavCategory from "./_components/nav-category/nav-category";
import Navbar from "./_components/navbar/navbar";

export const Header = async () => {
  const categories = await prisma.category.findMany();

  return (
    <header>
      <Navbar categories={categories} />
      <NavCategory categories={categories} />
    </header>
  );
};
export default Header;
