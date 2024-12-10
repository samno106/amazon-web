type CategoryModel={
    name:string;
    code:string;
    status?:boolean;
    createdAt?:Date;
}

type CategoryModelProps={
    categories:CategoryModel[]
}