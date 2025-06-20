import { Component } from '@angular/core';
import { IgxButtonGroupModule, IgxCardComponent, IgxCardModule, IgxInputGroupModule, IgxLayoutModule } from 'igniteui-angular';

@Component({
  selector: 'app-login',
  imports: [IgxInputGroupModule, IgxLayoutModule,IgxCardComponent,IgxCardModule,IgxButtonGroupModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
