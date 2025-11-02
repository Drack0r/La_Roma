import { usePageClass } from "../hook/usePageClass";

export function Home() {
  usePageClass();

  return (
    <>
      <section className="hero">
        <h3>Hero</h3>
      </section>

      <section className="recommanded-dishes">
        <h3>Nos plats recommandés</h3>
      </section>

      <section className="expertise">
        <h3>Notre savoir faire</h3>
      </section>

      <section className="today">
        <h3>Aujourd'hui</h3>
      </section>

      <section className="reservation">
        <h3>Réserver</h3>
      </section>

      <section className="testimonials">
        <h3>Avis clients</h3>
      </section>

      <section className="team">
        <h3>Notre équipe</h3>
      </section>

      <section className="location">
        <h3>Localisation</h3>
      </section>

      <section className="opening-hours">
        <h3>Horaires</h3>
      </section>
    </>
  );
}
