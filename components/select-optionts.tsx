// components/SelectOptions.tsx
import React, { ComponentType, ReactNode } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'

interface SelectOption {
  value: string
  label: string
  icon: ComponentType<React.SVGProps<SVGSVGElement>>
}

interface SelectOptionsProps {
  value: string
  name: string
  onChange: (value: string) => void
  elements: SelectOption[]
}

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  value,
  name,
  onChange,
  elements
}) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={name} />
      </SelectTrigger>
      <SelectContent>
        {elements.map(({ value, label, icon }) => (
          <React.Fragment key={value}>
            <SelectItem value={value}>
              {label}
              {React.createElement(icon)}
            </SelectItem>
          </React.Fragment>
        ))}
      </SelectContent>
    </Select>
  )
}
