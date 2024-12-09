import React, { useEffect, useRef } from "react";
import "./Project.css";
export const sections = [
  { id: "overview", label: "Overview" },
  { id: "development-language", label: "Development Language" },
];

const ProjectOne = ({ selectedIndex }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (selectedIndex !== null && sectionRefs.current[selectedIndex]) {
      sectionRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the viewport
      });
    }
  }, [selectedIndex]);

  return (
    <div className="project-container">
      <h1>Project One</h1>
      {sections.map((section, idx) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[idx] = el)} // Store refs for each section
          className="project-section"
        >
          <h2>{section.label}</h2>
          <p>
            Ut voluptate et occaecat sit laboris veniam. Aliqua magna labore
            sunt dolore non pariatur eiusmod culpa amet et deserunt qui anim
            sint. Elit cupidatat labore reprehenderit eu elit culpa irure anim
            reprehenderit Lorem quis. Ipsum veniam incididunt deserunt id esse.
            Commodo cupidatat veniam ut occaecat elit est tempor id. Do eu dolor
            eiusmod aliqua dolor tempor ad mollit dolore. Duis irure occaecat
            commodo mollit aute commodo est elit. Adipisicing elit cillum non
            quis laboris fugiat est exercitation nisi eiusmod enim voluptate
            pariatur. Mollit veniam aute et veniam eu adipisicing exercitation
            irure ut ex sint irure ea. Elit amet dolor nulla sunt incididunt
            aute mollit voluptate aliquip minim. Occaecat non enim elit in quis
            occaecat cupidatat sit minim id nulla minim esse eiusmod. Lorem et
            mollit mollit proident aliquip sint est sunt laboris voluptate
            veniam sunt enim. Nulla ea ipsum cupidatat ut. Incididunt tempor
            nulla minim dolor cupidatat non irure. Ullamco deserunt qui
            voluptate aute ad. Ex ad culpa commodo cupidatat. Excepteur nisi ad
            non tempor do incididunt. Reprehenderit do ut culpa ut ipsum ad ad
            nostrud ex consequat. Fugiat aliquip officia nulla aliqua dolor nisi
            ullamco Lorem qui enim anim elit. Est eu labore sit ad dolore
            excepteur qui ea ullamco et reprehenderit ut aute nulla. Laboris
            esse et in ipsum minim sint nostrud mollit mollit ex laborum labore
            sunt. Fugiat dolore labore amet ut culpa tempor nisi. Consectetur
            est occaecat ullamco aliqua reprehenderit consequat ex laboris
            deserunt nostrud anim duis velit esse. Non aliquip velit aliqua
            cupidatat dolore aliquip ullamco excepteur quis cupidatat voluptate
            tempor nulla nulla. Ad qui adipisicing mollit consectetur labore
            Lorem. Veniam ad excepteur ullamco in in veniam labore dolore sunt
            dolor ex do. Exercitation consequat sint aliqua voluptate. Labore et
            eiusmod ea duis ex pariatur Lorem voluptate ipsum enim in quis
            velit. Eiusmod nulla voluptate ipsum elit in ullamco excepteur
            labore ut occaecat duis aute laboris aute. Ex commodo laboris
            incididunt ex Lorem duis laborum esse amet fugiat id sint excepteur.
            Nisi occaecat eu laboris irure nisi occaecat ipsum. In magna anim
            aliquip officia culpa labore velit dolor. Incididunt enim Lorem
            irure consectetur commodo et ut pariatur aliquip cillum. Veniam sint
            pariatur est id quis aliqua elit Lorem eiusmod. Ea aliquip voluptate
            consectetur quis aliquip id elit ut deserunt sit labore eiusmod ad
            aliquip. Sit aliqua aute enim est ullamco nulla sint non fugiat
            irure occaecat. Ut irure sint eiusmod consequat et aute pariatur
            elit do ad ullamco nostrud. Deserunt ullamco non labore
            reprehenderit sunt voluptate. Officia sit irure non ea anim nulla id
            reprehenderit esse. Do aute aliquip proident adipisicing eiusmod ex
            nisi. Ullamco ipsum voluptate minim duis quis dolor consectetur sit
            consectetur Lorem velit. Laboris nostrud dolor ullamco consectetur
            deserunt nulla. Do nostrud deserunt consectetur ea nulla nisi
            ullamco voluptate officia eiusmod adipisicing mollit amet. Mollit
            laborum incididunt irure in id quis qui laboris eu sunt occaecat
            minim irure sit. Sint eiusmod excepteur sunt ad ad sit dolore amet
            labore mollit. Cupidatat minim voluptate eiusmod dolor et. Laborum
            non irure dolore incididunt anim proident anim fugiat id. Minim in
            proident consectetur minim irure consectetur sint cillum tempor
            ullamco. Anim nostrud irure minim aute dolore irure elit anim
            cupidatat id occaecat adipisicing aliqua.
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectOne;
