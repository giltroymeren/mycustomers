type AddressCoordinates = {
  lat: number;
  lng: number;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressCoordinates;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
