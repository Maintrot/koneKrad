export default function Register() {
  return(
    <div>
      <div>
        <form onSubmit={} method="post">
          <h2>Register</h2>
          <label htmlFor="name">Name: </label>
          <input type="text" name="username" placeholder="enter your username" />
          <label htmlFor="email">Email: </label>
          <input type="text" name="username" placeholder="enter your Email" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="enter your password" />
          <label htmlFor="password_again">Password again: </label>
          <input type="password" name="password_again" placeholder="enter your password again" />
          <input type="submit" placeholder="submit" />
        </form>
      </div>
    </div>
  )
}