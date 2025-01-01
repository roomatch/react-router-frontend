import { Flex, Heading, Text } from "@radix-ui/themes";
import Accordion from "./components/accordion/accordion";

export default function Pricing() {
    return (
        <Flex direction="column" align="center" justify="center" gap="3" className="p-6">
            <Heading as="h1" align="center">Encuentra el plan perfecto para ti, elige ahora y paga solo si concretamos tu match</Heading>
            <Text as="p" align="center">Elige un plan asequible y diseñado con las mejores herramientas para conectar con roomies compatibles, asegurar confianza en el proceso, y facilitar la búsqueda de tu próximo hogar.</Text>
            <Accordion />
        </Flex>
    )
}
