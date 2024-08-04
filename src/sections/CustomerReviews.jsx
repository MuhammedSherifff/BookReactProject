import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
    return (
        <section className="max-container ">
            <h3 className="font-palanquin text-center text-4xl font-bold ">
                <span className="dark:text-white">What Our</span>
                <span className="text-coral-red "> Customer </span>
                
                <span className="dark:text-white">Say? </span>
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experienced with us.</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName}
                        imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews