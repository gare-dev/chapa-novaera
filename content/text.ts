import { PropsProps } from "@/components/PropsBox";
import { LuPartyPopper } from "react-icons/lu";
import { FaHandsWash, FaPen } from "react-icons/fa";
import { PiSoccerBall } from "react-icons/pi";
import { IoIosFootball, IoMdMail } from "react-icons/io";
import { PropsEquipe } from "@/components/EquipeBox";
import { PropsBigBox } from "@/components/PropsBigBox";
import { BiSolidParty } from "react-icons/bi";
import { TfiBlackboard } from "react-icons/tfi";
import { TbRibbonHealth } from "react-icons/tb";
import { GiPartyFlags, GiThreeFriends } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";


export const principaisPropostas: PropsProps[] = [
    {
        icon: LuPartyPopper,
        text: "A Gincana, promovida pelo Grêmio Estudantil ao longo de 2025, visa integrar os alunos, arrecadar recursos e incentivar o desempenho escolar por meio de atividades e desafios variados, desde ações solidárias até provas acadêmicas, de forma colaborativa e divertida.",
        title: "Gincana EJS",
    },
    {
        icon: FaHandsWash,
        text: "O Grêmio Estudantil propõe a criação de um Jornal Estudantil, um canal de notícias exclusivo para alunos, visando transparência, compartilhamento de informações e engajamento da comunidade escolar. Será uma plataforma oficial de fácil acesso, onde os estudantes poderão se manter informados sobre a escola, o Grêmio e projetos.",
        title: "Jornal Escolar",
    },
    {
        icon: PiSoccerBall,
        text: "A Liga ETEC é uma proposta que visa substituir os amistosos, trazendo uma competição de dois meses, com jogos regulares e pontos corridos, onde todas as equipes se enfrentarão ao longo da competição.",
        title: "Liga ETEC",
    },
    {
        icon: PiSoccerBall,
        text: "A Chapa ERA possui um sistema automatizado de marcação de amistosos. Com ele, poderá ser marcado amistosos para o intervalo ou amistoso para qualquer data disponível, promovendo dinamicidade e mais liberdade para os alunos. ",
        title: "Amistosos",
    },

]

export const equipe: PropsEquipe[] = [
    {
        role: "Coordenadores Gerais",
        name1: "Emilly Luiza",
        name2: "Cauani Sasaki",
        imageUrl1: "emilly.jpg",
        imageUrl2: "cauani.jpg",
        sala1: "3EM",
        sala2: "3DM"
    },
    {
        role: "Coordenadores Esporte",
        name1: "João Pedro",
        name2: "Richard Cardoso",
        imageUrl1: "jp.jpg",
        imageUrl2: "cardoso.jpg",
        sala1: "3DM",
        sala2: "2HT"
    },
    {
        role: "Coordenadores Cultura",
        name1: "Samuel Tossi",
        name2: "",
        imageUrl1: "samuel.jpg",
        imageUrl2: "",
        sala1: "3EM",
        sala2: ""
    },
]

export const equipeInteira: PropsEquipe[] = [
    {
        role: "Coordenadores Gerais",
        name1: "Emilly Luiza",
        name2: "Cauani Sasaki",
        imageUrl1: "emilly.jpg",
        imageUrl2: "cauani.jpg",
        sala1: "3EM",
        sala2: "3DM"
    },
    {
        role: "Coordenadores Esporte",
        name1: "João Pedro",
        name2: "Richard Cardoso",
        imageUrl1: "jp.jpg",
        imageUrl2: "cardoso.jpg",
        sala1: "3DM",
        sala2: "2HT"
    },
    {
        role: "Coordenadores Cultura",
        name1: "Samuel Tossi",
        name2: "",
        imageUrl1: "samuel.jpg",
        imageUrl2: "",
        sala1: "3EM",
        sala2: ""
    },
    {
        role: "Coordenadores Financeiros",
        name1: "Daniel Goncalves",
        name2: "Annyca Costa",
        imageUrl1: "nophoto.jpg",
        imageUrl2: "nophoto.jpg",
        sala1: "3DM",
        sala2: "3DM"
    },
    {
        role: "Coordenadores Comunicação",
        name1: "Raissa Costa",
        name2: "Daniela Vieira",
        imageUrl1: "raissa.jpg",
        imageUrl2: "nophoto.jpg",
        sala1: "3CT",
        sala2: "3CT"
    },
    {
        role: "Relações Acadêmicas",
        name1: "Felipe de Oliveira",
        imageUrl1: "nophoto.jpg",
        sala1: "",
    },

]

export const fiscais: PropsEquipe[] = [
    {
        role: "Fiscais 1",
        name1: "Guilherme Garé",
        name2: "Carlos Eduardo",
        imageUrl1: "gare.jpg",
        imageUrl2: "carlos.jpg",
        sala1: "3EM",
        sala2: "3EM"
    },
    {
        role: "Fiscais 2",
        name1: "Giovanni Salmasi",
        name2: "Luiz Guilherme",
        imageUrl1: "nophoto.jpg",
        imageUrl2: "nophoto.jpg",
        sala1: "3EM",
        sala2: ""
    },
    {
        role: "Fiscais 3",
        name1: "André de Almeida",
        name2: "Brenno Vieira",
        imageUrl1: "andre.jpg",
        imageUrl2: "breno.jpg",
        sala1: "3EM",
        sala2: "3DM"
    },
]

export const propostas: PropsBigBox[] = [
    {
        icon: LuPartyPopper,
        principal: true,
        title: "Gincana EJS",
        par1: "A Gincana será um evento promovido pelo Grêmio Estudantil ao longo de todo o ano letivo de 2025, com o objetivo de criar atividades que ajudem na integração dos alunos,         promovam a arrecadação de recursos e incentivem os melhores resultados escolares. Ao longo de todo o ano, os alunos participarão de diferentes atividades e desafios, que vão desde ações de solidariedade até provas relacionadas ao conteúdo acadêmico, tudo de forma divertida e colaborativa.",
        par2: "Durante o ano letivo, serão realizadas diversas atividades e desafios que valerão pontos para os cursos participantes. Esses desafios terão um formato variado: podem ser esportivos, culturais, acadêmicos ou até mesmo de arrecadação. O objetivo é engajar os alunos de uma forma divertida e ao mesmo tempo estimular a cooperação e o bom desempenho escolar.",
        par3: "Cada curso estará competindo com os outros pela maior quantidade de pontos, que serão somados conforme as atividades forem acontecendo ao longo do ano. Ao final de 2025, o curso com a maior pontuação será o vencedor da Gincana e receberá uma premiação.",
        par4: "O prêmio para o curso vencedor será um passeio, que poderá ser uma visita a um lugar especial ou uma experiência significativa fora da escola. O tipo de passeio será definido de acordo com a arrecadação durante a Gincana. Quanto mais alunos participarem e quanto mais recursos forem arrecadados, melhor será a premiação. Portanto, o prêmio dependerá do número de participantes, pois a arrecadação será utilizada para garantir a premiação de qualidade.",
        par5: "Para viabilizar a Gincana, será cobrada uma taxa simbólica de R$ 5,00 por aluno. Essa taxa será usada para cobrir os custos das atividades e para ajudar na organização do evento. É importante frisar que a escola não fornecerá apoio financeiro para a realização da Gincana, então o valor arrecadado com a taxa de inscrição será fundamental para a execução das provas, desafios e, claro, para garantir o prêmio aos vencedores.",
        par6: "A Gincana será uma oportunidade para os alunos se integrarem, trabalharem em equipe e se divertirem, enquanto aprendem e ajudam a melhorar o ambiente escolar. A colaboração de todos é fundamental para que o evento seja um sucesso. Quanto mais alunos participarem, melhor será a experiência para todos, além de garantirmos uma premiação incrível para a turma vencedora! Aguardamos a participação de todos e contamos com seu apoio para tornar este evento um marco na nossa escola!"
    },
    {
        icon: IoNewspaper,
        principal: true,
        title: "Criação de um Jornal Estudantil",
        par1: "O Grêmio Estudantil propõe a criação de um Jornal Estudantil, um canal de notícias exclusivo para alunos, com o objetivo de promover a transparência, o compartilhamento de informações importantes e o engajamento da comunidade escolar. Este jornal será uma plataforma oficial onde todos os alunos poderão se manter informados sobre diversos assuntos relacionados à escola, ao Grêmio, aos projetos em  fácil acesso para todos os estudantes.",
        par2: "O jornal terá como principal objetivo ser uma ferramenta de comunicação eficiente entre a gestão escolar, o Grêmio Estudantil e os alunos, proporcionando informações rápidas e relevantes sobre o que acontece no ambiente escolar, além de criar um canal direto entre as demandas e os interesses dos alunos e as ações do Grêmio.",
        par3: "Principais Seções do Jornal: Informações sobre a escola, transparência financeira do grêmio, notícias do grêmio estudantil, projetos acadêmicos e artísticos, esportes e atividades físicas, anúncios de provas e concursos e etc.",
        par4: "O jornal será acessível online, com publicações periódicas, para que todos os aluno possam acessá-lo facilmente, seja pelo site da escola, redes sociais ou outras plataformas de comunicação da instituição. Além disso, haverá uma versão impressa disponível em locais estratégicos da escola, para garantir que todos, independentemente do acesso à internet, possam se informar.",
        par5: "Além de ser um canal para informações, o jornal será um espaço colaborativo. Os alunos poderão contribuir com matérias, sugestões de pautas, redações e até mesmo criações artísticas. Haverá uma equipe de estudantes responsáveis pela redação e edição, mas todos serão incentivados a colaborar e a enviar suas ideias e produções",
        par6: "O Jornal Estudantil será uma ferramenta essencial para fortalecer a comunicação dentro da escola, proporcionando um espaço para a troca de informações, a promoção da transparência e o incentivo à participação ativa dos alunos nos processos da escola. Com esse projeto, buscamos criar uma plataforma que una os estudantes, promova a cultura escolar e fomente um ambiente colaborativo e bem-informado."
    },
    {
        icon: BiSolidParty,
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
    {
        icon: FaPen,
        title: "Simulados e Provas Olímpicas",
        par1: "O Grêmio Estudantil está comprometido em promover mais simulados e provas olímpicas na escola, com o objetivo de aprimorar o desempenho acadêmico e preparar os alunos para desafios externos.",
        par2: "Os simulados serão organizados com maior frequência, proporcionando aos estudantes uma oportunidade de treinar para exames importantes, além de ajudar a identificar pontos fortes e áreas que precisam de mais atenção. Já as provas olímpicas serão uma forma de incentivar os alunos a se destacarem em áreas específicas do conhecimento, como matemática, física, redação, entre outras, promovendo uma competição saudável e motivadora.",
        par3: "Essa iniciativa visa fortalecer a preparação acadêmica, além de engajar os alunos em desafios intelectuais que podem abrir portas para novas oportunidades."
    },
    {
        icon: IoIosFootball,
        title: "Site para Interclasses e Intercursos",
        par1: "O site facilitará a organização dos torneios internos, permitindo que os alunos se inscrevam nas equipes, consultem a programação e acompanhem os resultados em tempo real. Além disso, o site enviará notificações para manter todos informados sobre os jogos e mudanças de última hora.",
        par2: "Essas plataformas garantirão uma comunicação eficiente e transparente, tornando o ambiente esportivo mais organizado e dinâmico para todos os alunos.",
    },





]