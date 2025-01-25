import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";
import {getImageUrl} from "./list_keys_id"

export const scientists = [{
  name: "Maria Skłodowska-Curie",
  imageId: "szV5sdG",
  profession: "Physicist and Chemist",
  awards:"4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
  discovery: "Radioactivity",
},
{
  name: "Katsuko Saruhashi",
  imageId: "YfeOqp2",
  profession: "geochemist",
  awards:"2 (Miyake Prize for geochemistry, Tanaka Prize)",
  discovery: "a method for measuring carbon dioxide in seawater",
}];

export function Gallery_Old() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

/**
 * The `ListItem` component renders a single list item with a 
 * label and corresponding content. It is designed to display a 
 * pair of related information (e.g., Profession and its value).
 * 
 * @param label - The descriptive label for the content (e.g., "Profession:").
 * @param content - The actual content to be displayed alongside the label.
 */
export function ListItem({label, content}: ListItemProps){
  return (
    <li>
      <strong>{label}</strong> {content}
    </li>
  );
}

/**
 * The `GallerySection` component renders a detailed profile of a scientist.
 * It displays the scientist's name, image, and other notable details such as profession, 
 * awards, and discoveries. This component leverages the `ListItem` component 
 * to structure the additional information in a list.
 * 
 * @param scientist - The scientist object containing details like name, profession, 
 * awards, and discoveries.
 * @param size - The size of the profile image (defaults to 70 pixels).
 */
export function GallerySection({scientist, size=70 }: GalleryProps){
  return (
    <section className = "profile">
    <h2>{scientist.name}</h2>
    <img
      className="avatar"
      src= {getImageUrl(scientist.imageId)}
      alt={scientist.name}
      width={size}
      height={size}
    />
    <ul>
      <ListItem label="Profession: " content={scientist.profession}/>
      <ListItem label="Awards: " content={scientist.awards}/>
      <ListItem label="Discovered: " content={scientist.discovery}/>
    </ul>
    </section>
  );
}

/**
 * The `Gallery` component is the main container for displaying a list of notable scientists.
 * It maps through the `scientists` array and renders a `GallerySection` for each scientist.
 * This component serves as the entry point for displaying all the scientist profiles.
 */
export default function Gallery(){
  return(
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <GallerySection key={index} scientist={scientist} />
      ))}
    </div>
  );
}