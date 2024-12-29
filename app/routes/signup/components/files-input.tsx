import { Text, Strong } from "@radix-ui/themes";
import { Root } from "@radix-ui/react-label";
import type { UseMutationResult } from "@tanstack/react-query";
import Upload from "../icons/upload";

interface FilesInputProps {
    filesMutation: UseMutationResult<null | undefined, Error, React.ChangeEvent<HTMLInputElement>, void>;
}
export default function FilesInput({ filesMutation }: FilesInputProps) {
    return (
        <Root htmlFor="dropzone-file" className={`py-4 flex flex-col items-center justify-center h-40 border-2 ${filesMutation.isError ? 'border-red-500' : null} ${filesMutation.isSuccess ? 'border-green-600' : null} transition-colors border-gray-300 border-dashed rounded-lg cursor-pointer hover:text-white hover:bg-[var(--violet-9)]`}>
            <Upload filesMutation={filesMutation} />
            <Text size="4" as="p"><Strong>Cargar imágenes</Strong></Text>
            <Text size="1" as="p">JPG, JPEG o PNG</Text>
            <input multiple accept=".jpg, .jpeg, .png" onChange={filesMutation.mutate} id="dropzone-file" type="file" className="hidden" />
        </Root >
    )
}
