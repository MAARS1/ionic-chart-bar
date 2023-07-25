import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

showChart(){
  var data = google.visualization.arrayToDataTable([
         ['Element', 'Density', { role: 'style' }],
         ['aathi1', 8.94, '#b87333'],            // RGB value
         ['aathi2', 10.49, 'silver'],            // English color name
         ['aathi3', 19.30, 'gold'],

       ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
      ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));

        chart.draw(data, options);
}
}
