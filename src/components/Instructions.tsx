import RecipeTitle from './RecipeTitle';

type Instruct = {
  label: string;
  text: string;
};

const instructionsList: Instruct[] = [
  {
    label: 'Beat the eggs',
    text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
  },
  {
    label: 'Heat the pan',
    text: 'Place a non-stick frying pan over medium heat and add butter or oil.',
  },
  {
    label: 'Cook the omelette',
    text: 'Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
  },
  {
    label: 'Add fillings (optional)',
    text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    label: 'Fold and serve',
    text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
  },
  {
    label: 'Enjoy',
    text: 'Serve hot, with additional salt and pepper if needed.',
  },
];

function Instructions() {
  return (
    <section className='mb-7'>
      <RecipeTitle text='instructions' />
      <ol className='px-6 list-decimal font-bold'>
        {instructionsList.map((item, i) => {
          return (
            <li key={i} className='pl-4 text-brown mb-2.5 last:mb-0'>
              <span className='text-stone-3 font-bold mr-1'>{item.label}:</span>
              <span className='text-stone-3 font-normal'>{item.text}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Instructions;
