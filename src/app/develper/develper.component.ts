import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-develper',
  templateUrl: './develper.component.html',
  styleUrls: ['./develper.component.css']
})
export class DevelperComponent implements OnInit {
  name;

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.paramMap.get('name'));
    this.name = route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
  }

}
