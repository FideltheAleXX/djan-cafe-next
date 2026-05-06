import DishSlider from '@/components/dishSlider/DishSlider';
import Header from '@/components/header/Header';
import Location from '@/components/location/Location';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <DishSlider />
        <Location />
      </main>
    </div>
  );
}
