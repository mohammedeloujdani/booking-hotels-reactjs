import "./MailList.css"

const MailList = () => {
  return (
    <div>
      <h1 className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailSub">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input className="mailInput" type="input" placeholder="Your email adress"></input>
            <input className="mailBtn" type="submit"value="Subscribe"></input>
        </div>
      </h1>
    </div>
  )
}

export default MailList
