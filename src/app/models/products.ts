export interface IProductsList {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string[];
  cover: string;
  description: string[];
  fotos: string[];
  tags: string[][];
}

export interface IProductTagsList {
  productTags: string[][];
}
