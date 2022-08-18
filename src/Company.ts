import faker from "faker";

export class Company {
  companyName: string;
  companyPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `<div><h1>Company Name: ${this.companyName}</h1>
    <h3>Catchprase: ${this.companyPhrase}</h3></div>`;
  }
}
