import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

type PetFormProps = {
    actionType: "add" | "edit";
}

export default function PetForm({actionType}: PetFormProps) {
  return (
    <form className='flex flex-col'>

        <div className='space-y-3'> 
            <div className='space-y-1'>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter pet name" />
            </div>

            <div className='space-y-1'>
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" type="text" placeholder="Enter owner name" />
            </div>

            <div className='space-y-1'>
                <Label htmlFor="imageUrl">Image Url</Label>
                <Input id="imageUrl" type="text" placeholder="Enter image url" />
            </div>

            <div className='space-y-1'>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="Enter pet age" />
            </div>

            <div className='space-y-1'>
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" rows={3} placeholder="Enter any additional notes about the pet" />
            </div>
        </div>

        <Button type="submit" className='mt-5 self-end'>{actionType === "add" ? "Add a new Pet" : "Edit Pet"}</Button>

    </form>
  )
}
