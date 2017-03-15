export class Ticket {

  constructor(public id:number,public ticketStatus:string,public description:string,public creationTime:string,public estimates:string,public creator:string,public title:string,
  public imagePath?:string){

  }
}
