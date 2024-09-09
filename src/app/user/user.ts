export class User {
    id?: number;
    userid?: string;
    uname?: string;
    email?: string;
    upassword?: string;
    urole?: string;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }