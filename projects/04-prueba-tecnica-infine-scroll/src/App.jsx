import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const RANDOM_FACT_URL = 'https://catfact.ninja/fact';

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function App() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const lastElementRef = useRef(null);

  useEffect(() => {
    fetchData(RANDOM_FACT_URL).then((data) => setFacts([{ text: data.fact, imageUrl: `https://cataas.com/cat/says/${data.fact}` }]));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
    return () => observer.disconnect();
  }, [loading]);

  const loadMore = () => {
    setLoading(true);

    fetchData(RANDOM_FACT_URL)
      .then((data) => {
        setFacts((prevFacts) => [
          ...prevFacts,
          { text: data.fact, imageUrl: `https://cataas.com/cat/says/${data.fact}` },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };

  return (
    <div>
      {facts.map((fact, index) => (
        <div key={index}>
          {fact.text ?? 'Cargando...'}
          <br />
          <img src={fact.imageUrl} alt="Random cat" />
        </div>
      ))}
      <div ref={lastElementRef} />
    </div>
  );
}

export default App;
