import ProductInterface from "../Interfaces/ProjectInterface";

class Product implements ProductInterface{
       id: number;
       projectname: string;
       projectdescription: string;
       assigneduser: string;
       status: string;

      constructor(projectname:string, projectdescription: string, assigneduser:string,status: string)
        {
            this.id=this.generateid()
            this.projectname=projectname
            this.projectdescription=projectdescription
            this.assigneduser=assigneduser
            this.status=status
        }
        generateid(){
          let id=Math.random()
          let finalid=Math.abs(id)+1
          return finalid
        }
}
export default Product