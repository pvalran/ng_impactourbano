import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },{
    state: 'apps',
    name: 'APPS',
    type: 'sub',
    icon: 'apps',
    badge: [{ type: 'red', value: '5' }],
    children: [
      { state: 'calendar', name: 'CALENDAR' },
      { state: 'media', name: 'MEDIA' },
      { state: 'messages', name: 'MESSAGES' },
      { state: 'social', name: 'SOCIAL' },
      { state: 'chat', name: 'CHAT' }
    ]
  },{
    state: 'proyecto',
    name: 'Proyecto',
    type: 'sub',
    icon: 'apps',
    children: [
      { state: 'registro', name: 'registro' },
      { state: 'listado', name: 'listado' }
    ]
  },{
    state: 'opinion',
    name: 'Opinion',
    type: 'sub',
    icon: 'apps',
    children: [
      { state: 'registro', name: 'registro' },
      { state: 'listado', name: 'listado' }
    ]
  },{
    state: 'medida',
    name: 'Medida',
    type: 'sub',
    icon: 'apps',
    children: [
      { state: 'registro', name: 'registro' },
      { state: 'listado', name: 'listado' }
    ]
  },{
    state: 'http://primer.nyasha.me/docs',
    name: 'DOCS',
    type: 'extTabLink',
    icon: 'local_library'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
