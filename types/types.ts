import React, { ComponentType, ReactNode } from "react"



export type Status =  "En espera" | "Para hacer" | "Cancelado" | "Terminado" | "En progreso"

export type Priority =  "Baja" |  "Media" | "Alta"

export interface Priorities {
    value: Priority,
    label: string,
    icon:  ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface StatusTypes {
    label: Status
    value: string
    icon:  ComponentType<React.SVGProps<SVGSVGElement>>
}

export type TaskTypes = {
    id: number;
    title: string,
    status: StatusTypes,
    label: string,
    priority: Priorities,
    createdAt?: Date,
    updatedAt?: Date
}

export type TaskForDB = {
    title: string,
    status: string,
    label: string,
    priority: string
}

export type TaskTypeWithoutId = Omit<TaskTypes, "id">