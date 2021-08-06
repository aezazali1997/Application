import {ClientModel} from './index'
export class AddProjectModel {
  title:string;
  subtitle:string;
  client:ClientModel;
  projectType:string;
  start:Date;
  end:Date;
  role:string;
  summary:string;
  challenge:string;
  solution:string;
  url:string;
  thumbnail:string;
  technologies:string[];
  images:string[];
  constructor(data? : Partial<AddProjectModel>)
  {
    this.title= data?.title || '';
    this.subtitle= data?.subtitle || '';
    this.client=data?.client || new ClientModel();
    this.projectType= data?.projectType || '';
    this.start= data?.start || new Date('2021-07-1');
    this.end= data?.end || new Date('2021-07-1');
    this.role= data?.role || '';
    this.summary= data?.summary || '';
    this.challenge= data?.challenge || '';
    this.solution= data?.solution || '';
    this.url= data?.url || '';
    this.thumbnail= data?.thumbnail || '';
    this.technologies= data?.technologies || [];
    this.images= data?.images || [];
    /*  Object.assign(this,data) */
  }
}