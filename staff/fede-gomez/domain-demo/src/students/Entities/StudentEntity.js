import { Entity } from "@s-ui/domain";

//we have agreed that every Entity has to have a toJSON method
// since it Extends from Entity, which entends also from another class, every argument passed when ...
// ...instanciated will be a property of the new instance. 
//Also it will come with a toJSON() method

class StudentEntity extends Entity {}

export default StudentEntity;
