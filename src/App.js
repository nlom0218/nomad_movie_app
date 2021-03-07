import React from "react";

const foodILike = [
  {
    id: 1,
    name: "김치",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 2,
    name: "삼겹살",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  },
  {
    id: 3,
    name: "비빕밥",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  },
  {
    id: 4,
    name: "돈까스",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    id: 5,
    name: "김밥",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  },
];

function Food({ fav, picture }) {
  return (
    <div>
      <div>내가 좋아하는 음식: {fav}</div>
      <img src={picture} alt={fav} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>내가 좋아하는 음식</h1>
      {foodILike.map((item) => {
        return <Food id={item.id} fav={item.name} picture={item.image} />;
      })}
    </div>
  );
}

export default App;
