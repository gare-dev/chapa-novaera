import { PropsProps } from "@/components/PropsBox";
import { LuPartyPopper } from "react-icons/lu";
import { FaHandsWash } from "react-icons/fa";
import { PiSoccerBall } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { PropsEquipe } from "@/components/EquipeBox";
import { PropsBigBox } from "@/components/PropsBigBox";
import { BiParty } from "react-icons/bi";
import { TfiBlackboard } from "react-icons/tfi";
import { TbRibbonHealth } from "react-icons/tb";
import { GiPartyFlags, GiThreeFriends } from "react-icons/gi";


export const principaisPropostas: PropsProps[] = [
    {
        icon: LuPartyPopper,
        text: "O Grêmio Estudantil dará total apoio aos terceiros anos em seus trotes e eventos, garantindo que essas datas tão importantes sejam comemoradas da melhor forma possível e bem organizado.",
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

export const equipe: PropsEquipe[] = [
    {
        role: "Coordenadores Gerais",
        name1: "John Doe",
        name2: "Maria Doe",
        imageUrl1: "nophoto.jpg",
        imageUrl2: "nophoto.jpg",
        sala1: "3EM",
        sala2: "3EM"
    },
    {
        role: "Coordenadores Esporte",
        name1: "John Doe",
        name2: "Maria Doe",
        imageUrl1: "nophoto.jpg",
        imageUrl2: "nophoto.jpg",
        sala1: "3EM",
        sala2: "3EM"
    },
    {
        role: "Coordenadores Cultura",
        name1: "John Doe",
        name2: "Maria Doe",
        imageUrl1: "nophoto.jpg",
        imageUrl2: "nophoto.jpg",
        sala1: "3EM",
        sala2: "3EM"
    }
]

export const propostas: PropsBigBox[] = [
    {
        icon: BiParty,
        title: "Trotes e Eventos",
        par1: "O Grêmio Estudantil dará total apoio aos três anos em seus trotes e eventos, garantindo que essas datas tão importantes sejam comemoradas da melhor forma possível. Nosso objetivo é facilitar a organização, oferecendo suporte na estruturação das atividades, comunicação com a direção e fornecimento dos recursos necessários para que tudo ocorra de maneira organizada e segura.",
        par2: "Sabemos que essas tradições fazem parte da experiência escolar e fortalecem o espírito de união entre os alunos. Por isso, estaremos sempre à disposição para ajudar a tornar esses momentos ainda mais especiais e inesquecíveis."
    },
    {
        icon: TfiBlackboard,
        title: "Palestras",
        par1: "O Grêmio Estudantil está organizando uma busca por palestrantes e oportunidades de visitas técnicas a faculdades e empresas, com o objetivo de proporcionar mais conhecimento e preparo para os alunos em relação ao mercado de trabalho e à vida acadêmica.",
        par2: "A ideia é trazer profissionais de diferentes áreas para palestras e rodas de conversa, abordando temas como carreiras, empreendedorismo, inovação e desafios do mundo profissional. Além disso, as visitas técnicas permitirão que os estudantes conheçam de perto o funcionamento de empresas e instituições de ensino superior, ajudando-os a tomar decisões mais informadas sobre seu futuro."
    },
    {
        icon: PiSoccerBall,
        title: "Liga ETEC",
        par1: "A Liga ETEC é uma nova proposta para substituir os amistosos, trazendo uma competição mais organizada e equilibrada entre os cursos. O torneio terá duração de dois meses, com jogos regulares e um formato de pontos corridos, onde todas as equipes se enfrentarão ao longo da competição.",
        par2: "O objetivo da Liga ETEC é promover maior integração entre os alunos, fortalecer o espírito esportivo e incentivar a participação de diferentes cursos em um ambiente competitivo e saudável. Além disso, a liga proporciona uma estrutura mais estável para os times, garantindo que todas as equipes tenham oportunidades iguais de jogar e disputar pelo título."
    },
    {
        icon: TbRibbonHealth,
        title: "Higiene Feminina",
        par1: "O projeto de higiene e produtos no banheiro das meninas tem como objetivo garantir que todas as alunas tenham acesso a itens essenciais de higiene pessoal dentro da escola. A iniciativa busca disponibilizar absorventes, papel higiênico e outros produtos básicos nos banheiros femininos de forma acessível e contínua.",
        par2: "Além de atender uma necessidade fundamental, o projeto também visa promover a dignidade menstrual, a saúde e o bem-estar das estudantes, reduzindo possíveis dificuldades enfrentadas por quem não tem acesso a esses itens no dia a dia. A proposta inclui a organização de um sistema de reposição eficiente para garantir que os produtos estejam sempre disponíveis."
    },
    {
        icon: GiPartyFlags,
        title: "Eventos",
        par1: "O Grêmio Estudantil terá foco total na organização e realização dos eventos escolares, como a Festa Junina e o Baile, com o objetivo de torná-los ainda mais bem estruturados, acessíveis e inesquecíveis para todos.",
        par2: "Nosso compromisso é garantir mais organização, com planejamento antecipado e execução eficiente, além de buscar preços mais acessíveis para que todos possam participar. Queremos proporcionar uma experiência completamente nova, inovando nas atrações, na estrutura e na dinâmica das festividades, sempre levando em consideração as sugestões dos alunos para tornar cada evento único e especial."
    },
    {
        icon: GiPartyFlags,
        title: "Baile e Festa Junina",
        par1: "O Grêmio Estudantil está comprometido em promover mais simulados e provas olímpicas na escola, com o objetivo de aprimorar o desempenho acadêmico e preparar os alunos para desafios externos.",
        par2: "Os simulados serão organizados com maior frequência, proporcionando aos estudantes uma oportunidade de treinar para exames importantes, além de ajudar a identificar pontos fortes e áreas que precisam de mais atenção. Já as provas olímpicas serão uma forma de incentivar os alunos a se destacarem em áreas específicas do conhecimento, como matemática, física, redação, entre outras, promovendo uma competição saudável e motivadora."
    },
    {
        icon: IoMdMail,
        title: "Caixa de Feedback",
        par1: "O projeto da Caixa de Feedback tem como objetivo criar um canal direto e anônimo para que os alunos possam expressar suas opiniões, sugerir melhorias e relatar problemas que precisam de atenção. A caixa estará disponível para que qualquer estudante possa deixar cartas com sugestões tanto para o Grêmio Estudantil quanto para a escola como um todo.",
        par2: "Além de receber ideias para eventos e iniciativas, o Grêmio atuará como intermediador entre os alunos e a direção, garantindo que questões importantes sejam levadas à administração da escola de forma organizada e representativa. Esse projeto busca dar voz aos estudantes e fortalecer o diálogo dentro da instituição, tornando a escola um ambiente mais inclusivo e acolhedor."
    },
    {
        icon: GiThreeFriends,
        title: "Comissão De Terceirão",
        par1: "A Comissão de Terceirão será formada por um aluno de cada turma do terceirão, com o objetivo de ajudar a organizar tudo o que for relacionado aos alunos do último ano.",
        par2: "Essa comissão será essencial na coordenação de eventos específicos, como formaturas, festas de despedida e outras atividades que marcam o encerramento dessa etapa escolar. Além disso, a comissão ajudará a garantir que as demandas e desejos dos alunos do terceirão sejam ouvidos e atendidos, contribuindo para a organização e execução de momentos importantes para todos.",
        par3: "O Grêmio Estudantil será responsável por fazer toda a intermediação com a diretoria, garantindo que todas as ideias e propostas da comissão se tornem realidade. Atuaremos como um elo entre os alunos do terceirão e a administração escolar, garantindo que os projetos, como os trotes ao longo do ano e a dança da festa, sejam executados de forma planejada e alinhada com as normas da escola, criando uma experiência organizada e marcante para todos os envolvidos."
    },

]