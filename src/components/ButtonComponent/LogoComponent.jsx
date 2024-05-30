function LogoComponent({logo, alt, ...rest}) {
    return (
        <div className="logo" {...rest}>
            <img src={logo} alt={alt} />
        </div>
    )
}

export { LogoComponent };