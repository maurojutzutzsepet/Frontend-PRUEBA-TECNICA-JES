import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="bd-example">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://res.cloudinary.com/cao/image/upload/v1581561054/dkd_okpn70.jpg" class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>GOBIERNO DE GUATEMALA</h5>
                                    <p>El Ministerio Público es una institución auxiliar de la administración pública y de los tribunales con funciones autónomas, cuyos fines principales son velar por el estricto cumplimiento de las leyes del país, lo cual está descrito en la Constitución Política de la República de Guatemala en su artículo 251.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/cao/image/upload/v1581561046/dmn_dsr2fv.jpg" class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>JUSTICIA EFICAZ PARA TODAS Y TODOS</h5>
                                    <p>Es una institución auxiliar de la administración pública y de los tribunales con funciones autónomas, cuyos fines son velar por el estricto cumplimiento de las leyes del país.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://res.cloudinary.com/cao/image/upload/v1581561029/ds_axmpzm.jpg" class="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>MINISTERIO PUBLICO</h5>
                                    <p>Es una institución auxiliar de la administración pública y de los tribunales con funciones autónomas, cuyos fines son velar por el estricto cumplimiento de las leyes del país.</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
