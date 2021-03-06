const RegistrationForm = () => {
    return (
        <form className="loginform">
            <label for="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />
            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
            <label for="psw-repeat">Repeat Password</label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
            <button type="submit" class="registerbtn">Register</button>
        </form>
    )
}

export default RegistrationForm
