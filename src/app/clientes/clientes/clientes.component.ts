import { Component } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { User } from 'src/app/formulario/formulario/formulario.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  
})

export class ClientesComponent {
  terminoBusqueda: string = '';
  filteredItems: any[] = [];
  user: User[] = [];
  datos:any=""
  constructor(private Service:ServicioService) {}
  ngOnInit():void{
    this.Service.sendUser(this.datos).subscribe((user:User[])=>{
      console.log(this.datos)
      this.user = user
      this.filteredItems = user;
    })
  }
  filterTable(): void {
    let td: HTMLElement | null, txtValue: string;
    let input: string = (document.getElementById("filtro") as HTMLInputElement).value;
    let filter: string = input.toUpperCase();
    let table: HTMLElement | null = document.getElementById("myTable");
    let tr: HTMLCollectionOf<HTMLTableRowElement> = table?.getElementsByTagName("tr") as HTMLCollectionOf<HTMLTableRowElement>;
    
    for (let i: number = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

