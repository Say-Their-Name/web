import React, { useState, useEffect } from 'react';
import Petition from '../components/ui/petition/Petition';
import { Wrapper } from '../components/ui/petition/styles';

const Petitions = () => {
  const [petitions, setPetitions] = useState([]);

  const fetchPetitions = async () => {
    const res = await fetch('https://saytheirnames.dev/api/petitions');
    const json = await res.json();
    setPetitions(json.data);
  };

  useEffect(() => {
    fetchPetitions();
  }, []);

  return (
    <Wrapper>
      <h1>PETITIONS</h1>
      {petitions.map((petition) => (
        <Petition
          key={petition.id}
          title={petition.title}
          description={petition.description}
          link={petition.link}
          img={petition.image_url}
          type={petition.type.type}
        />
      ))}
    </Wrapper>
  );
};

export default Petitions;
