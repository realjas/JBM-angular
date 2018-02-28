import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [ 
	{
		path: '', component: HomeComponent
	},
	{
		path: 'gallery', component: GalleryComponent
	},
	{
		path: 'contact', component: ContactComponent
	},
	{
		path: '**', redirectTo: ''
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);