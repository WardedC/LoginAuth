import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  imports: [],
  template: `<p>loginpage works!</p>`,
  styleUrl: './loginpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginpageComponent { }
