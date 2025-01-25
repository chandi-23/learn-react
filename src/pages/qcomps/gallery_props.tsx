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

export function ListItem({label, content}: ListItemProps){
  return (
    <li>
      <strong>{label}</strong> {content}
    </li>
  );
}

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


