import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BizisService } from "../../services/bizis.service";
import { Bizis } from "../../models/bizis";
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bizis-map',
  templateUrl: './bizis-map.component.html',
  styleUrls: ['./bizis-map.component.css']
})
export class BizisMapComponent implements OnInit {
  map!: L.Map;
  bizis: Bizis[] = [];

  constructor(private biziService: BizisService,
              private router: Router) { }

  ngOnInit() {
    this.biziService.getList().subscribe((data: Bizis[]) => {
      this.bizis = data;
      this.initMap();
    });
  }

  initMap(): void {
    this.map = L.map('map').setView([41.6488, -0.8891], 13); // Seting cordinates in Zaragoza

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    this.bizis.forEach(bizi => {
      let marker: L.Marker = L.marker(new L.LatLng(bizi.coordinates[0], bizi.coordinates[1]), {
        icon: L.icon({
          iconSize: [25, 25],
          iconAnchor: [13, 25],
          iconUrl: bizi.icon
        })
      });
      marker.addTo(this.map);
    });
  }

  backToList() {
    this.router.navigateByUrl('bizis/list');
  }
}