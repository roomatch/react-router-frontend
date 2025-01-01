import { Button, Flex, Heading, Blockquote } from "@radix-ui/themes";
import { useState } from "react";
import Plus from "./assets/plus";
import Minus from "./assets/minus";

export default function Problematic() {

    const [isExpanded, setIsExpanded] = useState(false);

    const problematicParagraphs = [
        "Así, cada semestre un sinnúmero de estudiantes colombianos, provenientes de varios departamentos se desplazan de su ciudad de origen con el objetivo de empezar su vida universitaria. Se trata de un cambio trascendental en la vida de cada uno de ellos, ya que, a su corta edad, deben dejar atrás, sus familias, costumbres, culturas, amigos y su entorno vida.",
        "El espectro de situaciones es amplio en este grupo de estudiantes, están los que cuentan con el apoyo familiar en la ciudad de destino o los que, aunque no cuentan con ese apoyo, cuentan con la capacidad económica para costear un apartamento o apartaestudio. Por otro lado, están los dependientes de sostenimientos gubernamentales y en un extremo, los que en cada mes el pago de la vivienda es una incertidumbre, como es el caso de Gabriel Pazos, para quien la vida universitaria se ha vuelto traumatizante.",
        "Un estudio de Properati halló que en Bogotá el precio promedio de un apartaestudio, sin tener en cuenta otros costos adicionales como administración y amoblado, es de $1.470.000 COP, sin embargo, un informe del Laboratorio de Economía de la Educación de la Universidad Javeriana encontró que el 70% de personas que entran a la universidad pertenecen a los estratos 1 y 2, para quienes sus hogares no superan ni siquiera el salario mínimo. Es por esto por lo que quienes no pueden costear este valor deciden irse por alternativas como, pensionados, habitaciones en casas de familias y habitaciones y apartamentos compartidos. Las alternativas anteriormente mencionadas, e incluso las residencias universitarias, no aseguran la calidad de vida de los estudiantes, ya que introducen aspectos como espacios compartidos con otras personas, convivencia entre personas que pueden tener personalidades completamente opuestas, reglas absurdas y hasta en algunos casos malos tratos por parte de los arrendadores hacia los arrendatarios.",
        "Es por esto que Roomatch está dirigido a ti, que tienes la necesidad de dividir gastos relacionados con la vivienda, donde a la vez quieres conectar con personas con las que puedes compartir un espacio, valores, intereses, convivir a gusto y ser tú mismo.",
        "Estamos comprometidos con crear un impacto positivo en ti, acabando con el estrés de vivir con las personas incorrectas. Deseamos que vivas en un lugar donde los gastos se comparten de manera justa y donde cada compañero de casa es alguien con quien conectas genuinamente. Eso es lo que traemos a tu vida.",
        "Gracias por unirte a la comunidad Roomatch, estamos emocionados de comenzar este viaje contigo y poder resolver esta problemática. Juntos, crearemos conexiones ideales y tu lugar seguro.",
    ];
    return (
        <Flex direction="column" align="center" justify="center" gap="3" className="p-6">
            <Heading as="h1" align="center" className="max-w-[768px]">Lo que nos mueve en Roomatch</Heading>
            <Flex direction="column" align="center" justify="center" gap="6">
                <Flex direction="column" align="center">
                    <Blockquote className="text-pretty max-w-[768px]">El Laboratorio de Economía de la Educación de la Universidad Javeriana presentó un informe que muestra que de los graduados de bachiller en 2018 y que comenzaron sus estudios universitarios en el 2019, el 72.38% lo hicieron en ciudades distintas a sus ciudades de residencia; Bogotá recibió el 56.79% de aquellos estudiantes y es la única ciudad donde los jóvenes recién graduados del colegio de otras regiones que entran a la universidad son más que los mismos jóvenes locales.</Blockquote>
                    <Flex as="span" direction="column" gap="6" className={`max-h-0 max-w-[768px] overflow-hidden transition-[max-height] duration-700 ${isExpanded ? 'max-h-[600rem] transition-[max-height]' : null}`}>
                        {problematicParagraphs.map((paragraph, index) => (
                            <Blockquote className={!index ? 'mt-6' : 'text-'}>{paragraph}</Blockquote>
                        ))}
                    </Flex>
                </Flex>
                <Button className="hover:cursor-pointer group transition-all" variant="surface" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <Minus /> : <Plus />} Leer {isExpanded ? 'menos' : 'mas'}</Button>
            </Flex>
        </Flex>
    )
}
