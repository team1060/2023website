function MainComp(props) {
    return (
        <>
            <div className='container primary h100 flex-center'>메인페이지</div>
            <div className="container">
                <ul className="visualProduct">

                    {
                        props.vIData.map((item, i) => {
                            return (
                                <>
                                    <li>
                                        <a href={`/product/${i}`}>
                                            <img src={`../../assets/img/${item.img}`} alt="" />
                                            <h2>{item.title}</h2>
                                            <p>{item.content}</p>
                                        </a>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default MainComp;