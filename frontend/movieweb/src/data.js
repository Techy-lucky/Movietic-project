import avatar from "./images/trending.jpeg";
import jhonwick from "./images/jhonwick.jpg";
import supergirl from "./images/DC Comics Movie The Flash - Supergirl Flying Wall Poster.jpeg";
import cargo from "./images/Cargo _ Ben Howling & Yolanda Ramke - 2015.jpg";
import Spider from "./images/download.jpeg";
import Ironman from "./images/Iron Man (2008).jpeg";
import Thor from "./images/download (1).jpeg";
import doctor from "./images/download (2).jpeg";
import avatartrailor from "./video/avatar.mp4";
import jhonwicktrailor from "./video/jhonwick.mp4";
import supergirltrailor from "./video/supergirl.mp4";
import cargotrailor from "./video/cargo.mp4";
import spidermantrailor from "./video/spiderman.mp4";
import Ironmantrailor from "./video/ironman.mp4";
import Thortrailor from "./video/thor.mp4";
import doctortrailor from "./video/doctorstrange.mp4";

const data = [
  {
    name: "avatar",
    image: avatar,
    detail:
      "Avatar, American science fiction film series and media franchise created by director James Cameron.The film is about a paraplegic Marine named Jake Sully (Sam Worthington) who is sent to the moon Pandora to take his brother's place in a mission.its a 2009 science fiction action-adventure-fantasy",
    videos: [avatartrailor],
    price : 350 
  },
  {
    name: "jhonwick",
    image: jhonwick,
    detail:
      "John Wick | The John Wicki | Fandom The story focuses on John Wick (Reeves) who seeks revenge on the son of Russian crime lord for stealing his vintage car and killing his puppy, a memento of his recently deceased wife, Helen.",
    videos : [jhonwicktrailor],
    price : 400 
  },
  {
    name: "supergirl",
    image: supergirl,
    detail:
      "Supergirl is a 1984 superhero film directed by Jeannot Szwarc from a screenplay by David Odell based on the DC Comics character of the same name. Kara is sent to Earth from Krypton, like her cousin Kal-El, also known as Superman. However, her ship veers off course, and she arrives on Earth as a fully grown man, but still a teenage girl.",
      videos : [supergirltrailor],
      price : 300 
  },
  {
    name: "cargo",
    image: cargo,
    detail:
      "Cargo (2017) A post-apocalyptic thriller film about a couple and their baby traveling in remote Australia during a deadly disease outbreak. The film stars Martin Freeman, Simone Landers, Anthony Hayes, David Gulpilil, Susie Porter, and Caren Pistorius.",
      videos : [cargotrailor],
      price : 450 
  },
  {
    name: "spiderman",
    image: Spider,
    detail:
      "The film was directed by Marc Webb and written by James Vanderbilt, Alvin Sargent, and Steve Kloves, based on a story by Vanderbilt, and stars Andrew Garfield as Peter Parker.",
      videos : [spidermantrailor],
      price : 500 
  },
  {
    name: "Ironman",
    image: Ironman,
    detail:
      "Iron Man is a 2008 Marvel Studios science fiction superhero movie about Tony Stark, a billionaire industrialist and engineer who is kidnapped and forced to build a weapon.. Instead, he uses his intelligence to build a high-tech suit of armor and escape, and then returns home to refine the suit and use it as the superhero Iron Man to fight evil. ",
      videos : [Ironmantrailor],
      price : 500 
  },
  {
    name: "Thor",
    image: Thor,
    detail:
      "Thor: Ragnarok is a 2017 superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Thor, Thor: The Dark World and Avengers: Age of Ultron.",
      videos : [Thortrailor],
      price : 300 
  },
  {
    name: "Doctor strange",
    image: doctor,
    detail:
      "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses, to battle other-universe versions of himself which threaten to wipe out the multiverse.",
      videos : [doctortrailor],
      price : 400 
  },
];

export default data;
