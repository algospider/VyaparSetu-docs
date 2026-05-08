import { ScreenCard } from "../components/Cards";
import { PageHero } from "../components/PageHero";
import { screens } from "../data/content";

export function Screens() {
  return (
    <>
      <PageHero eyebrow="App Screens" title="Clean screen layouts for real shop work.">
        Each screen has one clear job: bill, manage stock, track dues, review reports, or switch stores.
      </PageHero>
      <section className="section screens-section">
        <div className="screen-grid">
          {screens.map((screen) => (
            <ScreenCard key={screen.screen} screen={screen} />
          ))}
        </div>
      </section>
    </>
  );
}
