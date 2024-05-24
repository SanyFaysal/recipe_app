import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";

export default function ManageAllRecipe() {
  const [recipes, setRescipes] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
    }
    load();
  }, []);
  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((recipe) => (
            <RecipeRow key={recipe?.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
