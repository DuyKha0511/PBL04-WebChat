import React, { Component } from 'react';
import './App.css';
import Conversation from './Components/Conversation';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="Header">
          <div className="mb-1 navbar navbar-expand-sm navbar-bright lighten-1">
            <a className="navbar-brand " href="/#"><b className="nameApp">LetsChat</b></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
              <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-4">
                <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                  aria-label="Search" id="searchForm" />
                <i className="fas fa-search mb-2" aria-hidden="true"></i>
              </form>
              {/* Right Header */}
              <ul className="navbar-nav ml-auto nav-flex-icons">
                {/* Notification */}
                <li className="nav-item notification mr-3 ">
                  <ul className="navbar-nav ml-auto ">
                    <li className="nav-item avatar dropdown ">
                      <a className="nav-link dropdown-toggle "
                        id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-expanded="true" href="/#">
                        <span className="badge badge-danger ml-2 ">4</span>
                        <i className="fas fa-bell "></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                        <a className="dropdown-item waves-effect waves-light" href="/#">New friend</a>
                        <a className="dropdown-item waves-effect waves-light" href="/#">New friend</a>
                        <a className="dropdown-item waves-effect waves-light" href="/#">New friend</a>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Avatar */}
                <li className="nav-item avatar dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                    aria-expanded="false" href="/#">
                    <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/117001932_1110718096036504_8930080626201132635_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=xw3KAt-NZwUAX_HGLgT&_nc_ht=scontent.fsgn2-2.fna&oh=1e4388ad05943c99c9d3f0de159ef9ea&oe=5FD43DFD"
                      className="rounded-circle z-depth-0"
                      alt="avatar" id="avatar" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                    aria-labelledby="navbarDropdownMenuLink-55">
                    <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#modalUpdateProfile">Profile</a>
                    <a className="dropdown-item" href="/#">Setting</a>
                    <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#modalFeedback">Help and Feedback</a>
                    <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#modalConfirmLogout">Logout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* modalUpdateProfile */}
          <div className="modal fade" id="modalUpdateProfile" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/117001932_1110718096036504_8930080626201132635_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=xw3KAt-NZwUAX_HGLgT&_nc_ht=scontent.fsgn2-2.fna&oh=1e4388ad05943c99c9d3f0de159ef9ea&oe=5FD43DFD"
                    alt="avatar" className="rounded-circle img-responsive modal-title" id="avaModal" />
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body mx-3">
                  <h5 className="mt-1 mb-2 text-center"><b>Vinh</b></h5>
                  <div className="md-form">
                    <i className="fas fa-user prefix grey-text"></i>
                    <input type="text" id="defaultForm-name" className="form-control" />
                    <label htmlFor="defaultForm-name">Name user</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-phone-volume prefix grey-text"></i>
                    <input type="tel" id="defaultForm-phone" className="form-control" />
                    <label htmlFor="defaultForm-phone">Number phone</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-birthday-cake prefix grey-text"></i>
                    <input type="date" id="defaultForm-birthday" className="form-control grey-text " />
                    <label htmlFor="defaultForm-birthday"></label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <input id="defaultForm-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-primary morpheus-den-gradient">Save</button>
                  <button className="btn" data-dismiss="modal" >Cancel</button>
                </div>
              </div>
            </div>
          </div>

          {/* ModelFeedback */}
          <div className="modal fade right" id="modalFeedback" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true" data-backdrop="false">
            <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">

              <div className="modal-content">
                <div className="modal-header morpheus-den-gradient">
                  <p className="heading lead">Feedback request</p>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="white-text">×</span>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="text-center">
                    <i className="far fa-file-alt fa-4x mb-3 animated rotateIn"></i>
                    <p><strong>Your opinion matters</strong></p>
                    <p>Have some ideas how to improve our product?
                    <strong>Give us your feedback.</strong>
                    </p>
                  </div>

                  <hr></hr>

                  <p className="text-center">
                    <strong>Your rating</strong>
                  </p>
                  <div className="form-check mb-4">
                    <input className="form-check-input" name="group1" type="radio" id="radio-179" value="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="radio-179">Very good</label>
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" name="group1" type="radio" id="radio-279" value="option2" />
                    <label className="form-check-label" htmlFor="radio-279">Good</label>
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" name="group1" type="radio" id="radio-379" value="option3" />
                    <label className="form-check-label" htmlFor="radio-379">Mediocre</label>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" name="group1" type="radio" id="radio-479" value="option4" />
                    <label className="form-check-label" htmlFor="radio-479">Bad</label>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" name="group1" type="radio" id="radio-579" value="option5" />
                    <label className="form-check-label" htmlFor="radio-579">Very bad</label>
                  </div>

                  <p className="text-center">
                    <strong>What could we improve?</strong>
                  </p>
                  <div className="md-form">
                    <textarea type="text" id="form79textarea" className="md-textarea form-control" rows="3"></textarea>
                    <label htmlFor="form79textarea">Your message</label>
                  </div>
                </div>

                <div className="modal-footer justify-content-center">
                  <a type="button" className="btn btn-primary waves-effect waves-light morpheus-den-gradient" href="/#">Send
                  <i className="fa fa-paper-plane ml-1"></i>
                  </a>
                  <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal" href="/#">Cancel</a>
                </div>
              </div>
            </div>
          </div>

          {/* modalConfirmLogout */}
          <div className="modal fade" id="modalConfirmLogout" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-sm modal-notify modal-primary" role="document">
              <div className="modal-content text-center">
                <div className="modal-header d-flex justify-content-center">
                  <p className="heading">Are you sure?</p>
                </div>
                <div className="modal-body">
                  <i className="fas fa-sign-out-alt fa-4x animated rotateIn"></i>
                </div>
                <div className="modal-footer flex-center">
                  <a href="/#" className="btn  btn-outline-primary">Yes</a>
                  <a href="/#" type="button" className="btn  btn-primary waves-effect" data-dismiss="modal">No</a>
                </div>
              </div>
            </div>
          </div>
        </header>






        <div className="content">
          <div className="row no-gutters">
            {/* List message */}
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="side-bar">

                <div className="row search-side-bar">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="search-area side-search">
                      <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                        <i className="fas fa-search mb-1" aria-hidden="true"></i>
                        <input className="txtSearchSideBar form-control form-control-sm ml-3 w-75 mb-0"
                          type="text"
                          placeholder="Search"
                          aria-label="Search" />
                      </form>
                    </span>
                  </div>
                </div>

                <div className="row container side-button-list no-gutters">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button className="side-button btn btn-primary blue-gradient">
                      <span className="fas fa-bell side-button-icon" aria-hidden="true"></span>Chats</button>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button className="side-button btn ">
                      <span className="fas fa-user-friends side-button-icon" aria-hidden="true"></span>Groups</button>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button className="side-button btn btn-primary blue-gradient">
                      <span className="fas fa-address-book side-button-icon" aria-hidden="true"></span>Contacts</button>
                  </div>
                </div>

                <div className="side-bar-content">
                  <div className="chat-message">
                    <img src="https://thuthuattienich.com/wp-content/uploads/2017/06/anh-dai-dien-facebook-cho-meo-de-thuong-14.jpg" className="img-responsive avatar" alt="img" />
                    <div>
                      <span className="nameUser">Kha</span>
                      <span className="side-message">You: Hi</span>
                    </div>
                  </div>
                  <div className="chat-message">
                    <img src="https://thuthuattienich.com/wp-content/uploads/2017/06/anh-dai-dien-facebook-cho-meo-de-thuong-14.jpg" className="img-responsive avatar" alt="img" />
                    <div>
                      <span className="nameUser">Vinh</span>
                      <span className="side-message">You: Hello</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="middle-bar">
                <Conversation />
              </div>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="right-bar card">
                <h5 className="card-header info-color blue-gradient white-text text-center py-4">
                  <div>
                    <img src="https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg"
                      alt="avatar" className="rounded-circle img-responsive modal-title" id="avaRecipent" />
                    <span className="name-recipent"><h5><strong>Zayn</strong></h5></span>
                    <span className="status-activity">Online</span>
                  </div>
                </h5>
                <div className="card-body">
                  <ul className="text-center" style={{ color: "#757575" }} action="#!">
                    <li className="card-info md-form ">
                      <a id="phone-recipent" href="/#"> <i className="fas fa-phone-alt "></i>0905-555-111</a>
                    </li>
                    <li className="card-info md-form ">
                      <a id="mail-recipent" href="/#"><i className="fas fa-mail-bulk"></i>zayn@gmail.com</a>
                    </li>
                    <li className="card-info md-form ">
                      <a id="birthday-recipent" href="/#"><i className="fas fa-phone-alt "></i>12-01-1993</a>
                    </li>
                    <li className="card-info md-form ">
                      <a id="address-recipent" href="/#"><i className="fas fa-home "></i>zayn@gmail.com</a>
                    </li>
                    <li className="card-info md-form ">
                      <a id="relatioship-recipent" href="/#"><i className="fas fa-user-friends "></i>Friend</a>
                    </li>
                    <li className="card-info md-form ">
                      <a id="date-start-relationship-recipent" href="/#"><i className="fas fa-tree "></i>Friend since December 2019</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>




        <footer className="page-footer mdb-color black">
          <div className="footer-copyright text-right py-0.5 mr-5">© 2020 Copyright:
            <a href="/#"> MDBootstrap.com</a>
            <a className="TermOfUser" href="/#" data-toggle="modal" data-target="#modalTermOfUser">  Term of user</a>
            <a className="Privacy" href="/#" data-toggle="modal" data-target="#modalPrivacy">  Privacy and cookie policy</a>
          </div>
        </footer>
        <div className="modal fade" id="modalTermOfUser" tabIndex="-1" role="dialog" aria-labelledby="modalTermOfUser"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header morpheus-den-gradient">
                <h5 className="modal-title " id="modalTermOfUser">Term of user</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Microsoft collects data from you, through our interactions with you and through our products. You provide some of this data directly, and we get some of it by collecting data about your interactions, use, and experiences with our products. The data we collect depends on the context of your interactions with Microsoft and the choices you make, including your privacy settings and the products and features you use. We also obtain data about you from third parties.
                If you represent an organization, such as a business or school, that utilizes Enterprise and Developer Products from Microsoft, please see the Enterprise and developer products section of this privacy statement to learn how we process your data. If you are an end user of a Microsoft product or a Microsoft account provided by your organization, please see the Products provided by your organization and the Microsoft account sections for more information.
                You have choices when it comes to the technology you use and the data you share. When we ask you to provide personal data, you can decline. Many of our products require some personal data to provide you with a service. If you choose not to provide data required to provide you with a product or feature, you cannot use that product or feature. Likewise, where we need to collect personal data by law or to enter into or carry out a contract with you, and you do not provide the data, we will not be able to enter into the contract; or if this relates to an existing product you’re using, we may have to suspend or cancel it. We will notify you if this is the case at the time. Where providing the data is optional, and you choose not to share personal data, features like personalization that use such data will not work for you.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary morpheus-den-gradient" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="modalPrivacy" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header morpheus-den-gradient">
                <h5 className="modal-title" id="exampleModalLongTitle">Privacy and cookie policy</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Your Privacy. Your privacy is important to us. Please read the Microsoft Privacy Statement (https://go.microsoft.com/fwlink/?LinkId=521839) (the "Privacy Statement") as it describes the types of data we collect from you and your devices ("Data"), how we use your Data, and the legal bases we have to process your Data. The Privacy Statement also describes how Microsoft uses your content, which is your communications with others; postings submitted by you to Microsoft via the Services; and the files, photos, documents, audio, digital works, livestreams and videos that you upload, store, broadcast or share through the Services ("Your Content"). Where processing is based on consent and to the extent permitted by law, by agreeing to these Terms, you consent to Microsoft’s collection, use and disclosure of Your Content and Data as described in the Privacy Statement. In some cases, we will provide separate notice and request your consent as referenced in the Privacy Statement.
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary morpheus-den-gradient" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
