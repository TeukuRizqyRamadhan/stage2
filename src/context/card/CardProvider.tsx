import { useCallback, useEffect, useState } from "react";
import { cardContext } from '.';
import { ICard } from "../../interface/card";
import API from "../../libs/api";


export function CardProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [cards, setCard] = useState<ICard[]>([]);

    const getCards = useCallback(async () => {
        const response = await API.get("/card")
        setCard(response.data)
    }, [])

    useEffect(() => {
        getCards()
    }, [getCards])

    return (
        <cardContext.Provider value={{ cards, setCard }}>
            {children}
        </cardContext.Provider>
    )
}