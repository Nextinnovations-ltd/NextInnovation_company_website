import { useEffect } from "react";

export default function useVisiter(page) {
  useEffect(() => {
    if (!page) return;

    const visiter = () => {
        fetch('http://127.0.0.1:8000/api/visiter/' + page, {
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
