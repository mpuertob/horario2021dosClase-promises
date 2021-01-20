import { DatosService } from "./../datos.service";
import { CopiaService } from "./../copia.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private copiaService: CopiaService,
    private datosService: DatosService
  ) {}
  ngOnInit(): void {}
  copia() {
    this.copiaService
      .copiarBBDD()
      .then(() => {
        alert("Todo OK");
      })
      .catch(() => {
        alert("FALLÓ");
      });
  }
  abrir() {
    this.datosService
      .openDB()
      .then((mensaje) => {
        alert(
          "Estamos en el home.page.ts en el metodo abrir funcionando correctamente"
        );
        alert(mensaje);
      })
      .catch((mensajeError) => {
        alert("Estamos en el home.page.ts en el metodo abrir y no funciona");
        alert(mensajeError);
      });
  }
  getHoras() {
    alert("Primero");
    this.datosService.getHoras();
  }
}
