export class Product {
    //atributos
    _id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    image: string;
  
    constructor(
      _id = '',
      name = '',
      price = 0,
      description = '',
      stock = 0,
      image = '',
    ) {
      //inicializacion de los atributos cuando tengan un valor
  
      this._id = _id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.stock = stock;
      this.image = image;
    }
  }
  