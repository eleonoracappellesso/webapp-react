import { useState } from "react";
import axios from "axios";

const initialData = {
    name: "",
    text: "",
    vote: "",
};


export default function ReviewForm({ id, reloadReviews }) {
    const [formData, setFormData] = useState(initialData);
    const [isValid, setIsValid] = useState(true);
    const apiUrl = import.meta.env.VITE_APIURL;
    const movieEndPoint = `${apiUrl}/movies/${id}/reviews`

    function validateForm() {
        if (!formData.text || !formData.name) return false;
        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 10)
            return false;
        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);

        if (!validateForm()) {
            return setIsValid(false);
        }

        axios
            .post(movieEndPoint, formData)
            .then((res) => {
                console.log(res);
                setFormData(initialData);
                setIsValid(true);
                reloadReviews();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
            });

        //http://localhost:3000/movies/:id/reviews
    }
    function setFieldValue(e) {
        console.log(e.target.value, e.target.name);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div className="card">
            <div className="card-body">
                {!isValid && (
                    <div className="alert alert-danger mb-3">
                        The data in the form is not valid!
                    </div>
                )}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={setFieldValue}
                        />
                        <div className="valid-feedback">Valid</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea
                            className="form-control"
                            name="text"
                            value={formData.text}
                            onChange={setFieldValue}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            step="1"
                            name="vote"
                            className="form-control"
                            value={formData.vote}
                            onChange={setFieldValue}
                        />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}