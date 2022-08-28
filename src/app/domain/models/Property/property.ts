import { propertyRegistered } from "./propertyregistered";

export class Property {
    title!: String;
    city!: number;
    zone!: number;
    propertyType!: number;
    bussinessType!: number;
    mainImage!: String;
    ownerId!: String;
    value!: number;
    shortDescription!: String;
    description!: String;
    status!: number
}

export class propertyResponse {
    property!: propertyRegistered;    
}

export class PropertiesResponse {
    properties!: Property[];
}

export class propertyResponsebyId {
    title!: String;
    city!: number;
    zone!: number;
    propertyType!: number;
    bussinessType!: number;
    mainImage!: String;
    ownerId!: String;
    value!: number;
    shortDescription!: String;
    description!: String;
    status!: number;
    _id!: String;    
    createdAt!: String;
    updateAt!: String;
    __v!: number; 
}
export class propertyResponseUpload {
    fileName!: string;
}