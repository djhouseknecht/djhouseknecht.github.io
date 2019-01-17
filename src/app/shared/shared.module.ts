import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [
		RouterModule,
		CommonModule
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