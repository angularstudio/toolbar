import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';
import { MatMenuModule }    from '@angular/material/menu';
import { ToolbarComponent } from './toolbar.component';

@NgModule({

    declarations: [ ToolbarComponent ],
    imports: [

        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule

    ],
    exports: [ ToolbarComponent ]

})
export class ToolbarModule {
}
