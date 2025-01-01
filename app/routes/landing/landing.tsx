import Features from "./components/features/features";
import Hero from "./components/hero/hero";
import Pricing from "./components/pricing/pricing";
import Problematic from "./components/problematic/problematic";

export default function Landing() {
  return (
    <main>
      <Hero />
      <Features />
      <Problematic />
      <Pricing />
    </main>
  )
}
