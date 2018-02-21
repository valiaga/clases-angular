import { NgModule } from '@angular/core';

import {
    FieldsetComponent,
    LegendComponent,
    ContentComponent,
    HeadComponent,
    LegendIconComponent
} from './fieldset.component';

const COMPONENTS: any[] = [
    FieldsetComponent,
    LegendComponent,
    ContentComponent,
    HeadComponent,
    LegendIconComponent
]

@NgModule({
    imports: [],
    exports: [
        ...COMPONENTS,
    ],
    declarations: [
        ...COMPONENTS,
    ],
    providers: [],
})
export class FieldsetModule { }
