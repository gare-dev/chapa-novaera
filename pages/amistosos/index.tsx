import "devextreme/dist/css/dx.material.custom-scheme.css";
import styles from "@/styles/amistosos.module.scss"
import { Calendar } from "devextreme-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Api from "@/api";
import useAlert from "@/hooks/useAlert";
import LoadingComponent from "@/components/LoadingComponent";
import AmistosoBox from "@/components/AmistosoBox";
import { format } from "date-fns";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { AxiosError } from "axios";


const Header = dynamic(() => import("@/components/Header"), { ssr: false });

type Matches = {
    id_match: string
    created_at: string
    created_by: string
    rm: string
    ano: string
    curso: string
    curso_adversario: string
    data_jogo: string
    periodo: string
    aprovado: boolean
    ano_adversario: string
}

export default function Amistosos() {
    const [date, setDate] = useState(new Date())
    const [matches, setMatches] = useState<Matches[]>()
    const { showAlert } = useAlert()
    const [loading, setLoading] = useState(false)
    const [almoco, setAlmoco] = useState<Matches>()
    const [intervalo, setIntervalo] = useState<Matches>()
    const [createMatch, setCreateMatch] = useState(false)

    const [nome, setNome] = useState('')
    const [RM, setRM] = useState('')
    const [ano, setAno] = useState('1')
    const [curso, setCurso] = useState('DS')
    const [anoAdv, setAnoAdv] = useState('1')
    const [cursoAdv, setCursoAdv] = useState('DS')
    // const [data, setData] = useState('')

    const [, setSelected] = useState<Matches>()
    const [periodo, setPeriodo] = useState('')

    useEffect(() => {
        console.log(curso)
    }, [curso])

    useEffect(() => {

        if (!createMatch) {
            getMatches()
        }

    }, [createMatch])


    const getMatches = async () => {
        try {
            setLoading(true)
            const response = await Api.getMatches()
            if (response.data.code === "GETMATCHES_SUCCESSFULL") {
                setMatches(response.data.data)
            }
        } catch (error) {
            showAlert("Ocorreu um erro ao listar as partidas. Avise o Garé", "warning")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMatches()
    }, [])

    const setMatchesFormatted = () => {
        const formattedDate = format(date, "yyyy-MM-dd");

        const jogosDoDia = matches?.filter((match) =>
            format(new Date(match.data_jogo), "yyyy-MM-dd") === formattedDate
        );

        const almocoMatch = jogosDoDia?.find((match) => match.periodo === "Almoço")
        const intervaloMatch = jogosDoDia?.find((match) => match.periodo === "Intervalo")

        setAlmoco(almocoMatch)
        setIntervalo(intervaloMatch)
    }

    useEffect(() => {
        setMatchesFormatted()
    }, [date, createMatch])

    const setMatch = async () => {

        try {
            setLoading(true)
            const response = await Api.setMatch(nome, RM, ano, curso, anoAdv, cursoAdv, format(date, "yyyy-MM-dd"), periodo)

            if (response.data.code === "MATCH_CREATED") {
                await getMatches()
                setMatchesFormatted()
                setCreateMatch(false)
                setNome('')
                setRM('')
                setAno('1')
                setAnoAdv('1')
                setCurso('DS')
                setCursoAdv('DS')
                return showAlert('Amistoso marcado com sucesso!')
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.code === "BUSY_DATE_PERIOD") {
                    return showAlert("Esse horário já foi preenchido.", 'warning')
                }

                if (error.response?.data.code === "MISSING_INFO") {
                    return showAlert("Erro desconhecido, avise o grêmio.", 'danger')
                }
            }
        } finally {
            setLoading(false)
        }

    }



    return (
        <div>
            {createMatch && (
                <div className={styles.createMatchDiv}>

                    <div className={styles.mainDiv}>


                        <div className={styles.inputDiv}>
                            <div className={styles.subinputDiv}>
                                <div style={{ width: "78%" }}>
                                    <p className={styles.caption}>Nome</p>
                                    <Input value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>

                            </div>
                            <div className={styles.subinputDiv}>
                                <div style={{ width: "78%" }}>
                                    <p className={styles.caption}>RM</p>
                                    <Input type="number" maxLength={5} value={RM} onChange={(e) => {
                                        if (e.target.value.length > 5) return
                                        setRM(e.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className={styles.miniDiv}>
                                <div className={styles.teste}>
                                    <p className={styles.caption}>Ano</p>
                                    <select value={ano} onChange={(e) => setAno(e.target.value)} style={{ width: "55%", height: "30px", textAlign: "center" }} name="" id="">
                                        <option value="1">1°</option>
                                        <option value="2">2°</option>
                                        <option value="3">3°</option>
                                    </select>
                                </div>
                                <div className={styles.teste}>
                                    <p className={styles.caption}>Curso</p>
                                    <select value={curso} onChange={(e) => setCurso(e.target.value)} style={{ width: "55%", height: "30px", textAlign: "center" }} name="" id="">
                                        <option value="DS">DS</option>
                                        <option value="DM">DM</option>
                                        <option value="AM">AM</option>
                                        <option value="BM">BM</option>
                                        <option value="FM">FM</option>
                                        <option value="AT">AT</option>
                                        <option value="CT">CT</option>
                                        <option value="FT">FT</option>
                                        <option value="GT">GT</option>
                                        <option value="HT">HT</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ paddingTop: 5 }} className={styles.miniDiv}>
                                <div className={styles.teste}>
                                    <p className={styles.caption}>Ano Adversário</p>
                                    <select value={anoAdv} onChange={(e) => setAnoAdv(e.target.value)} style={{ width: "55%", height: "30px", textAlign: "center" }} name="" id="">
                                        <option value="1">1°</option>
                                        <option value="2">2°</option>
                                        <option value="3">3°</option>
                                    </select>

                                </div>
                                <div className={styles.teste}>
                                    <p className={styles.caption}>Curso Adversário</p>
                                    <select value={cursoAdv} onChange={(e) => setCursoAdv(e.target.value)} style={{ width: "55%", height: "30px", textAlign: "center" }} name="" id="">
                                        <option value="DS">DS</option>
                                        <option value="DM">DM</option>
                                        <option value="AM">AM</option>
                                        <option value="BM">BM</option>
                                        <option value="FM">FM</option>
                                        <option value="AT">AT</option>
                                        <option value="CT">CT</option>
                                        <option value="FT">FT</option>
                                        <option value="GT">GT</option>
                                        <option value="HT">HT</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.subinputDiv}>
                                <div style={{ width: "78%" }}>
                                    <p className={styles.caption}>Data</p>
                                    <Input style={{ textAlign: "center" }} readonly value={format(date, "yyyy-MM-dd")} />
                                </div>
                            </div>
                            <div className={styles.subinputDiv}>
                                <div style={{ width: "78%" }}>
                                    <p className={styles.caption}>Período</p>
                                    <Input style={{ textAlign: "center" }} readonly value={periodo} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttonDiv}>
                            <Button onClick={() => setMatch()} text="MARCAR" />
                            <Button onClick={() => setCreateMatch(false)} style={{ backgroundColor: "transparent", color: "#fff", border: "2px solid #C39152" }} text="CANCELAR" />
                        </div>
                    </div>

                </div>
            )
            }
            {loading && <LoadingComponent />}

            <Header />
            <div className={styles.calendarDiv}>
                <Calendar
                    value={date}
                    onValueChanged={(e) => setDate(e.value)}
                    className={styles.calendar} />
            </div>

            <div className={styles.divAmistosoBox}>
                <AmistosoBox
                    createMatch={() => {
                        setSelected(intervalo)
                        setCreateMatch(true)
                        setPeriodo("Intervalo")
                    }}
                    isThereMatch={intervalo?.id_match ? true : false}
                    title={"INTERVALO"}
                    curso={`${intervalo?.ano}${intervalo?.curso ?? ""}`}
                    curso_adversario={`${intervalo?.ano_adversario}${intervalo?.curso_adversario ?? ""}`}
                    aprovado={intervalo?.aprovado ?? false} />
                <AmistosoBox
                    createMatch={() => {
                        setSelected(almoco)
                        setCreateMatch(true)
                        setPeriodo("Almoço")

                    }}
                    isThereMatch={almoco?.id_match ? true : false}
                    title="ALMOÇO"
                    curso={`${almoco?.ano}${almoco?.curso}`}
                    curso_adversario={`${almoco?.ano_adversario}${almoco?.curso_adversario}`}
                    aprovado={almoco?.aprovado ?? false} />
            </div>
        </div >
    )
}
