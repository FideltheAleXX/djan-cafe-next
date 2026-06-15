import DishOfDay from '@/components/dishOfDay/DishOfDay';
import DishSlider from '@/components/dishSlider/DishSlider';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
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
