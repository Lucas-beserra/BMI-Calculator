import React from 'react'
import { LinkedinLogo } from "phosphor-react"
import { GithubLogo } from "phosphor-react"
import { InstagramLogo } from "phosphor-react"

export function Footer () {

    const urlFontInfoText = "https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm"
    const urlFontInfoTable = "https://www.programasaudefacil.com.br/calculadora-de-imc"
    const urlGitHub = "https://github.com/Lucas-beserra"
    const urlLinkedin = "https://www.linkedin.com/in/lucas-beserra-601621176/"
    const urlInstagram = "https://instagram.com/lucas_beserra88?igshid=ZmZhODViOGI="

    return (
        <div className="bg-slate-800 text-xl text-cyan-100 w-screen h-[250px] pt-8 flex flex-col items-center gap-2">
            <span>Developed by Lucas Beserra</span> 
            <ul className="flex gap-3">
                <li>
                    <a href={urlGitHub} target="_blank">
                        <GithubLogo size={40} />
                    </a>
                </li>
                <li>
                    <a href={urlLinkedin} target="_blank">
                        <LinkedinLogo size={40} />
                    </a>
                </li>
                <li>
                    <a href={urlInstagram} target="_blank">
                        <InstagramLogo size={40} />
                    </a>
                </li>
            </ul>
            <ul className="mt-8">
                <li>
                    Fonte das informações contidas no texto: <a href={urlFontInfoText}>Mundo educação</a>
                </li>
                <li>
                    Fonte das informações contidas na tabela: <a href={urlFontInfoTable}>Saúde Fácil</a>
                </li>
                <li></li>
            </ul>
        </div>
    )
}