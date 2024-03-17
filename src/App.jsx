import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cards, setCards] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);

  let time = 0;
  let calories = 0;
  currentCook.map((item) => {
    time = time + parseInt(item.preparing_time);
    calories = calories + parseInt(item.calories);
  });

  const handleWantToCook = (menu) => {
    const isExist = wantToCook.find(
      (item) => item.recipe_id === menu.recipe_id
    );
    if (!isExist) {
      const newWantToCook = [...wantToCook, menu];
      setWantToCook(newWantToCook);
    } else {
      toast.warning("Already Added This Item");
    }
  };

  const handleDelete = (cook) => {
    setCurrentCook([...currentCook, cook]);
    const newCart = wantToCook.filter(
      (item) => item.recipe_id != cook.recipe_id
    );
    setWantToCook(newCart);
  };

  useEffect(() => {
    fetch("./fakeData.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="lg:max-w-[1320px] mx-auto font-Lexend">
      <ToastContainer />
      <div className="mt-12 mb-12">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-52">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Recipe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="flex justify-center items-center relative">
              <img
                className="absolute left-2"
                src="https://i.ibb.co/Jx2G6wm/Frame-16.png"
              ></img>
              <input
                type="text"
                placeholder="Search"
                className="input lg:flex bg-[#150B2B0D] input-bordered w-full pl-10 max-w-xs rounded-3xl mr-4 hidden"
              />
            </div>
            <a className="btn rounded-full bg-[#0BE58A]">
              <img src="https://i.ibb.co/KwLNNHH/Frame-17.png"></img>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ background: `url('https://i.ibb.co/2sMpxLJ/Rectangle-1-1.png')` }}
        className="lg:h-[600px] p-0 lg:p-3 rounded-xl flex flex-col items-center justify-center gap-7 mb-12 bg-cover bg-no-repeat"
      >
        <h1 className="text-center pt-3 lg:pt-0 text-5xl lg:text-6xl font-bold text-white">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-center text-sm lg:text-base text-white">
          Cooking classes will not only give you the prerequisite cooking skills
          but also help you set <br /> realistic goals and expose your mind to
          the culinary business
        </p>
        <div className="flex justify-center items-center gap-6 pb-3">
          <button className="btn rounded-3xl text-xl lg:text-2xl font-semibold bg-[#0BE58A] border-none">
            Explore Now
          </button>
          <button className="btn rounded-3xl text-xl lg:text-2xl font-semibold bg-transparent text-white">
            Our Feedback
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl lg:text-5xl font-semibold">Our Recipes</h1>
        <p className="text-base lg:text-lg text-center mt-6 mb-12">
           visual representations and creative concepts used to entice consumers with <br /> irresistible imagery and visual storytelling
        </p>

        <div className="lg:grid lg:grid-cols-2 gap-4 mb-28">
          <div className="lg:grid lg:grid-cols-1 gap-4">
            <div className="lg:grid lg:grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <Recipe
                  key={index}
                  handleWantToCook={handleWantToCook}
                  card={card}
                ></Recipe>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 shadow-2xl lg:p-6 rounded-xl">
            <h1 className="text-center text-2xl font-semibold">Want to cook: {wantToCook.length}</h1>
            <table className="text-center w-full mx-auto mt-10">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {wantToCook.map((cook, index) => (
                  <tr key={index}>
                    <td className="font-bold">{index + 1}</td>
                    <td className="text-[#878787]">{cook.recipe_name.slice(0, 15)}</td>
                    <td className="text-[#878787]">{cook.preparing_time} minutes</td>
                    <td className="text-[#878787]">{cook.calories} calories</td>
                    <td>
                      <button
                        onClick={() => handleDelete(cook)}
                        className="btn rounded-3xl bg-[#0BE58A]"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="text-center mt-40 text-2xl font-semibold">
              Currently cooking: {currentCook.length}
            </h1>
            <table className="text-center w-full mx-auto mt-10">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {currentCook.map((item, index) => (
                  <tr key={index}>
                    <td className="font-bold ">{index + 1}</td>
                    <td className="text-[#878787]">{item.recipe_name.slice(0, 15)}</td>
                    <td className="text-[#878787]">{item.preparing_time} minutes</td>
                    <td className="text-[#878787]">{item.calories} calories</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end gap-10 mt-6">
              <h1>Total Time = {time} min</h1>
              <h1>Total Calories = {calories} calories</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
