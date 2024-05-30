import "../../assets/CSS/footer.scss";

function FooterComponent({ text }) {
    return (
        <footer className="footer">
            <span>{text}</span>
        </footer>
    )
}

export { FooterComponent };