import { Props } from "@/components/PropsBox";
import { LuPartyPopper } from "react-icons/lu";
import { FaHandsWash } from "react-icons/fa";
import { PiSoccerBall } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";


export const principaisPropostas: Props[] = [
    {
        icon: LuPartyPopper,
        text: "O Grêmio Estudantil dará total apoio aos três anos em seus trotes e eventos, garantindo que essas datas tão importantes sejam comemoradas da melhor forma possível e bem organizado.",
        title: "Trotes e Eventos",
    },
    {
        icon: FaHandsWash,
        text: "Nosso objetivo é garantir que todas as alunas tenham acesso a itens essenciais de higiene pessoal dentro da escola. A iniciativa busca disponibilizar absorventes e outros produtos básicos nos banheiros femininos.",
        title: "Higiene Pessoal",
    },
    {
        icon: PiSoccerBall,
        text: "A Liga ETEC é uma proposta que visa substituir os amistosos, trazendo uma competição de dois meses, com jogos regulares e pontos corridos, onde todas as equipes se enfrentarão ao longo da competição.",
        title: "Liga ETEC",
    },
    {
        icon: IoMdMail,
        text: "Ela tem como objetivo criar um canal direto e anônimo para que os alunos possam expressar suas opiniões, sugerir melhorias e relatar problemas que precisam de atenção.",
        title: "Feedback",
    },

]