import { Flex, Heading, Text } from "@radix-ui/themes";
import HeartHandshake from "./assets/heart-handshake";
import CalendarUp from "./assets/calendar-up";
import Adjustments from "./assets/adjustments";
import Package from "./assets/package";
import Spy from "./assets/spy";
import Messages from "./assets/messages";

export default function Features() {
    const featuresProps = [
        {
            title: "1. Encuentra tu roomie perfecto",
            description: "Nuestro algoritmo avanzado te conecta con personas compatibles según tus intereses, estilo de vida y preferencias personales. Roomatch hace el trabajo por ti.",
            gradient: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] to-transparent from-prussian-blue",
            icon: <HeartHandshake />,
        },
        {
            title: "2. Ahorra tiempo y esfuerzo",
            description: "Olvídate de buscar por semanas. Roomatch automatiza todo el proceso, desde la recopilación de datos hasta el emparejamiento, para que puedas enfocarte en lo importante: preparar tu próximo hogar.",
            gradient: "bg-gradient-to-r from-transparent to-prussian-blue",
            icon: <CalendarUp />,
        },
        {
            title: "3. Herramientas personalizadas",
            description: "Filtra según tus necesidades específicas: rango de precios, ubicaciones preferidas, hábitos, personalidad y más. Nuestro sistema te ofrece flexibilidad y control, pero también una guía completa durante el proceso.",
            gradient: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-prussian-blue to-transparent",
            icon: <Adjustments />,
        },
        {
            title: "4. Planes diseñados para ti",
            description: "Te ofrecemos diferentes planes que se adaptan a tus necesidades. Desde asesorías contractuales y verificaciones de confianza de usuarios, hasta asistencia en la mudanza y ayuda en cambios imprevistos. ¡Encuentra tu plan!",
            gradient: "bg-gradient-to-t from-prussian-blue to-transparent",
            icon: <Package />,
        },
        {
            title: "5. Anonimato y privacidad garantizada",
            description: "Tu privacidad es nuestra prioridad. Todo el proceso de búsqueda y match se realiza completamente anónima para ambas partes, hasta que el match sea confirmado. Puedes sentirte tranquilo.",
            gradient: "bg-gradient-to-tl from-transparent  to-prussian-blue",
            icon: <Spy />,
        },
        {
            title: "6. Espacios para conocer y decidir",
            description: "Queremos que te sientas seguro con tu elección. Ofrecemos espacios que permiten conocer mejor a tus posibles roomies y próximos hogares.",
            gradient: "bg-gradient-to-br from-transparent to-prussian-blue",
            icon: <Messages />,
        },
    ]
    return (
        <Flex direction="column" align="center" justify="center" gap="3" className="p-6">
            <Heading as="h1" align="center">¿Por qué buscar tus roomies y vivienda compartida en Roomatch?</Heading>
            
            {featuresProps.map(feature => 
                <article className={`justify-between items-center flex flex-col gap-6 text-pretty p-6 h-[28rem] w-80 rounded-lg shadow-[0px_10px_100px_-60px_theme(colors.electric-indigo)] ${feature.gradient}`}>
                    <Flex direction="column" gap="4">
                        <Heading as="h1" size="4" >{feature.title}</Heading>
                        <Text as="p">{feature.description}</Text>
                    </Flex>
                    {feature.icon}
                </article>
            )}
        </Flex>
    )
}
