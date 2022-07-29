export class User {
  //atributos
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  password: string;
  confirmPassword: string;

  constructor(
    _id = '',
    email = '',
    firstName = '',
    lastName = '',
    isActive = true,
    password = '',
    confirmPassword = ''
  ) {
    //inicializacion de losatributos cuando tengan un valor

    this._id = _id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
