import { useCallback, useEffect, useState } from "react";
import { testiContext } from '.';
import { ICardTestimonial } from "../../interface/cardTestimonial";
import API from "../../libs/api";


export function TestiProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [testis, setTesti] = useState<ICardTestimonial[]>([]);

    const getTestis = useCallback(async () => {
        const response = await API.get("/testi")
        setTesti(response.data)
    }, [])

    useEffect(() => {
        getTestis()
    }, [getTestis])

    return (
        <testiContext.Provider value={{ testis, setTesti }}>
            {children}
        </testiContext.Provider>
    )
}