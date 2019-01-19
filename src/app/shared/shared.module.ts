import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		NgbModule
	],
	declarations: [
		NavBarComponent,
		FooterComponent,
	],
	exports: [
		NavBarComponent,
		FooterComponent,
	]
})
export class SharedModule { }