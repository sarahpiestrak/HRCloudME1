import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IgxButtonDirective, IgxCarouselComponent, IgxFlexDirective, IgxIconButtonDirective, IgxIconComponent, IgxLayoutDirective, IgxLayoutModule, IgxNavbarComponent, IgxNavDrawerItemDirective, IgxNavigationDrawerComponent, IgxNavigationDrawerModule, IgxPrefixDirective, IgxRippleDirective, IgxSuffixDirective } from 'igniteui-angular';

@Component({
  selector: 'app-app-header',
  imports: [IgxLayoutDirective, IgxFlexDirective, RouterLink,IgxLayoutModule, IgxNavigationDrawerModule,IgxIconComponent, IgxNavbarComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

    @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer: IgxNavigationDrawerComponent | undefined;

  public selected = 'Avatar';

 public navItems = [
        { icon: 'account_circle', text: 'Features' , route:"/features"},
        { icon: 'business', text: 'Small Business', route:"/smallbusiness" },
        { icon: 'people', text: 'HR Consultants', route:"/hrconsultants" },
        { icon: 'call', text: 'Contact Us', route:"/contactus" },
        { icon: 'login', text: 'Login', route:"/login" }
    ];

    
constructor(
  private router: Router  ) {}

      public navigate(itemRoute : any) {
        
        if (this.drawer!=null)
          this.drawer.close();

        this.router.navigate([ itemRoute ]);


    }

    public toggleDrawer()
    {
       if (this.drawer ==null)
        return;
  
       if (this.drawer.isOpen)
          this.drawer.close();
        else
        this.drawer.open();
    }

}
