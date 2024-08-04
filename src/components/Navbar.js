
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import 'primeicons/primeicons.css';
        
export default function Navbar() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Services',
            icon: 'pi pi-star'
        },
        {
            label: 'About Us',
            icon: 'pi pi-star'
        },
        {
            label: 'Membership',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Signals',
                    icon: 'pi pi-bolt',
                },
                {
                    label: 'Results',
                    icon: 'pi pi-server',
                },
                {
                    label: 'Packages',
                    icon: 'pi pi-pencil',
                },
                {
                    separator: true
                },
                {
                    label: 'Tutorials',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Beginners',
                            icon: 'pi pi-palette',
                        },
                        {
                            label: 'Advanced',
                            icon: 'pi pi-palette',
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        