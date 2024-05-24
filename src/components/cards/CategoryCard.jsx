/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  return (
    <div className="border px-5 py-3 rounded">
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
}
