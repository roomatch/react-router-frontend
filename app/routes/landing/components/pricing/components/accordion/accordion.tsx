import * as RadixAccordion from "@radix-ui/react-accordion";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Plans from "./components/plans/plans";
import ChevronCompactDown from "./assests/chevron-compact-down";

export default function Accordion() {

    const roomieSeekPlans = [
        {
            name: 'Estándar',
            id: 'tier-standard-roomieseek',
            priceMonthly: 'Gratis',
            description: "¡Empieza tu búsqueda de manera fácil y gratuita! Con nuestro plan Estándar, tendrás acceso a las herramientas esenciales para encontrar el roomie ideal y el lugar perfecto para vivir. ¡Toma el control de tu experiencia desde el primer paso, sin costo alguno!",
            features: [
                {
                    title: 'Emparejamiento.',
                    description: 'Aprovecha de nuestro algoritmo de emparejamiento con todos sus filtros de personalidad y hábitos de vida para que puedas encontrar el roomie ideal para ti.',
                    isAvailable: true,
                },
                {
                    title: 'Llamada pre-match.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Notificaciones instantaneas a tu WhatsApp.',
                    description: 'te notificamos a tu WhatsApp automaticamente tengas nuevas ofertas de roomies y habitaciones y cualquier otro evento relacionado para que puedas estar enterado de todo lo que pasa contigo en Roomatch.',
                    isAvailable: true,
                },
                {
                    title: 'Explora tus compatibles.',
                    description: 'Navega libremente dentro de nuestra aplicación web entre las habitaciones y roomies que tenemos compatibles exclusivamente para ti, observa su perfil, preferencias, hábitos y decide con quien continuas el proceso, descartas totalmente o mantienes en favoritos para que puedas optimizar y organizar tu proceso de busqueda.',
                    isAvailable: true,
                },
                {
                    title: 'Garantia de convivencia.',
                    description: 'Establece junto a tu roomie el plan de acción claro y garantias en caso de que se requiera una separación por motivos de convivencia.',
                    isAvailable: true,
                },
                {
                    title: 'Prioridad.',
                    description: 'Ten prioridad sobre quienes también están interesados en una habitación y roomie que tu quieres para que puedas aumentar tu posibilidad de tener el mejor match.',
                    isAvailable: false,
                },
                {
                    title: 'Visitas al espacio.',
                    description: 'Consigue ayuda de una persona para empacara tus cosas, cargarlas y descargarlas para que puedas reducir el ajetreo natural de este proceso.',
                    isAvailable: false,
                },
                {
                    title: 'Asistencia en la mudanza.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: false,
                },
                {
                    title: 'Asesoria contractual.',
                    description: 'Revisamos el contrato de tu roomie arrendatario para que juntos podamos asegurarnos de que no hayan clauslas abusivas y costos ocultos.',
                    isAvailable: false,
                },
                {
                    title: 'Acceso anticipado.',
                    description: 'Accede antes que todos a nuestra oferta de roomies y habitaciones antes de que empiece la etapa de de emparejamiento para que puedas aumentar tu posibilidad de tener el mejor match.',
                    isAvailable: false,
                },
                {
                    title: 'Cambio imprevisto.',
                    description: 'Si tu vivienda y roomie no te convence después de un  tiempo, te ayudamos de manera gratuita a conseguir tu próximo roomie y habitación.',
                    isAvailable: false,
                },
            ],
        },
        {
            name: 'Plus',
            id: 'tier-plus-roomieseek',
            priceMonthly: '$5.000 COP',
            description: '¡Haz tu búsqueda más rápida y efectiva! Con el plan Plus, tendrás prioridad en matches, acceso anticipado a oportunidades exclusivas y la posibilidad de explorar espacios con nuestras visitas virtuales. ¡Todo lo que necesitas para asegurar la mejor opción antes que nadie!',
            features: [
                {
                    title: 'Emparejamiento.',
                    description: 'Aprovecha de nuestro algoritmo de emparejamiento con todos sus filtros de personalidad y hábitos de vida para que puedas encontrar el roomie ideal para ti.',
                    isAvailable: true,
                },
                {
                    title: 'Llamada pre-match.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Notificaciones instantaneas a tu WhatsApp.',
                    description: 'te notificamos a tu WhatsApp automaticamente tengas nuevas ofertas de roomies y habitaciones y cualquier otro evento relacionado para que puedas estar enterado de todo lo que pasa contigo en Roomatch.',
                    isAvailable: true,
                },
                {
                    title: 'Explora tus compatibles.',
                    description: 'Navega libremente dentro de nuestra aplicación web entre las habitaciones y roomies que tenemos compatibles exclusivamente para ti, observa su perfil, preferencias, hábitos y decide con quien continuas el proceso, descartas totalmente o mantienes en favoritos para que puedas optimizar y organizar tu proceso de busqueda.',
                    isAvailable: true,
                },
                {
                    title: 'Garantia de convivencia.',
                    description: 'Establece junto a tu roomie el plan de acción claro y garantias en caso de que se requiera una separación por motivos de convivencia.',
                    isAvailable: true,
                },
                {
                    title: 'Prioridad.',
                    description: 'Ten prioridad sobre quienes también están interesados en una habitación y roomie que tu quieres para que puedas aumentar tu posibilidad de tener el mejor match.',
                    isAvailable: true,
                },
                {
                    title: 'Visitas al espacio.',
                    description: 'Consigue ayuda de una persona para empacara tus cosas, cargarlas y descargarlas para que puedas reducir el ajetreo natural de este proceso.',
                    isAvailable: true,
                },
                {
                    title: 'Asistencia en la mudanza.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: false,
                },
                {
                    title: 'Asesoria contractual.',
                    description: 'Revisamos el contrato de tu roomie arrendatario para que juntos podamos asegurarnos de que no hayan clauslas abusivas y costos ocultos.',
                    isAvailable: false,
                },
                {
                    title: 'Acceso anticipado de 4 días.',
                    description: 'Accede antes que todos a nuestra oferta de roomies y habitaciones antes de que empiece la etapa de de emparejamiento para que puedas aumentar tu posibilidad de tener el mejor match.',
                    isAvailable: false,
                },
                {
                    title: 'Cambio imprevisto antes de 1 mes.',
                    description: 'Si tu vivienda y roomie no te convence después de un  tiempo, te ayudamos de manera gratuita a conseguir tu próximo roomie y habitación.',
                    isAvailable: false,
                },
            ],
        },
        {
            name: 'Pro',
            id: 'tier-pro-roomieseek',
            priceMonthly: '$20.000 COP',
            description: '¡La experiencia definitiva para quienes buscan tranquilidad y comodidad total! El plan Pro no solo te da acceso a todas las funciones de Roomatch, sino que también te respalda con asistencia en mudanzas, revisión de contratos y garantía de cambio gratuito si algo no funciona. ¡Asegura tu nueva vida con confianza y cero preocupaciones!',
            features: [
                {
                    title: 'Emparejamiento.',
                    description: 'Aprovecha de nuestro algoritmo de emparejamiento con todos sus filtros de personalidad y hábitos de vida para que puedas encontrar el roomie ideal para ti.',
                    isAvailable: true,
                },
                {
                    title: 'Llamada pre-match.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Notificaciones instantaneas a tu WhatsApp.',
                    description: 'te notificamos a tu WhatsApp automaticamente tengas nuevas ofertas de roomies y habitaciones y cualquier otro evento relacionado para que puedas estar enterado de todo lo que pasa contigo en Roomatch.',
                    isAvailable: true,
                },
                {
                    title: 'Explora tus compatibles.',
                    description: 'Navega libremente dentro de nuestra aplicación web entre las habitaciones y roomies que tenemos compatibles exclusivamente para ti, observa su perfil, preferencias, hábitos y decide con quien continuas el proceso, descartas totalmente o mantienes en favoritos para que puedas optimizar y organizar tu proceso de busqueda.',
                    isAvailable: true,
                },
                {
                    title: 'Garantia de convivencia.',
                    description: 'Establece junto a tu roomie el plan de acción claro y garantias en caso de que se requiera una separación por motivos de convivencia.',
                    isAvailable: true,
                },
                {
                    title: 'Prioridad.',
                    description: 'Ten prioridad sobre quienes también están interesados en una habitación y roomie que tu quieres para que puedas aumentar tu posibilidad de tener el mejor match.',
                    isAvailable: true,
                },
                {
                    title: 'Visitas al espacio.',
                    description: 'Consigue ayuda de una persona para empacara tus cosas, cargarlas y descargarlas para que puedas reducir el ajetreo natural de este proceso.',
                    isAvailable: true,
                },
                {
                    title: 'Asistencia en la mudanza.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Asesoria contractual.',
                    description: 'Revisamos el contrato de tu roomie arrendatario para que juntos podamos asegurarnos de que no hayan clauslas abusivas y costos ocultos.',
                    isAvailable: true,
                },
                {
                    title: 'Acceso anticipado de 7 días.',
                    description: 'Accede antes que todos a nuestra oferta de roomies y habitaciones antes de que empiece la etapa de de emparejamiento para que puedas aumentar tu posibilidad de tener el mejor match.',
                    isAvailable: true,
                },
                {
                    title: 'Cambio imprevisto antes de 2 meses.',
                    description: 'Si tu vivienda y roomie no te convence después de un  tiempo, te ayudamos de manera gratuita a conseguir tu próximo roomie y habitación.',
                    isAvailable: true,
                },
            ],
        },
    ];

    const roomieRentPlans = [
        {
            name: 'Estándar',
            id: 'tier-standard-roomierent',
            priceMonthly: [
                {
                    description: 'Si el arriendo de tu habitación cuesta menos de $800.000 COP:',
                    price: '$50.000 COP',
                },
                {
                    description: 'Si el arriendo de tu habitación cuesta $800.000 COP o más:',
                    price: '8% del costo del arriendo de tu habitación',
                },
            ],
            description: "¡Encuentra al roomie ideal para tu espacio de forma segura y efectiva! Con el plan Estándar, aprovecha nuestro avanzado algoritmo de emparejamiento, notificaciones automáticas y publicidad básica para destacar tu habitación. ¡Todo lo necesario para empezar a llenar tu espacio con confianza!",
            features: [
                {
                    title: 'Emparejamiento.',
                    description: 'Aprovecha de nuestro algoritmo de emparejamiento con todos sus filtros de personalidad y hábitos de vida para que puedas encontrar el roomie ideal para ti y tu espacio.',
                    isAvailable: true,
                },
                {
                    title: 'Llamada pre-match.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Publicidad.',
                    description: 'Publicitamos tu habitación en nuestras redes y otras comunidades para que puedas conseguir tu mejor roomie en el menor tiempo posible.',
                    isAvailable: true,
                },
                {
                    title: 'Garantia de convivencia.',
                    description: 'Establece junto a tu roomie el plan de acción claro y garantias en caso de que se requiera una separación por motivos de convivencia.',
                    isAvailable: true,
                },
                {
                    title: 'Fotos profesionales.',
                    description: 'Visitamos tu apartamento y tomamos fotos profesionales de tu espacio para que aumentes tus posibilidades de tener un match.',
                    isAvailable: false,
                },
                {
                    title: 'Primer pago.',
                    description: 'Recibe el pago del primer de tu primer mes de arriendo antes de que tu roomie se mude para que tengas más seguridad.',
                    isAvailable: false,
                },
                {
                    title: 'Contrato.',
                    description: 'Te ayudamos con tu contrato de arrendamiento para asegurarnos de que esté bien redactado, sea valido y firmado electronicamente.',
                    isAvailable: false,
                },
                {
                    title: 'Cambio imprevisto.',
                    description: 'Si tu roomie no cumple con el tiempo mínimo de permanencia establecido en tu contrato, te ayudamos de manera gratuita a conseguir a tu siguiente roomie.',
                    isAvailable: false,
                },
                {
                    title: 'Validación de roomie.',
                    description: 'Validamos tus roomies potenciales ´verificando antecedentes judiciales, ocupación actual y solvencia económica para que te sientas aún más seguro de tener un buen match.',
                    isAvailable: false,
                },
            ],
        },
        {
            name: 'Plus',
            id: 'tier-plus-roomierent',
            priceMonthly: [
                {
                    description: 'Si el arriendo de tu habitación cuesta menos de $800.000 COP:',
                    price: '$60.000 COP',
                },
                {
                    description: 'Si el arriendo de tu habitación cuesta $800.000 COP o más:',
                    price: '10% del costo del arriendo de tu habitación',
                },
            ],
            description: '¡Haz que tu oferta destaque y conecta con los mejores roomies! El plan Plus incluye fotos y videos profesionales de tu habitación, prioridad en la selección, y hasta el primer pago asegurado antes de la mudanza. ¡Convierte tu proceso de arrendamiento en una experiencia más rápida y confiable!',
            features: [
                {
                    title: 'Emparejamiento.',
                    description: 'Aprovecha de nuestro algoritmo de emparejamiento con todos sus filtros de personalidad y hábitos de vida para que puedas encontrar el roomie ideal para ti y tu espacio.',
                    isAvailable: true,
                },
                {
                    title: 'Llamada pre-match.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Publicidad.',
                    description: 'Publicitamos tu habitación en nuestras redes y otras comunidades para que puedas conseguir tu mejor roomie en el menor tiempo posible.',
                    isAvailable: true,
                },
                {
                    title: 'Garantia de convivencia.',
                    description: 'Establece junto a tu roomie el plan de acción claro y garantias en caso de que se requiera una separación por motivos de convivencia.',
                    isAvailable: true,
                },
                {
                    title: 'Fotos profesionales.',
                    description: 'Visitamos tu apartamento y tomamos fotos profesionales de tu espacio para que aumentes tus posibilidades de tener un match.',
                    isAvailable: true,
                },
                {
                    title: 'Primer pago.',
                    description: 'Recibe el pago del primer de tu primer mes de arriendo antes de que tu roomie se mude para que tengas más seguridad.',
                    isAvailable: true,
                },
                {
                    title: 'Contrato.',
                    description: 'Te ayudamos con tu contrato de arrendamiento para asegurarnos de que esté bien redactado, sea valido y firmado electronicamente.',
                    isAvailable: false,
                },
                {
                    title: 'Cambio imprevisto.',
                    description: 'Si tu roomie no cumple con el tiempo mínimo de permanencia establecido en tu contrato, te ayudamos de manera gratuita a conseguir a tu siguiente roomie.',
                    isAvailable: false,
                },
                {
                    title: 'Validación de roomie.',
                    description: 'Validamos tus roomies potenciales ´verificando antecedentes judiciales, ocupación actual y solvencia económica para que te sientas aún más seguro de tener un buen match.',
                    isAvailable: false,
                },
            ],
        },
        {
            name: 'Pro',
            id: 'tier-pro-roomierent',
            priceMonthly: [
                {
                    description: 'Si el arriendo de tu habitación cuesta menos de $800.000 COP:',
                    price: '$70.000 COP',
                },
                {
                    description: 'Si el arriendo de tu habitación cuesta $800.000 COP o más:',
                    price: '15% del costo del arriendo de tu habitación',
                },
            ],
            description: '¡La máxima tranquilidad para arrendar tu habitación! El plan Pro te respalda con validación de roomies, asistencia contractual, y garantía en caso de cambios imprevistos. Además, asegura tus ingresos desde el primer momento y deja en nuestras manos la tarea de encontrar al roomie perfecto. ¡Confía en Roomatch para lograr una experiencia sin preocupaciones!',
            features: [
                {
                    title: 'Emparejamiento.',
                    description: 'Aprovecha de nuestro algoritmo de emparejamiento con todos sus filtros de personalidad y hábitos de vida para que puedas encontrar el roomie ideal para ti y tu espacio.',
                    isAvailable: true,
                },
                {
                    title: 'Llamada pre-match.',
                    description: 'Ten la posibilidad de tener una llamada con tu futuro roomie antes de concretar el match para que puedas estar seguro de que es el roomie que quieres.',
                    isAvailable: true,
                },
                {
                    title: 'Publicidad.',
                    description: 'Publicitamos tu habitación en nuestras redes y otras comunidades para que puedas conseguir tu mejor roomie en el menor tiempo posible.',
                    isAvailable: true,
                },
                {
                    title: 'Garantia de convivencia.',
                    description: 'Establece junto a tu roomie el plan de acción claro y garantias en caso de que se requiera una separación por motivos de convivencia.',
                    isAvailable: true,
                },
                {
                    title: 'Fotos profesionales.',
                    description: 'Visitamos tu apartamento y tomamos fotos profesionales de tu espacio para que aumentes tus posibilidades de tener un match.',
                    isAvailable: true,
                },
                {
                    title: 'Primer pago.',
                    description: 'Recibe el pago del primer de tu primer mes de arriendo antes de que tu roomie se mude para que tengas más seguridad.',
                    isAvailable: true,
                },
                {
                    title: 'Contrato.',
                    description: 'Te ayudamos con tu contrato de arrendamiento para asegurarnos de que esté bien redactado, sea valido y firmado electronicamente.',
                    isAvailable: true,
                },
                {
                    title: 'Cambio imprevisto.',
                    description: 'Si tu roomie no cumple con el tiempo mínimo de permanencia establecido en tu contrato, te ayudamos de manera gratuita a conseguir a tu siguiente roomie.',
                    isAvailable: true,
                },
                {
                    title: 'Validación de roomie.',
                    description: 'Validamos tus roomies potenciales ´verificando antecedentes judiciales, ocupación actual y solvencia económica para que te sientas aún más seguro de tener un buen match.',
                    isAvailable: true,
                },
            ],
        },
    ];

    return (
        <RadixAccordion.Root  defaultValue="item-1" type="single" collapsible className="w-full">
            <RadixAccordion.Item value="item-1">
                <RadixAccordion.Trigger className="group bg-prussian-blue w-full flex rounded-t-lg hover:bg-electric-indigo transition-colors">
                    <RadixAccordion.Header className="flex justify-between items-center w-full px-4 py-2">
                        <Flex as="div" direction="column" align="start">
                            <Heading as="h2" size="4">RoomieSeek</Heading>
                            <Text as="div" align="left" size="1">Buscas una habitación en un apartamento compartido.</Text>
                        </Flex>
                        <ChevronCompactDown />
                    </RadixAccordion.Header>
                </RadixAccordion.Trigger>
                <RadixAccordion.Content asChild>
                    <Plans tiers={roomieSeekPlans}/>
                </RadixAccordion.Content>
            </RadixAccordion.Item>

            <RadixAccordion.Item value="item-2" className="mt-3">
                <RadixAccordion.Trigger className="group bg-prussian-blue w-full flex rounded-t-lg hover:bg-electric-indigo transition-colors">
                    <RadixAccordion.Header className="flex justify-between items-center w-full px-4 py-2">
                        <Flex as="div" direction="column" align="start">
                            <Heading as="h2" size="4">RoomieRent</Heading>
                            <Text as="div" align="left" size="1">Arriendas una habitación en un apartamento en el que vives.</Text>
                        </Flex>
                        <ChevronCompactDown />
                    </RadixAccordion.Header>
                </RadixAccordion.Trigger>
                <RadixAccordion.Content asChild>
                    <Plans tiers={roomieRentPlans}/>
                </RadixAccordion.Content>
            </RadixAccordion.Item>
        </RadixAccordion.Root>
    )
}

