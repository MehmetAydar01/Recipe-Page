import RecipeTitle from './RecipeTitle';

const ingredients: string[] = [
  '2-3 large eggs',
  'Salt, to taste',
  'Pepper, to taste',
  '1 tablespoon of butter or oil',
  'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
];

function Ingredients() {
  return (
    <section className='mb-7'>
      <RecipeTitle text='ingredients' />
      <ul className='px-6 list-disc'>
        {ingredients.map((item, i) => {
          return (
            <li key={i} className='pl-4 text-brown mb-2.5 last:mb-0'>
              <span className='text-stone-3'>{item}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Ingredients;
