import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { userSelector, login } from "../../features/auth"
import * as userActions from "../../features/auth"
import Loader from "../Loader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

function SignInForm() {
  // Used for accessibility to get the focus on element and help the screen reader
  const emailRef = useRef() // used to set the focus on the first input when the component load
  const errRef = useRef() // used to set the focus on error when an error occure for screen Reader

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const { token, mail, authenticationStatus, errorMsg, isLoading } =
    useSelector(userSelector)

  // To set the focus on the first input when the component load (Accessibility)
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  // Empty out any error message if the user change the user state or password state - the error disappear because the user already read it
  useEffect(() => {
    const clearError = () => {
      dispatch(userActions.clearErrorMsg())
    }

    // Empty out any error message if the user changes the email or password and if errorMsg is not an empty string
    if ((email || password) && errorMsg !== "") {
      clearError()
    }

    // Set the focus on the error message if errorMsg is not an empty string (Accessibility)
    if (errorMsg !== "") {
      errRef.current.focus()
    }

    // Cleanup function to cancel the effect when the component is unmounted (memory licking)
    return () => {
      if (errorMsg !== "") {
        clearError()
      }
    }
  }, [email, password, errorMsg, dispatch])

  // Redirect to the Profile page if the token is store in the global state or if the authentication status is 'success'
  useEffect(() => {
    if (authenticationStatus === "success" || token) {
      navigate(`/profile`)
    }
  }, [authenticationStatus, token, navigate])

  // Prefilling the email field if mail is store in the global state
  useEffect(() => {
    if (mail) {
      setEmail(mail)
    }
  }, [mail])

  // Function handling from submission
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      login({ email: email, password: password, rememberMe: rememberMe })
    )
    setEmail("")
    setPassword("")
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <p
          ref={errRef}
          className={errorMsg ? "errmsg" : "hidden"}
          aria-live="assertive"
        >
          {errorMsg}
        </p>
        <h1 className="sign-in-title">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              onChange={(e) => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </>
  )
}

export default SignInForm
