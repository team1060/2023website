import { useParams } from "react-router-dom"

function ViewProduct(props) {
    const {item} = useParams;
    return (
        <>
        <div className='container bg prod h100 flex-center'>제품소개페이지입니다.</div>
        <div className="container">
            <img src={`../../../assets/img/${props.vIData[item].img}`} alt="" />
            <h2>{props.vIData[item].title}</h2>
            <p>{props.vIData[item].content}</p>
        </div>
        </>
    )
}

export default ViewProduct