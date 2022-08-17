import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar  } from "react-bootstrap";

export default class Bootstrap extends React.Component{
    render(){
        return(
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dicky Azhari Hernuwan</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Biografi">Biografi</Nav.Link>
                    <Nav.Link href="#Kontak">Kontak</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
      <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
      <div className="container-lfuid py-5 text-center">
        <p className="fs-4 fst-italic m-4">Pengurus</p>
        <h1 className="display-4">Dicky Azhari Hernuwan</h1>
        <button className="btn btn-warning border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">Linked Profile
        </button>
      </div>
    </div>
        <div  className="container text-center" id="bio">
            <h3 className="fs-bold fs-3"> My bio</h3>
            <p className="fs-6 fst-italic fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum enim nam vel dicta iusto possimus maxime, 
            laborum ullam sit aperiam non quo minima sed cum amet praesentium illo inventore ipsa magnam placeat error. 
            Aspernatur dolorum, dolores totam tenetur est voluptatum autem id sed. Eius perspiciatis tempore harum ex ducimus 
            molestiae velit temporibus fuga similique reprehenderit laudantium aut quia earum dolorem id quis consequuntur in ad 
            corporis, enim natus ullam nam ipsam! Aut aliquid hic cum mollitia itaque odio dolores, architecto quisquam neque optio 
            nostrum quia eius, nemo ipsum! Doloremque esse reprehenderit a dolores porro earum fugit repudiandae quod laudantium.
            </p>
        
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
            <h6 className="fs-5"> Data Diri</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum enim nam vel dicta iusto possimus maxime, 
                laborum ullam sit aperiam non quo minima sed cum amet praesentium illo inventore ipsa magnam placeat error. 
                Aspernatur dolorum, dolores totam tenetur est voluptatum autem id sed. Eius perspiciatis tempore harum ex ducimus 
                molestiae velit temporibus fuga </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <h6 className="fs-5">Kegiatan</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum enim nam vel dicta iusto possimus maxime, 
                laborum ullam sit aperiam non quo minima sed cum amet praesentium illo inventore ipsa magnam placeat error. 
                Aspernatur dolorum, dolores totam tenetur est voluptatum autem id sed. Eius perspiciatis tempore harum ex ducimus 
                molestiae velit temporibus fuga </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <h6 className="fs-5">Hobi</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum enim nam vel dicta iusto possimus maxime, 
                laborum ullam sit aperiam non quo minima sed cum amet praesentium illo inventore ipsa magnam placeat error. 
                Aspernatur dolorum, dolores totam tenetur est voluptatum autem id sed. Eius perspiciatis tempore harum ex ducimus 
                molestiae velit temporibus fuga </p>
            </div>
        </div>
        </div>

    </>
        )
    }
}