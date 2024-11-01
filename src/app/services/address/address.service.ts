import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private _addresses = new BehaviorSubject<any>([]);

  get addresses() {
    return this._addresses.asObservable();
  }

  constructor() {}

  async addAddress(formData: any) {
    try {
      let addresses = this._addresses.value;
      if (addresses?.length == 0) {
        formData = { ...formData, primary: true };
      }

      const address = {
        ...formData,
        id: '1',
      };

      addresses = addresses.concat(address);
      this._addresses.next(addresses);
      return address;
    } catch (e) {
      throw e;
    }
  }

  async getAddresses() {
    const dummyData = [
      {pincode: '12345', address: '123 Main Street', house_no: 'asds', city: 'New York', state: 'New York', country: 'USA', save_as: 'Home', landmark: 'Near Central Park', primary: false},
      {pincode: '54321', address: '456 Elm Street', house_no: '13243', city: 'Los Angeles', state: 'California', country: 'USA', save_as: 'Work', landmark: 'Downtown', primary: true}
    ];
    this._addresses.next(dummyData);
    return dummyData;
  }
}
