import { Flex, Heading } from "@radix-ui/themes";
import heroVideo from './assets/hero-video.mp4'
import roomatchLogo from '../../../../assets/logo-no-letters.svg'

export default function Hero() {
  return (
    <Flex direction="column" align="center" justify="center" gap="3" className="max-w-[1024px] mt-6 mx-6 md:mx-auto p-6 rounded-lg bg-gradient-to-b from-transparent to-prussian-blue border-electric-indigo border-b-2">
      <img src={roomatchLogo} alt="Logo de Roomatch" className="size-20 p-2 bg-cerulean rounded-full bg-gradient-to-br to-cerulean from-prussian-blue shadow-[3px_3px_0px_0px_theme(colors.electric-indigo)]" />
      <Heading as="h1" align="center" size="8">En Roomatch, encuentra tu roomie ideal, conecta y convive.</Heading>
      <video className="rounded-lg w-[768px]" autoPlay loop muted playsInline><source src={heroVideo} type="video/mp4" /></video>
    </Flex>
  )
}
