export default function LogIn() {
  return(
    <div>
        <div>
          <form onSubmit={} method="post">
            <h2>Login</h2>
            <label htmlFor="name">Name: </label>
            <input type="text" name="username" placeholder="enter your username" />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="enter your password" />
            <input type="submit" placeholder="submit" />
          </form>
        </div>
    </div>
  )
}