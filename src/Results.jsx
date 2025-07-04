import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            id={pet.id}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
            images={pet.images}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
