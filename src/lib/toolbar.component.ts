import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toolbar }                                from './toolbar';
import { ToolbarMenuItem }                        from './toolbar-menu-item';

@Component({

    selector: 'toolbar',

    template: `

        <div class="wrapper mat-elevation-z6"
             [style.background-color]="config.backgroundColor">

            <div class="left">

                <ng-content select="[left]"></ng-content>

            </div>

            <div class="center">

                <ng-content select="[center]"></ng-content>

            </div>

            <div class="right">

                <div class="menu">

                    <button mat-icon-button [matMenuTriggerFor]="menu">

                        <i [class]="config.menuIconClass"
                           [style.color]="config.menuIconColor"
                           [style.font-size]="config.menuIconFontSize"></i>

                    </button>

                    <mat-menu #menu="matMenu"
                              [backdropClass]="config.menuClass">

                        <button *ngFor="let item of config.menuItems"
                                (click)="onClick.emit(item)"
                                mat-menu-item>

                            <i *ngIf="item.iconClass"
                               [class]="item.iconClass"
                               style="margin-right: 10px"
                               [style.color]="item.iconColor"></i>

                            <span [style.color]="item.labelColor">{{ item.label }}</span>

                        </button>

                    </mat-menu>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ 'toolbar.component.scss' ]

})
export class ToolbarComponent {

    @Input() public config: Toolbar;

    @Output() public onClick: EventEmitter<ToolbarMenuItem> = new EventEmitter();

}
