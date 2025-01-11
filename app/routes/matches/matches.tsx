import { getRoomie } from "~/api/jotform";
import type { Route } from "./+types/matches";
import { AlertDialog, Badge, Box, Button, DataList, Flex, Heading, Text } from "@radix-ui/themes";
import InfoCircle from "../landing/components/pricing/components/accordion/components/plans/components/tootip/assets/info-circle";
import roomatchLogo from '../../assets/logo-no-letters.svg'

export async function loader({ params }: Route.LoaderArgs) {
  const roomieInfo = await getRoomie(params.phoneNumber);
  return roomieInfo;
}

export default function Matches({
  loaderData,
}: Route.ComponentProps) {
  const roomieInfo = loaderData;
  const { compatibles } = roomieInfo;
  const cleanedCompatibles = compatibles.map(item => ({
    ...item,
    linkfotos: item.linkfotos?.replace("<p>", "").replace("</p>", "").split(";"),
    numberOfCompatibles: item.numberOfCompatibles
  }));

  return (
    <Flex id="planes" direction="column" align="center" justify="center" gap="3" className="p-6 max-w-[1024px] mx-auto">

      <img src={roomatchLogo} alt="Logo de Roomatch" className="size-20 p-2 bg-cerulean rounded-full bg-gradient-to-br to-cerulean from-prussian-blue shadow-[3px_3px_0px_0px_theme(colors.electric-indigo)]" />

      <Heading as="h1" align="center" className="max-w-[768px]">¡Estos son los roomies que son compatibles contigo!</Heading>

      <div className={`${cleanedCompatibles.length < 1 ? 'flex items-center justify-center flex-wrap' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center'} gap-3`}>
        <article className="overflow-y-scroll h-[28rem] justify-between items-center flex flex-col gap-6 text-pretty p-6 pt-0 w-80 rounded-lg shadow-[0px_10px_100px_-60px_theme(colors.electric-indigo)] bg-gradient-to-br from-transparent to-prussian-blue  sm:h-[32rem] md:h-[28rem] ">
          <Box as="div" className="h-2/3 w-full object-cover rounded-b-lg bg-electric-indigo p-3 pt-0">
            <img src="https://res-console.cloudinary.com/dkao0yswo/thumbnails/v1/image/upload/v1736546336/bnl3ZGI1aWt5MW9neWo5M3locW0=/drilldown" alt="foto de habitación no disponible" className="rounded-b-lg h-full mx-auto" />
          </Box>
          <Box as="div" className="h-1/3 w-full mx-auto">
            <Badge color="violet" mb="4">Puntaje de compatibilidad: {180}/210</Badge>
            <Badge color="crimson" mb="4">Otras 5 personas también <br /> son compatibles con este roomie</Badge>
            <DataList.Root orientation={{ initial: "vertical", sm: "horizontal" }}>
              <DataList.Item>
                <DataList.Label minWidth="88px">Edad:</DataList.Label>
                <DataList.Value>{roomieInfo.edad}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Género:</DataList.Label>
                <DataList.Value>
                  {roomieInfo.genero}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Ubicación:</DataList.Label>
                <DataList.Value>
                  {roomieInfo.localidadesBuscadas.at(0)}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px" maxWidth="100px">¿Qué espera de un buen roomie?</DataList.Label>
                <DataList.Value>
                  Simplemente sentido comun con el espacio, el ruido y el bienestar de los demás.
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Habitación 1</DataList.Label>
                <DataList.Value>
                  <Flex direction="column" gap="2">
                    <DataList.Item>
                      <DataList.Label>Precio:</DataList.Label>
                      <DataList.Value>
                        {roomieInfo.rangoPresupuestoMax - 35000}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label>¿Es amoblada?:</DataList.Label>
                      <DataList.Value>
                        Sí
                      </DataList.Value>
                    </DataList.Item>
                  </Flex>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button disabled className="hover:cursor-not-allowed" my="4">Ya no está disponible</Button>
              </AlertDialog.Trigger>
            </AlertDialog.Root>
          </Box>
        </article>

        <article className="overflow-y-scroll h-[28rem] justify-between items-center flex flex-col gap-6 text-pretty p-6 pt-0 w-80 rounded-lg shadow-[0px_10px_100px_-60px_theme(colors.electric-indigo)] bg-gradient-to-br from-transparent to-prussian-blue  sm:h-[32rem] md:h-[28rem] ">
          <Box as="div" className="h-2/3 w-full object-cover rounded-b-lg bg-electric-indigo p-3 pt-0">
            <img src="https://res.cloudinary.com/dkao0yswo/image/upload/v1736547455/472225539_122126573756570277_3135472162992730873_n_ynqmva.jpg" alt="foto de habitación no disponible" className="rounded-b-lg h-full mx-auto" />
          </Box>
          <Box as="div" className="h-1/3 w-full mx-auto">
            <Badge color="violet" mb="4">Puntaje de compatibilidad: {190}/210</Badge>
            <Badge color="crimson" mb="4">Otras 7 personas también <br /> son compatibles con este roomie</Badge>
            <DataList.Root orientation={{ initial: "vertical", sm: "horizontal" }}>
              <DataList.Item>
                <DataList.Label minWidth="88px">Edad:</DataList.Label>
                <DataList.Value>{roomieInfo.edad + 2}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Género:</DataList.Label>
                <DataList.Value>
                  {roomieInfo.genero}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Ubicación:</DataList.Label>
                <DataList.Value>
                  {roomieInfo.localidadesBuscadas.at(0)}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px" maxWidth="100px">¿Qué espera de un buen roomie?</DataList.Label>
                <DataList.Value>
                  Lo más importante es que esté abierto a hablar y acuerdos, que hayamos acordado personalidad y hábitos de vida por esta plataforma ya es lo más importante.
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Habitación 1</DataList.Label>
                <DataList.Value>
                  <Flex direction="column" gap="2">
                    <DataList.Item>
                      <DataList.Label>Precio:</DataList.Label>
                      <DataList.Value>
                        {roomieInfo.rangoPresupuestoMax - 80000}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label>¿Es amoblada?:</DataList.Label>
                      <DataList.Value>
                        Sí
                      </DataList.Value>
                    </DataList.Item>
                  </Flex>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button disabled className="hover:cursor-not-allowed" my="4">Ya no está disponible</Button>
              </AlertDialog.Trigger>
            </AlertDialog.Root>
          </Box>
        </article>
        {cleanedCompatibles.map(compatible =>
          <article className="overflow-y-scroll h-[28rem] justify-between items-center flex flex-col gap-6 text-pretty p-6 pt-0 w-80 rounded-lg shadow-[0px_10px_100px_-60px_theme(colors.electric-indigo)] bg-gradient-to-br from-transparent to-prussian-blue  sm:h-[32rem] md:h-[28rem] ">
            <Box as="div" className="h-2/3 w-full object-cover rounded-b-lg bg-electric-indigo p-3 pt-0">
              <img src={compatible.linkfotos?.at(0)} alt="foto de habitación no disponible" className="rounded-b-lg h-full mx-auto" />
            </Box>
            <Box as="div" className="h-1/3 w-full mx-auto">
              <Badge color="violet" mb="4">Puntaje de compatibilidad: {compatible.puntaje}/210</Badge>
              <Badge color="crimson" mb="4">Otras {compatible.numberOfCompatibles} personas también <br /> son compatibles con este roomie</Badge>
              <DataList.Root orientation={{ initial: "vertical", sm: "horizontal" }}>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Edad:</DataList.Label>
                  <DataList.Value>{compatible.edad}</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Género:</DataList.Label>
                  <DataList.Value>
                    {compatible.genero}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px">Ubicación:</DataList.Label>
                  <DataList.Value>
                    {compatible.localidadVivienda}
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="88px" maxWidth="100px">¿Qué espera de un buen roomie?</DataList.Label>
                  <DataList.Value>
                    {compatible.descripcionRommieIdeal}
                  </DataList.Value>
                </DataList.Item>
                {compatible.precioHabitacion.map((_, index) => (
                  <DataList.Item>
                    <DataList.Label minWidth="88px">Habitación {index + 1}</DataList.Label>
                    <DataList.Value>
                      <Flex direction="column" gap="2">
                        <DataList.Item>
                          <DataList.Label>Precio:</DataList.Label>
                          <DataList.Value>
                            {compatible.precioHabitacion[index]}
                          </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.Label>¿Es amoblada?:</DataList.Label>
                          <DataList.Value>
                            {compatible.amoblada[index]}
                          </DataList.Value>
                        </DataList.Item>
                      </Flex>
                    </DataList.Value>
                  </DataList.Item>
                ))}
              </DataList.Root>
              <AlertDialog.Root>
                <AlertDialog.Trigger>
                  <Button className="hover:cursor-pointer" my="4">Ver detalles</Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content className="min-w-[300px] max-w-[800px] w-full">
                  <AlertDialog.Title><Text className="text-mirrage">Conoce más detalles sobre este roomie</Text></AlertDialog.Title>
                  <div className="h-[400px] flex overflow-x-scroll overflow-y-hidden gap-x-2">
                    {compatible.linkfotos ? compatible.linkfotos?.map(link => (
                      <img src={link} className="h-[400px] object-cover rounded-lg" alt="foto de la vivienda" />
                    )) : [1, 2, 3, 4, 5, 6, 7].map(_ => (
                      <div className="h-[400px] rounded-lg flex p-4 items-center justify-center text-xs bg-prussian-blue text-center">
                        Este roomie aún no ha subido sus fotos, estarán disponibles lo más pronto posible.
                      </div>
                    ))}
                  </div>
                  <Flex direction="row" align="center" gap="2" wrap="wrap" mt="4">
                    <Badge color="jade" mb="4">Puntaje de compatibilidad: {compatible.puntaje}/210</Badge>
                    <Badge color="crimson" mb="4">Otras {compatible.numberOfCompatibles} personas también <br /> son compatibles con este roomie</Badge>
                    {(compatible.plan == 'Plus' || compatible.plan == 'Pro') ? <Badge color="cyan" mb="4">Requiere el pago del primer mes <br /> por anticipado</Badge> : null}
                    {compatible.plan == 'Pro' ? <><Badge color="amber" mb="4">Requiere la firma de un contrato</Badge><Badge color="purple" mb="4">Requiere que validemos tu confiabilidad <br /> con algunos documentos</Badge></> : null}
                  </Flex>
                  <DataList.Root orientation={{ initial: "vertical", sm: "horizontal" }} className="text-mirrage">
                    <Heading size="4" mb="2" className="text-mirrage">Información personal:</Heading>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Edad:</Text></DataList.Label>
                      <DataList.Value>{compatible.edad}</DataList.Value>
                    </DataList.Item>

                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Género:</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.genero}
                      </DataList.Value>
                    </DataList.Item>

                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Ubicación:</Text>:</DataList.Label>
                      <DataList.Value>
                        {compatible.localidadVivienda}
                      </DataList.Value>
                    </DataList.Item>

                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Ocupación:</Text>:</DataList.Label>
                      <DataList.Value>
                        {compatible.ocupacion.join(", ")}
                      </DataList.Value>
                    </DataList.Item>

                    {compatible.ocupacion.includes("Estudiante") ? <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Universidad donde estudia:</Text>:</DataList.Label>
                      <DataList.Value>
                        {compatible.universidad}
                      </DataList.Value>
                    </DataList.Item> : null}

                    <Heading size="4" mb="2" className="text-mirrage">Sobre las mascotas:</Heading>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Con qué animales le molestaria vivir?</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.animalesMolestia?.join(", ")}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Vivirá con alguna mascota?</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.viviraConMascota}
                      </DataList.Value>
                    </DataList.Item>

                    <Heading size="4" mb="2" className="text-mirrage">Sobre la vivienda:</Heading>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Cuántos roomies busca?</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.numeroRommies}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Información general:</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.descripcionApartamento}
                      </DataList.Value>
                    </DataList.Item>
                    {compatible.precioHabitacion.map((_, index) => (
                      <DataList.Item>
                        <DataList.Label><Text className="text-mirrage opacity-50">Habitación {index + 1}:</Text></DataList.Label>
                        <DataList.Value>
                          <Flex direction="column" gap="2">
                            <DataList.Item>
                              <DataList.Label><Text className="text-mirrage opacity-50">Precio:</Text></DataList.Label>
                              <DataList.Value>
                                {compatible.precioHabitacion[index]}
                              </DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                              <DataList.Label><Text className="text-mirrage opacity-50">¿Es amoblada?:</Text></DataList.Label>
                              <DataList.Value>
                                {compatible.amoblada[index]}
                              </DataList.Value>
                            </DataList.Item>
                          </Flex>
                        </DataList.Value>
                      </DataList.Item>
                    ))}
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Incluye los servicios?</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.precioHabitacionServicios ? 'Sí' : 'No'}
                      </DataList.Value>
                    </DataList.Item>
                    {compatible.precioServiciosPromedio ? <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Costo promedio de los servicios:</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.precioServiciosPromedio}
                      </DataList.Value>
                    </DataList.Item> : null}
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Disponible desde:</Text></DataList.Label>
                      <DataList.Value>{compatible.fechaHabitacion.datetime.split(" ")[0]}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Tiene preferencias strictas de género?</Text></DataList.Label>
                      <DataList.Value>{compatible.generoPreferencia}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Actualmente vive con:</Text></DataList.Label>
                      <DataList.Value>{compatible.generoApartamento.join(", ")}</DataList.Value>
                    </DataList.Item>

                    <Heading size="4" mb="2" className="text-mirrage">Sus preferencias y caracteristicas:</Heading>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Rango de edad deseado para su roomie</Text></DataList.Label>
                      <DataList.Value>Entre {compatible.rangoEdadRoomie.replace(';', ' y ')}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Orden:</Text></DataList.Label>
                      <DataList.Value>{compatible.orden}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Limpieza:</Text></DataList.Label>
                      <DataList.Value>{compatible.limpieza}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Interacción social:</Text></DataList.Label>
                      <DataList.Value>{compatible.interaccionSocial}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">Ruido:</Text></DataList.Label>
                      <DataList.Value>{compatible.preferenciaRuido}</DataList.Value>
                    </DataList.Item>

                    <Heading size="4" mb="2" className="text-mirrage">Preguntas abiertas:</Heading>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Qué espera de un buen roomie?</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.descripcionRommieIdeal}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Le molestan los invitados?</Text></DataList.Label>
                      <DataList.Value>
                        {compatible.toleranciaInvitados}
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label><Text className="text-mirrage opacity-50">¿Lleva invitados?</Text></DataList.Label>
                      <DataList.Value>{compatible.frecuenciaInvitados}</DataList.Value>
                    </DataList.Item>
                  </DataList.Root>

                  <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                      <Button variant="outline" className="hover:cursor-pointer">
                        Cerrar
                      </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>

                      <Button variant="solid" color="violet" className="hover:cursor-pointer">
                        <a href={`https://wa.me/573188601654?text=%C2%A1Hola!%20Quisiera%20empezar%20el%20proceso%20con%20el%20roomie%20${compatible.submission_id}%20`} target="__blank">
                          Empezar el proceso
                        </a>

                      </Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Box>
          </article>
        )}
      </div>

      <Text size="2" className="mt-8 flex gap-2 items-center justify-center"><InfoCircle /> Debido a que aún seguimos recibiendo registros de arrendatarios, esta lista de compatibles podria actualizarse, te informaremos si eso sucede.</Text>

    </Flex>
  );
}