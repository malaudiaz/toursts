import React from "react";
import Layout from "../layout/Layout";
import Head from "next/head";
import ImageCarousel from "../components/Carousel/Carousel";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { useRouter } from "next/router";

export default function HomePage() {
  const { push } = useRouter();

  const carouselItems = [
    {
      src: "/images/havana-tours/Malecon.jpg",
      altText: "Slide 1",
      caption: "Malecon de la Habana",
      key: 1,
    },
    {
      src: "/images/cienaga-de-zapata/guama.jpeg",
      altText: "Slide 2",
      caption: "Guama - Cienaga de Zapata",
      key: 2,
    },
    {
      src: "/images/matanzas/cueva-saturno.jpeg",
      altText: "Slide 3",
      caption: "Cuevas de Saturno - Matanzas",
      key: 3,
    },
    {
      src: "/images/viñales/mural-de-la-prehistoria.jpg",
      altText: "Slide 4",
      caption: "Mural de la Prehistoria - Viñales",
      key: 4,
    },
    {
      src: "/images/varadero/parque-josone-varadero.jpg",
      altText: "Slide 5",
      caption: "Parque Josone - Varadero",
      key: 5,
    },
    {
      src: "/images/cienfuegos/cienfuegos-palacio-ferer.jpg",
      altText: "Slide 6",
      caption: "Palacio Ferrer - Cienfuegos",
      key: 6,
    },
    {
      src: "/images/Trinidad/Trinidad.jpg",
      altText: "Slide 7",
      caption: "Trinidad",
      key: 7,
    },
    {
      src: "/images/santaclara/che-memorial-museum.jpg",
      altText: "Slide 8",
      caption: "Memorial Che Guevara - Santa Clara",
      key: 8,
    },
  ];

  const excursions = [
    {
      src: "/images/havana-tours/habana.jpg",
      title: "Excursión Habana",
      text: "La Habana, Capital de Cuba es hoy en día uno de los destinos turísticos más dinámicos y atractivos del Caribe.",
      path: "/havana",
      key: 1,
    },
    {
      src: "/images/havana-tours/cañonazo.jpg",
      title: "Atardecer en la Habana",
      text: "Esta excursión por la ciudad de la Habana, le permitirá disfrutar de La Habana durante el día y también de alguna actividad nocturna.",
      path: "/havana/evening",
      key: 2,
    },
    {
      src: "/images/havana-tours/tropicana.jpg",
      title: "Habana de Noche",
      text: " Podrá disfrutar de La Habana en la noche. Difruta la experiencia del Cabaret Tropicana, el show de Buena Vista Social Club o simplemente caminar el Malecón en la noche",
      path: "/havana/nights",
      key: 3,
    },
    {
      src: "/images/cienaga-de-zapata/guama.jpeg",
      title: "Cienaga de Zapata",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      path: "/cienaga",
      key: 4,
    },
    {
      src: "/images/matanzas/cueva-saturno.jpeg",
      title: "Varadero - Matanzas",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      path: "/matanzas",
      key: 5,
    },
    {
      src: "/images/cienfuegos/cienfuegos-palacio-ferer.jpg",
      title: "Cienfuegos - Trinidad",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      path: "/cienfuegos-trinidad",
      key: 6,
    },
    {
      src: "/images/santaclara/che-memorial-museum.jpg",
      title: "Santa Clara - Trinidad - Cienfuegos",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      path: "/staclara-trinidad-cienfuegos",
      key: 7
    },
    {
      src: "/images/viñales/cueva-del-indio.jpg",
      title: "Viñales",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      path: "/vinales",
      key: 8
    },
  ];

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/smartdomino.ico" />
        <title>Cuba Excursiones</title>
      </Head>

      <div className="row">
        <div className="col-md-12">
          <div>
            <ImageCarousel id={"mainCarousel"} items={carouselItems} />
          </div>
        </div>
      </div>

      <section className="row">
        <div className="col-md-12 col-md-offset-2 main-heading text-center pt-4">
          <h2>Cuba Excursiones</h2>
          <p style={{ textAlign: "justify" }}>
            Cuba Excursiones pone a disposición las más variadas y atractivas excursiones, que garantizan el disfrute pleno del destino elegido durante tus vacaciones en Cuba. Disfruta y conoce los lugares mas interesentes de cuba siempre en la compañia de un guía en su propio idioma. Le garantizamos una experiencia única para el destino elegido y un viaje confortable en un auto clasico climatizado. Reservando nuestras excursiones, tu viaje a Cuba se convierte en una experiencia inolvidable.
          </p>
        </div>
      </section>

      <section className="row text-center pb-4">
        <h2 className="pb-4">Nuestras Excursiones</h2>
        <div className="row excursion-container">
          {excursions.map(({ src, title, text, path }, idx) => (
            <div key={idx}>
              <Card className="excursion-card" onClick={() => push(path)}>
                <CardImg
                  alt="Excusion Image"
                  src={src}
                  top
                  width={"186"}
                  height={"200"}
                />
                <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  <CardText style={{ textAlign: "justify" }}>{text}</CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
}
