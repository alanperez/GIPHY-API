import { Images } from "../../services/gifTYPE"


interface ICard {
    id: string,
    images: Images,
    src?: string | undefined
}

export const Card = ({images}: ICard) => {

    return (
        <>
        
        <div className="card-container__content">
            <img className="content-image" alt="giphy" src={images.original.url}/>
        </div>
        </>
    )

}