export interface artworks{
    id: number, 
    title: string, 
    seen: boolean
}

export interface ItemListProps { 
    artworks: artworks[], 
    onToggle:  (artWorkId: number, nextSeen: boolean) => void 
}