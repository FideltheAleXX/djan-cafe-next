import DishOfDay from '@/components/dishOfDay/DishOfDay';
import DishSlider from '@/components/dishSlider/DishSlider';
import Location from '@/components/location/Location';

export default function Home() {
  return (
    <div>
      <DishSlider />
      <Location />
      <DishOfDay />
    </div>
  );
}
