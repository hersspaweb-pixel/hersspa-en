import About from '@/components/About';
import Thumbnail from '@/components/Thumbnail';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Thumbnail />
      <About />
    </div>
  );
}
