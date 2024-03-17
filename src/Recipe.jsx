const Recipe = ({ card, handleWantToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;

  return (
    <div>
      <div className="shadow-2xl lg:p-6 p-2 mt-6 lg:mt-0 rounded-xl col-span-1 lg:h-[730px]">
        <div className="h-[200px] lg:w-full rounded-2xl">
          <img
            className="rounded-2xl h-[200px] w-full"
            src={recipe_image}
            alt=""
          />
        </div>
        <h1 className="mt-6 lg:text-xl font-semibold text-2xl">
          {recipe_name}
        </h1>
        <p className="mb-4 mt-4 text-sm lg:text-base text-[#878787]">{short_description}</p>
        <h2 className="pt-4 mb-4 text-lg lg:text-xl font-medium text-lg">
          Ingredients: {ingredients.length}
        </h2>
        <ul className="list-disc ml-5 text-[#878787]">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="flex justify-start gap-4 mt-8">
          <div className="flex items-center gap-2">
            <img className="" src="../Image/Frame (5).svg" alt="" />
            <p className="text-sm lg:text-base text-[#878787]">{preparing_time} minutes</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="../Image/Frame (6).svg" alt="" />
            <p className="text-sm lg:text-base text-[#878787]">{calories} calories</p>
          </div>
        </div>
        <button
          onClick={() => handleWantToCook(card)}
          className="btn rounded-3xl bg-[#0BE58A] mt-6 w-full lg:w-auto"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Recipe;
