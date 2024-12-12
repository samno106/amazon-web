type CategoryModel = {
  name: string;
  slug: string;
  createdAt?: Date;
};

type CategoryModelProps = {
  categories: CategoryModel[];
};
