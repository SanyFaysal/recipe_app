import Banner from "../components/home/Banner";

export default function Home() {
  console.log("hi");
  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
        <div className="grid grid-cols-4 gap-6"></div>
      </div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6"></div>
      </div>
    </div>
  );
}
