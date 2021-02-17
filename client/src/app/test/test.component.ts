import { Component, OnInit } from '@angular/core';
import { Geofence } from '@ionic-native/geofence/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private geofence: Geofence) {
    // initialize the plugin
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )
  }

  ngOnInit(): void {
  }

  addGeofence() {
    //options describing geofence
    let fence = {
      id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'You crossed a fence', //notification title
          text:           'You just arrived to Gliwice city center.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );
  }

}
