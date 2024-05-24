/* eslint-disable react/prop-types */
import pizza from "../../assets/pizza.webp";

export default function RecepiCard({ recipe }) {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={pizza} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe?.title}</h2>
        <h2 className="card-title">{recipe?.price}</h2>
        <p>
          {recipe?.description?.length > 30
            ? recipe?.description?.slice(0, 30)
            : recipe?.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{recipe?.category}</div>
        </div>
      </div>
    </div>
  );
}
