import { Component, OnInit } from '@angular/core';
import { AlertsServiceService } from '../alerts-service.service';
import { Alert } from '../alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alertService: AlertsServiceService;

  constructor(alertsService: AlertsServiceService) {
    this.alertService = alertsService;
   }

  ngOnInit() {
  }

  close(alert: Alert) {
    this.alertService.remove(alert);
  }
}