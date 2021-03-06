const LogInForm = () => {
    return (
        <form className="loginform">
            <label for="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />
            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
            <div>
                <label for="remember">Remember me? </label>
                <input type="checkbox" name="remember" />
            </div>
            <button type="submit" class="registerbtn">Log in</button>
        </form>
    )
}

export default LogInForm
