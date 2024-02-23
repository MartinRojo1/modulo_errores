import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorsComponent } from "./errors/errors.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ErrorsComponent]
})
export class AppComponent {
  title = 'ModuleErrors';
}
