
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  latitude: any;
  longitude: any;
  zoom = 18;
  address: string;
  ci: any;
  st: any;
  num: any;
  cou:any;
arr:any;


  flagon = false;
  private geoCoder;
  form: FormGroup;
  public currentUrl: string = undefined;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    this.form = new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      desc:new FormControl('')

    })
  }

  ngOnInit(): void {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.longitude = +pos.coords.longitude;
        this.latitude = +pos.coords.latitude;
      });
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        this.geoCoder = new google.maps.Geocoder;

        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }
  }

  changeFlagon() {
    this.flagon = true;
  }
  onChoseLouation(event) {
    this.getAddress(event.latLng.lat(), event.latLng.lng())    // this.latitude=event.coords.lat;
    // this.longitude=event.coords.lng;
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
          this.arr=this.address.split(",");
          console.log(this.arr)
          this.st=this.arr[0].slice(0,this.arr[0].lastIndexOf(" ") );
          this.ci=this.arr[1];
          this.num=this.arr[0].replace(/[^0-9]/g,"");
          this.cou=this.arr[2];
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
}
