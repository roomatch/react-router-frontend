let interesados: { [key: string]: number } = {};

export const getInteresados = (celular: string): number => {
    try {
        if (interesados[celular]) {
            return interesados[celular];
        } else {
            const nuevoValor = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

            interesados[celular] = nuevoValor;
            return nuevoValor;
        }
    } catch (error) {
        return 17
    }
};
