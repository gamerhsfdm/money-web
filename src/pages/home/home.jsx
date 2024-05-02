import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./home.css";
import icons from "../../styles/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    
    let dados = [
        {id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500},
        {id: 2, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", categoria: "Casa", descricao: "Condomínio", valor: 620},
        {id: 3, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", categoria: "Lazer", descricao: "Sorvete no parque", valor: 17.50},
        {id: 4, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Walmart", valor: 375},
        {id: 5, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", categoria: "Educação", descricao: "Faculdade", valor: 490},
        {id: 6, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Passagem Aérea", valor: 610},
        {id: 7, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Churrasco", valor: 144.30},
        {id: 8, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Hotel", valor: 330}
    ];

    let dadosFiltrados = [
        {id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500},
    ];


    const navigate = useNavigate(); 
    const [despesa, setDespesa] = useState([]);
    const [total, setTotal] = useState(0);

    const ListarDespesa = (filtro) => {
        if (filtro)
            dados = dadosFiltrados;
        
            let soma = 0;
            for (var i=0; i < dados.length; i++){
                soma = soma + dados[i].valor;
            }

       setTotal(soma);
       setDespesa(dados);
    }

    const OpenDepesa = (id) =>{
        navigate("/despesa/" + id);
    }

    const DeleteDepesa = (id) =>{
        alert(id);
    }

    useEffect(() => {
        ListarDespesa();
    }, []);
    
    return <>
        <Sidebar />
        <Navbar onClickSearch={ListarDespesa} 
                total={total}
                search={true}/>
        <div className="container-home">
            <div className="title-home">
                <h1>Despesas</h1>
                <button onClick={() => navigate("/despesa/add")} className="btn btn-green">Adicionar Despesa</button>
            </div>

            <div className="box-despesa">
                <table>
                    <thead>
                        <tr>
                            <th>Id. Despesa</th>
                            <th>Descrição</th>
                            <th>Categoria</th>
                            <th className="text-right">Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            despesa.map((desp) => {
                                return <tr>
                                <td>{desp.id}</td>
                                <td>{desp.descricao}</td>
                                <td>{desp.categoria}</td>
                                <td className="text-right">
                                R$ {desp.valor.toLocaleString('pt-BR',  { minimumFractionDigits: 2 })}
                                    </td>
                                <td className="text-right">
                                    <button onClick={() => OpenDepesa(desp.id)}
                                             className="btn btn-blue">
                                        <img  className="icon-sm" src={icons.edit} />    
                                    </button>
                                    <button onClick={() => DeleteDepesa(desp.id)} className="btn btn-red ml-10">
                                        <img className="icon-sm" src={icons.remove} />
                                    </button>
                                </td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
 
export default Home;