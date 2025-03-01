import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './mode-toggle'

export const Navigation = () => {
  return (
    <NavigationMenu className='flex gap-4 p-4 relative z-10'>
      <NavigationMenuList className='flex gap-4'>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/'
            className='w-fit text-nowrap cursor-pointer'
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/todo-list/formulary'
            className='w-fit text-nowrap cursor-pointer'
          >
            Formulario
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/todo-list/all-tasks'
            className='w-fit text-nowrap cursor-pointer'
          >
            Tareas
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
