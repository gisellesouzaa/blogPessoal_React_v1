import Tema from "./Tema";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    foto?: string | null;
    tema?: Tema | null
}

export default Postagem;