export default function ReviewCard({ review, stars }) {
    return (
        <div className="col-md-12 mb-4">
            <div className="card mx-4">
                <div className="card-body">
                    <h6 className="card-text">{review.text}</h6>
                    <div>{stars}</div>
                    <p className="fst-italic">By {review.name}</p>
                </div>
            </div>
        </div>
    )
}