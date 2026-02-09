"use client";

import { Pet } from "@/lib/types";
import { createContext, useState } from "react"




type PetContextProviderProps = {
    children: React.ReactNode,
    data: Pet [];
}

type TPetContext = {
    pets: Pet[];
    selectedPetId: string | null;
    handleChangeSelectedPetId: (id: string) => void;
    handleCheckoutPet: (id: string) => void;
    selectedPet: Pet | undefined;
    numberOfPets: number;
}

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({children, data}: PetContextProviderProps) {

    //State

    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    //Derived state 
    const selectedPet = pets.find((pet) => pet.id === selectedPetId);
    const numberOfPets = pets.length;

    // event hgandlers
    const handleCheckoutPet = (id: string) => {
        setPets(prev => prev.filter(pet => pet.id !== id));
        setSelectedPetId(null);
    };

    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    };


  return (
    <PetContext.Provider value={{
        pets, selectedPetId, handleChangeSelectedPetId, handleCheckoutPet, selectedPet, numberOfPets
    }}>
        {children}
    </PetContext.Provider>
  )
}
