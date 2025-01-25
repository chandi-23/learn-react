import { ListItem } from "./gallery_props";

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

export function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}

/**
 * The `List` component renders a list of people with their details 
 * such as name, profession, accomplishment, and an associated image. 
 * It iterates over the `people` array and displays each person's information 
 * using reusable components like `ListItem`. 
 * A unique `key` is assigned to each entry for React's reconciliation.
 */
export default function List() {
  return(
    <div>
      <ul>
      {people.map((person) => (
        <div key={person.id}>
          <h2> {person.name}</h2>
          <img
          src = {getImageUrl(person.imageId)}
          />
          <ListItem label="Profession: " content={person.profession}/>
          <ListItem label="Accomplishment: " content={person.accomplishment}/>
        </div>
      ))}
      </ul>
      
    </div>
  );
}

