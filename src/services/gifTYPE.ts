// GIF Obj

export interface IGiphy {
    id: string,
    slug: string,
    source: string,
    images: Images
}

// The Images Object
export interface Images {
    original: OriginalUrl 
}

// Images original url

export interface OriginalUrl {
    url: string
}
