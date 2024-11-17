type PrepTime = {
  label: string;
  text: string;
};

const preparationTime: PrepTime[] = [
  {
    label: 'Total',
    text: 'Approximately 10 minutes',
  },
  {
    label: 'Preparation',
    text: '5 minutes',
  },
  {
    label: 'Cooking',
    text: '5 minutes',
  },
];

function Preparation() {
  return (
    <section className='bg-rose-1 py-6 px-6 rounded-xl mb-7'>
      <h2 className='text-rose-2 font-medium text-xl mb-3'>Preparation time</h2>
      <ul className='px-6 list-disc'>
        {preparationTime.map((item, i) => {
          return (
            <li key={i} className='text-rose-2 pl-4 mb-2.5 last:mb-0'>
              <span className='text-stone-3 font-bold mr-1'>{item.label}:</span>
              <span className='text-stone-3'>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Preparation;
