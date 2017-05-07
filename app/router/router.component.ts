import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './../navbar/navbar.component.ts';
import {HomeComponent} from './../home/home.component.ts';
import {UsersComponent} from './../users/users.component.ts';
import {PostsComponent} from './../posts/posts.component.ts';

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'router',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class RouterComponent { }