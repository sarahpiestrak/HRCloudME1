import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxButtonDirective, IgxButtonGroupModule, ButtonGroupAlignment, IgxFlexDirective, IgxLayoutDirective, IgxCarouselComponent, IgxSlideComponent, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxRippleDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent} from 'igniteui-angular'
import { Card } from '../BusinessObjects/Card';

@Component({
  selector: 'app-home-page',
  imports: [IgxLayoutDirective, IgxFlexDirective, IgxCarouselComponent, IgxSlideComponent,IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public title:string = 'HR Cloud Middle East';
  public alignment = ButtonGroupAlignment.horizontal;
  public slides = [
      {
        src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png'
      },
      {
        src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png'
      },
      {
        src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png'
      }
  ];

  public card = new Card({
        buttons: ['read more'],
        content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that's among the world's major commercial,
                  financial and cultural centers.`,
        icons: ['favorite', 'share'],
        imageUrl: 'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/ny.jpg',
        subtitle: 'City in New York',
        title: 'New York City'
    });

  public OpenMenu()
  {

  }

}
