import { Routes,RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './login/login';
import { Component, NgModule } from '@angular/core';
import { Header } from './components/header/header';
import { Bartest } from './component/bartest/bartest';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'Home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: Home
    },
    {
        path:'login',
        component:Login
    },
    {
 path:'haeader',
    component:Header
    },
{
        path: 'foother',

},
{
path:'Bartest',
component:Bartest
},
];
//
//@NgModule((
//export:[RouterModule]
//));