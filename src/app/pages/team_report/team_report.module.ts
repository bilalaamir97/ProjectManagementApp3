import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { team_reportComponent } from "./team_report.component";

import { RouterModule } from "@angular/router";
import { team_reportRoutes } from "./team_report.routing";

@NgModule({
  declarations: [team_reportComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(team_reportRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule
  ]
})
export class team_reportModule {}
