import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class CopiaService {
  constructor(private sqlDbCopy: SqliteDbCopy, private platform: Platform) {}

  async copiarBBDD(): Promise<any> {
    return new Promise((resolve, reject) => {
      alert("Copia comenzando");
      this.platform
        .ready()
        .then(() => {
          alert("copia la plataforma SI está lista");
          this.sqlDbCopy
            .copy("Horario16.db", 0)
            .then(() => {
              alert("Copia terminada");
            })
            .catch((error) => {
              console.log("copia fallo al copiar");
              console.log("copia" + JSON.stringify(error));
            });
        })
        .catch(() => {
          alert("copia la plataforma NO está lista");
        });
    });
  }
}
