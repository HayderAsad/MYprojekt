

 function Header () {
  
    return (
      <div className="header-container">
        <div className="header-items">

           <div className="logo">

             <div className="logo-icon">
             <div className="item violet"></div>
                <div className="item blue"></div>
              </div>

              <div className="logo-titel">
                FINAL TASK
              </div>
              
           </div>

            <div className="register-btn">
            <a href="#members">
            <button className="btn Users">Users</button>
            </a>
            <a href="#registration">
            <button className="btn Sign-Up">Sign Up</button>
            </a>
            </div>
        </div>
      </div>
    )
  
}

export default Header