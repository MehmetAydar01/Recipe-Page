type RecipeTitleProps = {
  text: string;
};

function RecipeTitle({ text }: RecipeTitleProps) {
  return (
    <h2 className='capitalize text-brown mb-5 text-2xl sm:text-3xl font-youngSerif font-normal'>
      {text}
    </h2>
  );
}

export default RecipeTitle;
