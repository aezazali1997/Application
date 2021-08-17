export class ClientModel {
  name:string;
  logo:string;
  constructor(data? : Partial<ClientModel>)
  {
    this.name=data?.name || '';
    this.logo=data?.logo || '';
  }
}