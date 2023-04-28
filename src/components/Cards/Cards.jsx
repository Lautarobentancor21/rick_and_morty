import Card from "../Card/Card";
import cardsStyles from './cards.module.css'

export default function Cards({ characters, onClose}) {
  return (
    <div className={cardsStyles.cardsContainer}>
      {characters && characters.map(character => (
        <Card
          id = {character.id}
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose = {onClose}
          showDeleteButton ={true}
        />
      ))}
    </div>
  );
}
