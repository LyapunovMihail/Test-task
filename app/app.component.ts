import { Component, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import {DATA} from './data';
declare var $:any;

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})



export class AppComponent implements OnInit, AfterViewInit{
	
	@ViewChildren('spark') childChildren: QueryList<ElementRef>;
	constructor() {
	}

data: any;
td5 = document.body.clientWidth >= 1010;
td7 = document.body.clientWidth >= 827;
td6 = document.body.clientWidth >= 759;
td8 = document.body.clientWidth >= 570;


colors = ['#ffaaaa','#cccccc'];
lastColors = ['#000000', '#bf0000'];
colorMaps = [];
values = [];

ngOnInit() {

	console.log("values: " + this.values.length)
	for (var i = 0; i < 12; i++) {
		this.setSparklinesData();
	}
	
	$(window).resize(
		this.debounce(() => {		
			this.childChildren.forEach((child,i) => {
				if (i > 10) {
			  		return;
			    }
				
			  	$(child.nativeElement).sparkline(this.values[i], {
					type: 'bar', barSpacing: 0, colorMap: this.colorMaps[i]
				});
		  	})
		  
			this.td5 = document.body.clientWidth >= 1010;
			this.td7 = document.body.clientWidth >= 827;
			this.td6 = document.body.clientWidth >= 759;
			this.td8 = document.body.clientWidth >= 570;
		}, 50)	
	);

	this.data = DATA;
}

ngAfterViewInit() {
  this.childChildren.forEach((child,i) => {
  	if (i > 10) {
  		return;
  	}
  	
  	$(child.nativeElement).sparkline(this.values[i], {
		type: 'bar', barSpacing: 0, colorMap: this.colorMaps[i]
	});
  })
}


setSparklinesData() {
	var numbers = [];
	for (var x = 0; x < 12; x++) {
		numbers[x] = Math.round(Math.random()*12);
	}
	this.values.push(numbers);

	var colorMap = [];
	for (var z = 0; z < 12; z++) {
		if (z < 11)
			colorMap[z] = this.colors[Math.round(Math.random()) === 0 ? Math.round(Math.random()) : 1];
		else
			colorMap[z] = this.lastColors[Math.round(Math.random())];
	}
	this.colorMaps.push(colorMap);
}

debounce(f, ms) {
  var state = null;
  var COOLDOWN = 1;
  return function() {
    if (state) return;
    f.apply(this, arguments);
    state = COOLDOWN;
    setTimeout(function() { state = null }, ms);
  }
}

simbol1 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
simbol2 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
}

