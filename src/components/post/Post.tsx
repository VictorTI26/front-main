import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Post() {
    return (
        <section className="border border-azul rounded mb-4">
            <div className="p-4">
                <a className="text-lg">Publicado por: </a>
                <a className="font-bold text-lg">Gabriel</a>
                <p className="text-lg">Meme muito bom 2024 atualizado</p>
            </div>
            <div className="px-16 flex">
                <img className="w-96" src="https://brunopredolin.com.br/wp-content/uploads/2023/01/la-eele-meme-mascote-copa-qatar.jpg" alt="Imagem do post" />
                <div className="grid ml-10">
                    <button><FaWhatsappSquare size={40} /></button>
                    <button><MdEmail size={40} /></button>
                </div>
            </div>
            <p className="text-sm p-4">19:35 24/09/2024</p>
        </section>
    );
}
