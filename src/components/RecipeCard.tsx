import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import omeletteImg from '@/assets/images/image-omelette.jpeg';
import {
  Preparation,
  Ingredients,
  Instructions,
  Nutrition,
} from '@/components';

function RecipeCard() {
  return (
    <Card className='sm:my-20 w-full max-w-[45rem] rounded-none sm:rounded-[1.25rem] border-none font-outfit'>
      <CardHeader className='p-0 sm:p-9 sm:pb-0'>
        <img
          src={omeletteImg}
          alt='omelette'
          className='sm:rounded-xl w-full object-cover'
        />
      </CardHeader>
      <CardContent className='p-9 pb-0'>
        <h1 className='capitalize mb-7 text-3xl sm:text-4xl font-youngSerif text-stone-4'>
          simple omelette recipe
        </h1>
        <p className='text-stone-3 mb-7'>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <Preparation />

        <Ingredients />
        <Separator className='mb-7' />

        <Instructions />
        <Separator className='mb-7' />
      </CardContent>
      <CardFooter className='p-9 pt-0'>
        <Nutrition />
      </CardFooter>
    </Card>
  );
}

export default RecipeCard;
