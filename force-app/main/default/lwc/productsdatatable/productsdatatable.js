import { LightningElement } from 'lwc';

export default class Productsdatatable extends LightningElement {
    Columns = [
        { label: 'id', fieldName: 'id' },
        { label: 'title', fieldName: 'title' },
        { label: 'price', fieldName: 'price'},
        { label: 'images', fieldName: 'images',type:'image'},
      
    ];
}