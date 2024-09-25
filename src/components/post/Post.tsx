import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type typePost = {
    usuario: string;
    imagem: string;
    legenda: string;
    criacao: string;
};

export default function Post({usuario, imagem, legenda, criacao}: typePost) {
    return (
        <section className="border border-azul rounded mb-4">
            <div className="p-4">
                <a className="text-lg">Publicado por: </a>
                <a className="font-bold text-lg">{usuario}</a>
                <p className="text-lg">{legenda}</p>
            </div>
            <div className="px-16 flex">
                <img className="w-96" src={imagem} alt="Imagem do post" />
                <div className="grid ml-10">
                    <button><FaWhatsappSquare size={40} /></button>
                    <button><MdEmail size={40} /></button>
                </div>
            </div>
            <p className="text-sm p-4">{criacao}</p>
        </section>
    );
}
