import {Component, OnInit} from '@angular/core';
import {BizisService} from "../../services/bizis.service";
import {Bizis} from "../../models/bizis";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bizis-list',
  templateUrl: './bizis-list.component.html',
  styleUrls: ['./bizis-list.component.css']
})
export class BizisListComponent implements OnInit {

  data: Bizis[] = [];
  dataPaged: Bizis[] = [];
  page: number = 1;
  pageSize: number = 10;

  constructor(private biziService: BizisService,
              private router: Router) {}

  ngOnInit() {
    this.biziService.getList().subscribe((data:Bizis[]) => {
      this.data = data;
      this.pageChange();
      console.log(this.dataPaged);
    });
  }

  pageChange() {
    const fromItem: number = (this.page-1) * this.pageSize;
    let toItem: number = (this.page*10) -1;

    if (this.data.length<toItem) {
      toItem = this.data.length;
    }

    this.dataPaged = this.data.slice(fromItem, toItem);
  }

  showMap() {
    this.router.navigateByUrl('bizis/map').then(
      (routechange:boolean) => {
        console.log(routechange);
      }
    );
  }
}
