export interface itemCardList {
  title: string;
  img: string;
  description: string;
}


export interface itemCardProject {
  title: string;
  img: string;
  description: string;
  textcolor: string;
  author: string;
}



export interface ProductType {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}