import { useEffect } from "react"

export function useTitle(title) {
    useEffect(() => {
        // Adds url
        title += window.location.pathname == '/' ? "" : " | speedrun.io"
        const prevTitle = document.title
        document.title = title
        return () => document.title = prevTitle
    })
}
    
