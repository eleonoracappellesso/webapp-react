import { useState } from "react";
import axios from "axios";

const initialData = {
    name: "",
    text: "",
    vote: "",
};


export default function ReviewForm({ id, reloadReviews }) {
    const [formData, setFormData] = useState(initialData);
    const [isFormValidated, setIsFormValideted] = useState(true);

    const apiUrl = import.meta.env.VITE_APIURL;
    const movieEndPoint = `${apiUrl}/movies/${id}/reviews`


    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        setIsFormValideted(true);
        if (!e.target.checkValidity()) {
            return;
        }

        axios
            .post(movieEndPoint, formData)
            .then((res) => {
                console.log(res);
                setFormData(initialData);
                setIsFormValideted(false);
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

                <form
                    onSubmit={handleSubmit}
                    className={` ${isFormValidated ? "was-validated" : "needs-validation"
                        }`}
                    noValidate
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={setFieldValue}
                            required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea
                            className="form-control"
                            name="text"
                            value={formData.text}
                            onChange={setFieldValue}
                            required
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
                            required
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