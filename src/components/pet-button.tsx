import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";

type PetButtonProps = {
    actionType: "add" | "edit" | "checkout";
    children?: React.ReactNode;
    className?: string;
}
export default function PetButton({actionType, children, className}: PetButtonProps) {

    if (actionType === "add"){
        return <Button className={cn(className)} size="icon"><PlusIcon className="h-6 w-6"/></Button>
    }

    if (actionType === "edit"){
      return <Button className={cn(className)} variant="secondary">{children}</Button>
    }

    if (actionType === "checkout"){
      return <Button className={cn(className)} variant="secondary">{children}</Button>
    }

}
