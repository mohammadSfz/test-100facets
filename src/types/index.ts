

export interface BackgroundMediaProps {
    type: "image" | "video"
    src: string
}

export interface ActionProps{
    type: 'button'
    data: {
        text: string
        action: string
        destination: string
    }
}
export interface CardProps {
    type: string
    title: string
    subtitle?: string
    backgroundMedia: BackgroundMediaProps,
    Content: string
    action?: ActionProps   
}