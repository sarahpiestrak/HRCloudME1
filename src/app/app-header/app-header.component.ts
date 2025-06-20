import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxButtonDirective, IgxCarouselComponent, IgxFlexDirective, IgxIconButtonDirective, IgxIconComponent, IgxLayoutDirective, IgxLayoutModule, IgxPrefixDirective, IgxRippleDirective, IgxSuffixDirective } from 'igniteui-angular';

@Component({
  selector: 'app-app-header',
  imports: [IgxLayoutDirective, IgxFlexDirective, RouterLink,IgxLayoutModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
