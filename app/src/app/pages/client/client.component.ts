import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  
  public clients: any[] = [];

  public totals: any = {};

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    
    this.clientService.getAll()
        .subscribe(
          response => this.clients = response,
          error => console.log(error)
        )

    this.clientService.getGeneralTotals()
        .subscribe(
          response => this.totals = response,
          error => console.log(error)
        )
  }
}