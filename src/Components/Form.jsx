function Form() {
    return (
        <form className="form">
            <div className="formContent">
                <input type="email" name="email" id="email" className="formContentEmail" placeholder="Email address" />
                <button type="submit" className="formContentBtn" >Request Access</button>
            </div>
        </form>
    );
}

export default Form