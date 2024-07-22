import Layout from "../../layout/Layout";
import Head from "next/head";
import ImageCarousel from "../../components/Carousel/Carousel";
import Slider from "../../components/Slider/Slider";

export default function HabanaPage() {
  const carouselItems = [
    {
      src: "/images/havana-tours/puente-bacunayagua.jpg",
      altText: "Slide 1",
      caption: "La Habana",
      key: 1,
    },
    {
      src: "/images/havana-tours/habana.jpg",
      altText: "Slide 2",
      caption: "La Habana",
      key: 2,
    },
    {
      src: "/images/havana-tours/Malecon.jpg",
      altText: "Slide 3",
      caption: "Malecon",
      key: 3,
    },
    {
      src: "/images/havana-tours/museo-de-la-revolucion.jpg",
      altText: "Slide 4",
      caption: "Museo de la Revolución",
      key: 4,
    },
    {
      src: "/images/havana-tours/Plaza-de-la-revolucion.jpg",
      altText: "Slide 5",
      caption: "Plaza de la Revolución",
      key: 5,
    },
    {
      src: "/images/havana-tours/Grand-Theater.jpg",
      altText: "Slide 6",
      caption: "Gran Teatro de la Habana",
      key: 6,
    },
  ];

  const slideItems = [
    {
      src: "/images/havana-tours/Cristo-De-La-Habana.jpg",
      title: "Cristo de la Habana",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 1,
    },
    {
      src: "/images/havana-tours/habana-vieja-catedral-a.jpg",
      title: "Plaza de la Catedral",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 2,
    },
    {
      src: "/images/havana-tours/san-francisco-2.jpg",
      title: "Plaza San Francisco de asis",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 3,
    },
    {
      src: "/images/havana-tours/bodeguita-del-medio.jpg",
      title: "Bodeguita del Medio",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 4,
    },
    {
      src: "/images/havana-tours/Havana-capitolio.jpg",
      title: "Capitolio de la Habana",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 5,
    },
    {
      src: "/images/havana-tours/floridita.jpg",
      title: "Floridita",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 6,
    },
    {
      src: "/images/havana-tours/plaza-vieja.jpg",
      title: "Plaza Vieja",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      key: 7,
    },
  ];

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/smartdomino.ico" />
        <title>Excursión Habana</title>
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
              <h2>Excursión Habana</h2>
              <p style={{ textAlign: "justify" }}>
                 La Habana, Capital de Cuba es hoy en día uno de los destinos turísticos más dinámicos y atractivos del Caribe. El paso por el puente Bacunayagua, el más alto de Cuba y uno de los más largos desde donde se pueden apreciar paisajes de gran belleza, contemplando el Valle de Yumuri es un valor agregado al largo viaje desde Varadero. Realizar en exclusiva un recorrido por La Habana Vieja y La Habana Moderna con su historia, disfrutar de la maravillosa arquitectura de sus calles y su idiosincrasia es uno de los mejores atractivos. Proponemos recorridos panorámicos por los sitios más significativos de la historia, la cultura y la vida cubana actual.
              </p>

              <p style={{ textAlign: "justify" }}>
                Estamos dispuestos a complacer los más diversos intereses, es por eso que el itinerario se ajusta el día del tour considerando cada deseo particular de nuestros clientes.
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Itinerario Clasico</strong>
              </p>

              <ul style={{ textAlign: "left", fontSize: "16px" }}>
                <li>Recogida en hotel.</li>
                <li>Visita el Mirador de Bacunayagua.</li>
                <li>Visita a los alrededores del parque Morro – Cabaña.</li>
                <li>
                  Recorrido por La Habana Vieja con sus cuatro plazas. (Plaza de Armas, Plaza San Francisco de Asís, Plaza Vieja y Plaza de la Catedral).
                </li>
                <li>
                  Recorra la Habana colonial declarada patrimonio de la humanidad por la UNESCO en 1982, recorrido a pie por el interior del centro histórico que incluye fortalezas y edificios construidos por españoles de los siglos XVI al XIX.
                </li>
                <li>
                  Almuerzo en un restaurante de comida típica cubana (precio promedio 20 cuc/persona)
                </li>
                <li>
                  Visita al Hotel Ambos Mundos (hotel habitual de Ernest Hemingway).
                </li>
                <li>
                  Visita a la Bodeguita del Medio; principales calles y avenidas de la habana vieja.
                </li>
                <li>
                  Recorrido panorámico: El Capitolio / Gran Teatro de La Habana / Muelle de La Habana, tiempo de fotografías.
                </li>
                <li>Visita al «Hotel Nacional»</li>
                <li>Visita a la plaza de la Revolución, tiempo de fotografías.</li>
                <li>
                  Tiempo libre para visitar el Mercado de las Pulgas, el más grande de Cuba
                </li>
                <li>Regreso al hotel.</li>
              </ul>

              <p style={{ textAlign: "left" }}>
                <strong>Recomendado: </strong>ropa ligera, gafas de sol, cámara de fotos, gorra y crema solar.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-md-offset-2 main-heading">
              <strong>Algunos sitios a visitar:</strong>
            </div>
          </div>

          <div className="row">
            <Slider id={"havana-tours-slider"} items={slideItems} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
