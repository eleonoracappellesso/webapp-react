import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../components/SingleCard";


const myApiUrl = 'http://localhost:3000';

export default function MovieDetailPage() {
    const { id } = useParams();
    const [singleFilm, setSingleFilm] = useState(null);

    useEffect(getData, [id]);

    function getData() {
        axios
            .get(myApiUrl + "/movies/" + id)
            .then((res) => {
                console.log(res);
                setSingleFilm(res.data.item);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            });
    }

    return (
        <div>

            {
                singleFilm && (
                    <>
                        <h1>{singleFilm.title}</h1>
                        <SingleCard movie={singleFilm} />
                    </>
                )

            }
        </div>
    )
}