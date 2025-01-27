import { useState } from "react";
// import axios from "axios";

const newReview = {
    name: "",
    vote: "",
    text: "",
};

// const apiUrl = import.meta.env.VITE_APIURL;

export default function ReviewForm({ handleSubmit }) {
    const [formData, setFormData] = useState(newReview);

    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    function AddReview(e) {
        e.preventDefault();
        handleSubmit({ ...formData });
        setFormData(newReview);
    }

    return (
        <section>
            <h5>Dicci cosa ne pensi!</h5>
            <form onSubmit={AddReview}>
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">
                        Nome:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="namelHelp"
                        value={formData.name}
                        onChange={handleInput}
                        name="name"
                    />
                    <div id="namelHelp" className="form-text">
                        Scrivi il tuo nome
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="text" className="form-label">
                        Aggiungi qui la tua recensione:
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="text"
                        value={formData.text}
                        onChange={handleInput}
                        name="text"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="number" className="form-label">
                        Valutazione:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        min="0"
                        max="10"
                        value={formData.vote}
                        onChange={handleInput}
                        name="vote"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </section>
    )
}