import React from "react";
import Classes from './ErrorModule.model.css'
import Card from "./Card.module.css";
import Button from "./Button.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
    return <div className={Classes.backdrop} onClick={props.onClose} />;
};
const ModalOverLay = (props) => {
    return (
        <Card className={Classes.modal}>
            <header className={Classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={Classes.content}>
                <h3> {props.message}</h3>
            </div>
            <footer className={Classes.action}>
                <Button onClick={props.onClose}>Okay</Button>
            </footer>
        </Card>
    )

};

const ErrorModel = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onclick={props.onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDom.createPortal(
                <ModalOverLay
                    title={props.title}
                    message={props.message}
                    onClose={props.onClose}
                >
                    {props.children}
                </ModalOverLay>,
                document.getElementById("modal-overlay-root")
            )}
        </React.Fragment>
    );
};

export default ErrorModel;
