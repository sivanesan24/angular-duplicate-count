import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  countDuplicates(arr: any[]): number {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i].id]) {
        counts[arr[i].id]++;
      } else {
        counts[arr[i].id] = 1;
      }
      console.log('Id', arr[i].id);
    }
    let duplicateCount = 0;
    for (let key in counts) {
      if (counts.hasOwnProperty(key) && counts[key] > 1) {
        duplicateCount++;
        console.log('Counts', duplicateCount);
      }
    }
    return duplicateCount;
  }

  public myArray = [
    { id: 1, values: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] },
    { id: 2, values: [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }] },
    { id: 3, values: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }] },
  ];

  constructor() {
    this.myArray.forEach((obj) => {
      let duplicateCount = this.countDuplicates(obj.values);
      console.log(`Object ${obj.id} has ${duplicateCount} duplicates`);
    });
  }
}
