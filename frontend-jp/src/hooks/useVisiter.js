import { useEffect } from "react";
import { API_BASE_URL } from "../config";

export default function useVisiter(page) {
  useEffect(() => {
    if (!page) return;

    const visiter = () => {
        fetch(`${API_BASE_URL}/api/visiter/${page}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(err => {
            console.log(err);
        });
    };
    visiter();
  }, [page]);
}
