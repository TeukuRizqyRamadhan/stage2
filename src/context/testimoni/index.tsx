import { createContext } from "react"
import { ICardTestimonial } from "../../interface/cardTestimonial"

type TestiContextType = {
    testis: ICardTestimonial[],
    setTesti: React.Dispatch<React.SetStateAction<ICardTestimonial[]>>
}

export const testiContext = createContext<TestiContextType>({
    testis: [],
    setTesti: () => { }
})