export class TableData {
    name: Date; 
    region: string;
    createdOn:string;
    price: string;
    csv: string;
    report: string;
    image_url: string;

    constructor(name: Date, region: string,createdOn: string,price: string,csv: string,report: string,image_url: string) {
        this.name = name;
        this.region = region;
        this.createdOn = createdOn;
        this.price = price;
        this.csv = csv;
        this.region = report;
        this.image_url = image_url;
    }
}