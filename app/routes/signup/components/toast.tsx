import { Root, Title, Action } from "@radix-ui/react-toast";
import { Button, Flex, Text } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface ToastProps {
    open: boolean;
    onOpenChange: (() => void) | undefined;
    title: string;
    icon: React.SVGProps<SVGSVGElement>
}
export default function Toast({open, onOpenChange, title, icon}: ToastProps) {
  return (
    <Root duration={onOpenChange === undefined ? 1000 : undefined} className="bg-gray-100 rounded-md p-2 data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[hide_100ms_ease-in] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-[swipeOut_100ms_ease-out]" open={open} onOpenChange={onOpenChange}>
    <Flex display="flex" direction="row" justify="between" align="center">
        <Title asChild>
            <Flex display="flex" align="center" gap="1">
                {icon as ReactNode}
                <Text as="p" size="2" className="dark:text-mirrage">{title}</Text>
            </Flex>
        </Title>
        {onOpenChange !== undefined && (
            <Action
                asChild
                altText="Cerrar notificacion"
            >
                <Button variant="outline" color="crimson" size="1" radius="large" className="hover:cursor-pointer transition-all">Cerrar</Button>
            </Action>
        )}
    </Flex>
</Root>
  )
}
