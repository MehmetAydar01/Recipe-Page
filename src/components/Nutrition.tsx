import RecipeTitle from './RecipeTitle';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

type Nutrit = {
  label: string;
  calory: string;
};

const nutritionList: Nutrit[] = [
  {
    label: 'Calories',
    calory: '277kcal',
  },
  {
    label: 'Carbs',
    calory: '0g',
  },
  {
    label: 'Protein',
    calory: '20g',
  },
  {
    label: 'Fat',
    calory: '22g',
  },
];

function Nutrition() {
  return (
    <section className='mb-7'>
      <RecipeTitle text='nutrition' />
      <p className='text-stone-3 mb-4'>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <Table className='text-base'>
        <TableBody>
          {nutritionList.map((item, i) => {
            return (
              <TableRow key={i}>
                <TableCell className='text-stone-3 p-3 pl-8'>
                  {item.label}
                </TableCell>
                <TableCell className='text-brown font-bold p-3'>
                  {item.calory}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default Nutrition;
