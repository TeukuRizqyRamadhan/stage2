import { createContext } from "react"
import { ICard } from "../../interface/card"

type CardContextType = {
    cards: ICard[],
    setCard: React.Dispatch<React.SetStateAction<ICard[]>>
}

export const cardContext = createContext<CardContextType>({
    cards: [],
    setCard: () => { }
})