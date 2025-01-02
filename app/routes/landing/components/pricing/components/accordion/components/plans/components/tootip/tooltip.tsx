import { Box } from "@radix-ui/themes";
import InfoCircle from "./assets/info-circle";

export default function Tooltip({ content }: { content: string }) {
    return (
        <Box as="div" className="group cursor-pointer relative inline-block text-center">
            <InfoCircle />
            <Box as="div" className="w-72 opacity-0 -left-48 bg-prussian-blue text-seasalt text-left text-xs rounded-lg absolute z-10 group-hover:opacity-100 bottom-full p-3 text-balance pointer-events-none">
                {content}
            </Box>
        </Box>
    )
}
