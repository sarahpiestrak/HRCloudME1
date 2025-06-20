import { Component } from '@angular/core';
import { IgxButtonDirective, ButtonGroupAlignment, IgxLayoutDirective, IgxCarouselComponent, IgxSlideComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxRippleDirective, IgxPrefixDirective} from 'igniteui-angular'
import { Card } from '../BusinessObjects/Card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [IgxLayoutDirective, IgxCarouselComponent, IgxSlideComponent,IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public title:string = 'HR Cloud Middle East';
  public alignment = ButtonGroupAlignment.horizontal;
  public slides = [
      {
        src: 'https://hrcloudfiles.blob.core.windows.net/marketing/AdminDashboard.png'
      },
      {
        src: 'https://hrcloudfiles.blob.core.windows.net/marketing/EmployeeDashboard.png'
      },
      {
        src: 'https://hrcloudfiles.blob.core.windows.net/marketing/Payroll.png'
      }
  ];

  public cardPayroll = new Card({
        buttons: ['read more'],
        content: `Generate payroll with one click, compare with previous payroll, generate bank file for salary transfer and email pay slips to employees.`,
        subtitle: 'One Click Payroll & Pay slips',
        title: 'Payroll'
    });
  public cardLeave = new Card({
        buttons: ['read more'],
        content: `Manage employee leave requests and automated accruals as per the Labor Law. Also manage leave encashments`,
        subtitle: 'Accruals & encashment',
        title: 'Leave Management'
    });
    public cardOvertime = new Card({
        buttons: ['read more'],
        content: `Overtime is calculated for the weekdays, weekends and holidays as per the local Labor Law.`,
        subtitle: 'Overtime as per Labor Law',
        title: 'Overtime'
    });
    public cardAdvanceSalary = new Card({
        buttons: ['read more'],
        content: `Advance salary is automatically deducted in the next payroll. It is also possible for employees to apply for loan that can be adjusted to multiple months with installments.`,
        subtitle: 'Automated deductions',
        title: 'Advance Salary'
    });

  public OpenMenu()
  {

  }

}
