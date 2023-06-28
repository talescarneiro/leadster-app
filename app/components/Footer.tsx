import Image from "next/image"

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col w-full justify-center items-center h-12 gap-1">
                <div>
                    <Image 
                        src="/assets/images/logo.png"
                        alt="Leadster Logo"
                        width="194"
                        height="92"
                    />
                </div>
                <div>
                    <p className="text-[11px] font-medium text-gray-500">Transformando visitantes em clientes.</p>
                </div>
            </div>
            <div className="container mx-auto py-8 px-4 w-65-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[12px]">
                    <div>
                        <h3 className="font-bold mb-7">Links Principais</h3>
                        <ul className="space-y-3">
                            <li>Home</li>
                            <li>Ferramenta</li>
                            <li>Preços</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-7">Cases</h3>
                        <ul className="space-y-3">
                            <li>Geração de Leads B2B</li>
                            <li>Geração de Leads em Software</li>
                            <li>Geração de Leads em Imobiliária</li>
                            <li>Cases de Sucesso</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-7">Materiais</h3>
                        <ul className="space-y-3">
                            <li>Blog</li>
                            <li>Parceria com Agências</li>
                            <li>Guia Definitivo do Marketing</li>
                            <li>Materiais Gratuitos</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Siga a Leadster</h3>
                        <div className="flex gap-3 mb-5">
                            <button className="w-8 h-8 bg-light-gray rounded-full flex items-center justify-center"><FaLinkedinIn size={14} color="gray" /></button>
                            <button className="w-8 h-8 bg-light-gray rounded-full flex items-center justify-center"><FaFacebookF size={14} color="gray" /></button>
                            <button className="w-8 h-8 bg-light-gray rounded-full flex items-center justify-center"><FaInstagram size={14} color="gray" /></button>
                        </div>
                        <ul className="space-y-3">
                            <li><span className="font-semibold">Email:</span> contato@leadster.com.br</li>
                            <li><span className="font-semibold">Telefone:</span> (42) 98828-9851</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer