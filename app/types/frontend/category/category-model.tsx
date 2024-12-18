type CategoryModel = {
  id: string;
  name: string;
  slug: string | null;
  parentId: String | null;
  createdAt: Date;
  updatedAt: Date;
};

type CategoryModelProps = {
  categories: CategoryModel[];
};
