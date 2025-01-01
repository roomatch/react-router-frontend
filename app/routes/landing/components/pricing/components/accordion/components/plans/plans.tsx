import { Flex, Heading, Badge, Button, Text, Box } from "@radix-ui/themes";
import Tooltip from "./components/tootip/tooltip";
import { Link } from "react-router";
import Check from "./assets/check";
import X from "./assets/x";

interface Feature {
    title: string;
    description: string;
    isAvailable: boolean;
}

interface RoomieRentPlant {
    description: string;
    price: string;
}

interface Tier {
    name: string;
    id: string;
    priceMonthly: string | RoomieRentPlant[];
    description: string;
    features: Feature[];
}

interface PlanProps {
    tiers: Tier[];
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Plans({ tiers }: PlanProps) {
    return (
        <Flex className="py-6 w-full items-center flex-col">
            {tiers.map((tier, tierIdx) => (
                <Flex
                    direction="column"
                    gap="4"
                    key={tier.id}
                    className={classNames(
                        tierIdx == 0 ? 'w-[14rem] bg-seasalt' : '',
                        tierIdx == 1 ? 'w-[16rem] bg-cerulean shadow-[0px_-10px_20px_0px_#0000004d]' : '',
                        tierIdx == 2 ? 'w-[18rem] rounded-b-lg bg-mirrage shadow-[0px_-10px_20px_0px_#0000004d]' : '',
                        'p-8 rounded-t-lg',
                    )}
                >
                    <Heading
                        id={tier.id}
                        className={classNames(
                            tierIdx == 0 ? 'text-mirrage' : '',
                            tierIdx == 1 ? 'c' : '',
                            tierIdx == 2 ? 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-electric-indigo to-cerulean bg-clip-text text-transparent' : '',
                        )}
                    >
                        {tier.name}
                    </Heading>
                    {tierIdx == 1 && <Badge className="w-fit">Favorito</Badge>}
                    <Heading className="mt-4">
                        {typeof tier.priceMonthly === 'string' ?
                            <>
                                <Text
                                    as="span"
                                    className={classNames(
                                        tierIdx == 0 ? 'text-mirrage' : '',
                                        'text-5xl font-semibold',
                                    )}
                                >
                                    {tier.priceMonthly}
                                </Text>
                                <Text as="span" className={classNames(
                                    tierIdx == 0 ? 'text-mirrage' : '',
                                    'opacity-50',
                                )}>
                                    {' '}/servicio
                                </Text>
                            </> :
                            <Flex gap="3" direction="column">
                                {tier.priceMonthly.map((price) => (
                                    <Box>
                                        <Text
                                            size="1"
                                            as="span"
                                            className={classNames(
                                                tierIdx == 0 ? 'text-mirrage' : '',
                                                'flex font-light',
                                            )}
                                        >
                                            {price.description}
                                        </Text>
                                        <Text
                                            as="span"
                                            className={classNames(
                                                tierIdx == 0 ? 'text-mirrage' : '',
                                                'text-3xl font-semibold flex',
                                            )}
                                        >
                                            {price.price}
                                        </Text>
                                    </Box>
                                ))
                                }
                            </Flex>
                        }
                    </Heading>
                    <Text as="p" className={classNames(
                        tierIdx == 0 ? 'text-mirrage' : '',
                    )}>
                        {tier.description}
                    </Text>
                    <ul
                        role="list"
                        className={`space-y-2 text-sm opacity-80 ${tierIdx == 0 ? 'text-mirrage' : null}`}
                    >
                        {tier.features.map((feature) => (
                            <li key={feature.title} className="flex items-center">
                                <Flex align="center" className="w-full">
                                    <Box className="w-1/5">
                                        {feature.isAvailable ? <Check tierIdx={tierIdx}/>: <X />}
                                    </Box>
                                    <Text as="div" className="w-3/5">{feature.title}</Text>
                                    <Box className='pt-1 w-1/5'>
                                        <Tooltip content={feature.description} />
                                    </Box>
                                </Flex>
                            </li>
                        ))}
                    </ul>
                    <Link to="/registrarme" className="w-full flex items-center justify-center">
                        <Button className="mt-8 transition-all hover:cursor-pointer text-white">
                            Elegir este plan
                        </Button>
                    </Link>
                </Flex>
            ))}
        </Flex>
    )
}
