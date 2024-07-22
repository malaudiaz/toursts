import Head from "next/head";
import Layout from "../../../layout/Layout";
import ImageCarousel from "../../../components/Carousel/Carousel";

export default function HavanaEvening() {
  const carouselItems = [
    {
      src: "/images/havana-tours/Paseo costero Malecon.jpg",
      altText: "Slide 1",
      caption: "Paseo Costero por el Malecon",
      key: 1,
    },
    {
      src: "/images/havana-tours/Plaza-De-La-Catedral.jpg",
      altText: "Slide 2",
      caption: "Plaza de la Catedral",
      key: 2,
    },
    {
      src: "/images/havana-tours/Havana morro.jpg",
      altText: "Slide 3",
      caption: "Castillo del Morro",
      key: 3,
    },
    {
      src: "/images/havana-tours/cañonazo.jpg",
      altText: "Slide 4",
      caption: "Ceremonia del Cañonazo de las 9",
      key: 4,
    },
    {
      src: "/images/havana-tours/08-1140.jpg",
      altText: "Slide 5",
      caption: "Ceremonia del Cañonazo de las 9",
      key: 5,
    },
  ];

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/smartdomino.ico" />
        <title>Atardecer en la Habana</title>
      </Head>
      <div className="main-container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <ImageCarousel id={"mainCarousel"} items={carouselItems} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-md-offset-2 main-heading text-center pt-4">
              <h2>Atardecer en la Habana</h2>
              <p style={{ textAlign: "justify" }}>
                Esta versión del tour por la ciudad de La Habana le permitirá
                disfrutar de La Habana durante el día y también un poco de las
                actividades nocturnas. Te podemos llevar a cenar a un gran
                restaurante cubano con música en vivo y también a disfrutar de
                la muy popular y tradicional ceremonia del cañonazo que se ha
                convertido en visita obligada para los visitantes. Además, el
                paisaje de la ciudad en la noche ofrecerá una experiencia
                inolvidable. Este recorrido se realizará hasta las 21:00 horas.
                Para clientes radicados en Varadero los dejaremos en cualquier
                momento entre las 9:00 pm y las 11:00 pm según sus preferencias.
              </p>

              <p style={{ textAlign: "justify" }}>
                Estamos dispuestos a complacer los más diversos intereses, es
                por eso que el itinerario se ajusta el día del tour considerando
                cada deseo particular de nuestros clientes.
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Itinerario Clasico</strong>
              </p>

              <ul style={{ textAlign: "left", fontSize: "16px" }}>
                <li>Recogida en hotel.</li>
                <li>Visita el Mirador de Bacunayagua.</li>
                <li>Visita a los alrededores del parque Morro – Cabaña.</li>
                <li>
                  Recorrido por La Habana Vieja con sus cuatro plazas. (Plaza de
                  Armas, Plaza San Francisco de Asís, Plaza Vieja y Plaza de la
                  Catedral).
                </li>
                <li>
                  Recorra la Habana colonial declarada patrimonio de la
                  humanidad por la UNESCO en 1982, recorrido a pie por el
                  interior del centro histórico que incluye fortalezas y
                  edificios construidos por españoles de los siglos XVI al XIX.
                </li>
                <li>
                  Almuerzo en un restaurante de comida típica cubana (precio
                  promedio 20 cuc/persona)
                </li>
                <li>
                  Visita al Hotel Ambos Mundos (hotel habitual de Ernest
                  Hemingway).
                </li>
                <li>
                  Visita a la Bodeguita del Medio; principales calles y avenidas
                  de la habana vieja.
                </li>
                <li>
                  Recorrido panorámico: El Capitolio / Gran Teatro de La Habana
                  / Muelle de La Habana, tiempo de fotografías.
                </li>
                <li>Visita al «Hotel Nacional»</li>
                <li>
                  Visita a la plaza de la Revolución, tiempo de fotografías.
                </li>
                <li>
                  Tiempo libre para visitar el Mercado de las Pulgas, el más
                  grande de Cuba
                </li>
                <li>Comida en un restaurante de comida típica cubana</li>
                <li>Ceremonia del Cañonazo en la fortaleza Morro-Cabañas</li>
                <li>Regreso al hotel.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
