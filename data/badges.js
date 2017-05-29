let shapes = [3, 4, 5, 6, 8, 10];

function count(state) { return shapes.map(s => state.shapes[s]); }
function sum(array) { return array.reduce((a, b) => a + b, 0); }

export default [
  {
    key: "pythagoras",
    name: "Pythagoras",
    description: "Scan three polygons.",
    bio: "Pythagoras of Samos was a mathematician and scientist in ancient Greek, famous for the theorem about triangles which is named after him. Little is known about his actual life – some even thought he was a son of the God Apollo. He founded a school of science and philosophy, travelled extensively, and discovered connections between music and mathematics.",
    validate(state) { return sum(count(state)) >= 9; }
  }, {
    key: "fermat",
    name: "Fermat",
    description: "Solve three power-ups.",
    bio: "Pierre de Fermat (1607–1665) was a French mathematician and lawyer. He once wrote a note in the margin of one of his textbooks, claiming that he had a “marvelous proof, which this margin is too narrow to contain”. This became known as “Fermat's Last Theorem”, and was one of the most famous unsolved problems in mathematics, until it was finally proven in 1994.",
    validate(state) { return state.powerups.length >= 3; }
  }, {
    key: "fibonacci",
    name: "Fibonacci",
    description: "Share your shapes with another visitor.",
    bio: "Leonardo Fibonacci was an Italian mathematician who lived in Pisa during the Middle Ages. He popularised the Arabic numeral system which we all use today, but is best known for the “Fibonacci numbers”, a sequence of numbers that describes the growth of (idealised) rabbit populations and appears in many other places in nature.",
    validate(state) { return false; /* TODO */ }
  }, {
    key: "plato",
    name: "Plato",
    description: "Complete all five Platonic solids.",
    bio: "Plato was a philosopher in ancient Greece, who – together with his teacher Socrates and his student Archimedes – laid the very foundation of Western philosophy. Plato founded the Academy of Athens, the first higher learning institution in Europe. His many writings on philosophy, science and politics make him one of the most influential thinkers of all time.",
    validate(state) { return state.polyhedra.includes('tetrahedron') &&
      state.polyhedra.includes('octahedron') &&
      state.polyhedra.includes('cube') &&
      state.polyhedra.includes('dodecahedron') &&
      state.polyhedra.includes('icosahedron'); }
  }, {
    key: "euler",
    name: "Euler",
    description: "Scan one of each different polygon.",
    bio: "Leonhard Euler (1707–1783) is one the greatest mathematicians of all times. His work spans all areas of mathematics, and he wrote 80 volumes of research. Euler was born in Switzerland in 1707. He invented much of the modern mathematical terminology and notation, and made important discoveries in calculus, analysis, graph theory, physics, astronomy and many other topics.",
    validate(state) { return Math.min(...count(state)) >= 2; }
  }, {
    key: "euclid",
    name: "Euclid",
    description: "Collect 20 copies of the same shape.",
    bio: "Euclid of Alexandria was a Greek mathematician and is often called the “father of geometry”. His book  “Elements” contains many important proofs in geometry and number theory, and was the main textbook for teaching mathematics until the 19th century! Very little else is known about his life.",
    validate(state) { return Math.max(...count(state)) >= 20; }
  }, {
    key: "gauss",
    name: "Gauss",
    description: "Solve ten power-ups.",
    bio: "Carl Friedrich Gauss (1777–1855) is arguably the greatest mathematician of all times. He made groundbreaking discoveries in just about ever field of mathematics, from algebra and number theory to statistics, calculus, geometry, geology and astronomy. According to legend, he corrected a mistake in his father‘s accounting at the age of 3, made his first important discoveries while still a teenager, and later tutored many other famous mathematicians.",
    validate(state) { return state.powerups.length >= 10; }
  }, {
    key: "archimedes",
    name: "Archimedes",
    description: "Complete all 13 Archimedean solids.",
    bio: "Archimedes was a mathematician, scientist and engineer in ancient Greece. While taking a bath, Archimedes discovered a way to determine the volume of irregular objects using the amount of water they displaced when submerged. He was so excited by this discovery that he run out on the street, still undressed, yelling “Eureka!”. He also built ingenious defence machines during the siege of his home city Syracuse.",
    validate(state) { return state.polyhedra.length >= 18; }
  }
];