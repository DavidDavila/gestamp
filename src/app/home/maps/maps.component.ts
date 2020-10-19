import { select } from "@angular-redux/store";
import { Component, OnDestroy, OnInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { Observable } from "rxjs";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit, OnDestroy {
  @select(["countriesSelected"])
  readonly countriesSelected$: Observable<any>;
  sub: any;
  map: any;
  markers: {
    country: { code: string; lat: string; long: string };
    marker: any;
  }[] = [];
  constructor() {}
  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  ngOnInit(): void {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF2aWRkYXZpbGEiLCJhIjoiY2tnZDFpdThuMDBtYzM0cXVlMzMwNXUzbiJ9.L39UOGkJn99LYMckm2tgmg";
    this.map = new mapboxgl.Map({
      container: "mapid",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 2,
      center: [-3.70325, 40.4167], //TODO: Centar el país en el Navigator.location por decf
    });
    this.map.on("load", () => {
      this.sub = this.countriesSelected$.subscribe((val) => {
        if (val) {
          if (val.length < this.markers.length) {
            const eraseMark = this.markers.find(
              (element) => !val.includes(element.country)
            );

            eraseMark.marker.remove();
            this.markers = this.markers.filter(
              (mark) => mark.country.code !== eraseMark.country.code
            );
          } else {
            const newElements = val.filter(
              (element) => !this.markers.map((v) => v.country).includes(element)
            );
            newElements.forEach(
              (country: { code: string; lat: string; long: string }) => {
                var marker = new mapboxgl.Marker();
                marker.setLngLat([country.long, country.lat]);
                marker.addTo(this.map);
                this.markers.push({ country, marker });
                this.map.flyTo({
                  center: [country.long, country.lat],
                });
              }
            );
          }
        }
      });
    });
  }
}
