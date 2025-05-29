
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tus Ventas en 24 Horas" subheadline="Diseñamos tu web de ventas en menos de 24 horas, sin anuncios pagados, para que empieces a vender en redes sociales de inmediato." cta1="Inicia Ahora" />
<How step1Title="Inscribe en Curso de Ventas Express" step1Desc="Transforma tu negocio en 3 semanas." step2Title="Digitaliza tus Ventas" step2Desc="Vende en redes sociales, sin anuncios pagados." step3Title="Soporte 24/7 y Entrega Rápida" step3Desc="Obtén tu web de ventas en menos de 24 horas." />
<Aboutus headline="WebGo: Digitaliza tu negocio hoy" subheadline="WebGo proporciona soluciones efectivas y económicas para transformar tu negocio en digital, sin complicaciones y sin consumir tu valioso tiempo." beneficiotitulo1="Capacitación Efectiva" beneficio1="Aprende a vender en redes sociales sin publicidad paga." beneficiotitulo2="Transformación Digital Fácil" beneficio2="Digitalizamos tu negocio, tú te enfocas en vender." />
<Services heading="Hiperpotencia tus Ventas Digitales" description="Aprenda a digitalizar sus ventas de recomendación a través de redes sociales sin la necesidad de anuncios pagados. Ahorra tiempo y esfuerzo con nuestro Curso de Ventas Express." services={[{"name":"Curso de Ventas Express","icon":"play-circle","description":"Vende más en menos tiempo."},{"name":"Soporte 24/7","icon":"headset","description":"Ayuda siempre que la necesites."},{"name":"Web de ventas en 24h","icon":"clock","description":"Sitio web listo en un día."},{"name":"Gestión sin complicaciones","icon":"thumbs-up","description":"Nosotros nos encargamos del trabajo duro."},{"name":"Ventas sin anuncios pagados","icon":"dollar-sign","description":"Ahorra en publicidad."},{"name":"Digitalización de recomendaciones","icon":"share-alt","description":"Transforma tus referencias en ventas digitales."}]} />
<BeforeAndAfter subheadline="Transformaciones impresionantes, calidad insuperable. ¡Mira nuestras creaciones!" />
<Faq faqs={[{"pregunta":"¿Cómo puede ayudarme el Curso de Ventas Express de WebGo a digitalizar mis ventas?","respuesta":"Nuestro Curso de Ventas Express está diseñado específicamente para dueños de negocios como tú, que desean vender en redes sociales sin anuncios pagados. Te enseñaremos cómo crear estrategias de venta efectivas y cómo hacer crecer tu negocio en plataformas digitales. No necesitas gastar tiempo y recursos extras en administrar un sitio web."},{"pregunta":"¿Necesito tener conocimientos previos para tomar el Curso de Ventas Express de WebGo?","respuesta":"No, no necesitas tener experiencia previa en ventas en línea. Nuestro curso está diseñado para llevar a los dueños de negocios desde cero a ser expertos en ventas en redes sociales."},{"pregunta":"¿Cuánto cuesta el Curso de Ventas Express de WebGo y cómo puedo pagar?","respuesta":"El curso tiene un precio de $120.000 CLP / USD 150. Puedes pagar cómodamente en línea a través de diversos métodos de pago seguros y confiables."},{"pregunta":"¿Cuánto tiempo dura el Curso de Ventas Express y qué sucede si no puedo terminarlo en 3 semanas?","respuesta":"El curso está diseñado para completarse en 3 semanas, pero entendemos que cada persona tiene su propio ritmo. Así que no te preocupes si no puedes terminarlo en ese tiempo. Tendrás acceso al contenido del curso incluso después de las 3 semanas para que puedas aprender a tu propio ritmo."},{"pregunta":"¿Cómo puedo empezar a vender mis productos en línea después de terminar el Curso de Ventas Express de WebGo?","respuesta":"Una vez que hayas terminado nuestro curso, tendrás todas las herramientas y técnicas que necesitas para comenzar a vender tus productos en redes sociales sin ningún anuncio pago. Te guiaremos paso a paso en cómo configurar tus canales de venta y cómo atraer y retener a tus clientes."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio con Ventas Digitales" 
                      description="Emprende el viaje digital con nuestro Curso de Ventas Express y lleva tu negocio al siguiente nivel. No necesitas más recomendaciones, ¡necesitas ventas!"
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="gxAzP9c9RuYGzndMRel4YSoNDSC3"
                    />
<Footer />
    </main>
  );
}
