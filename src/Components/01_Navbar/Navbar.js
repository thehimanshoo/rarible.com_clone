import React, {useState} from "react";
import '../../App.css';
import "../Styled_Component/style";

const Navbar = () => {

    const [data, setData] = useState({
        address : null   // stores address
    });

    const connect_wallet = event => {
        event.preventDefault();
        if (window.ethereum){

            window.ethereum.request({method:'eth_requestAccounts'})
                .then(result => {
                    // Return the address of the wallet
                    console.log(result);

                    // Copying the address to display it dynamically on the screen
                    setData({
                        ...data,
                        address: result
                    });
                })
        }else{
            alert("Install metamask extension !!");
        }
    }

    //  -------------------- Logic to Disconnect Wallet ---------------------

    const disconnect_wallet = async (event) => {
        event.preventDefault();
        if (data.address.length > 0){
            alert("You are logged in !!!")

        }else{
            alert("####### Your account is not connected yet #######");
        }
    }

    return(
       <React.Fragment>
          <div className="main_navbar">
              <div className="navbar_Custom">
                  <nav className="navbar">

                      <a href="/" className="class_one">
                          <div className="class_two">
                              <div className="class_three">
                                  <div className="class_four">
                                      <svg width="19" height="14" viewBox="0 0 19 14" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd"
                                                d="M18.7927 3.74115C18.7927 5.56401 17.7277 6.47067 16.5308 6.78561C17.9633 7.21508 19 8.38897 19 10.25V13.6667H13.5337V10.4218C13.5337 9.42924 12.9494 9.0284 11.9504 9.0284H5.46627V13.6667H0V0H12.9871C16.248 0 18.7927 0.706239 18.7927 3.74115ZM5.46871 3.81832H12.8585V3.81891C12.8695 3.81852 12.8806 3.81832 12.8917 3.81832C13.3998 3.81832 13.8118 4.23545 13.8118 4.75C13.8118 5.26455 13.3998 5.68168 12.8917 5.68168C12.8806 5.68168 12.8695 5.68148 12.8585 5.68109V5.68168H5.46871V3.81832Z"
                                                fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <svg width="84" height="20" viewBox="0 0 84 20" fill="none" className="logo_color"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g fill="rgba(255, 255, 255, 1)">
                                      <path fillRule="evenodd" clipRule="evenodd"
                                            d="M62.8394 13.0771C62.8394 17.0643 60.5283 19.8088 56.6072 19.8088C54.9972 19.8088 53.5171 19.1356 52.8679 18.0999V19.6016H49.5961V1.27072H52.8679V8.00241C53.621 7.01855 55.0232 6.34538 56.6591 6.34538C60.5283 6.34538 62.8394 9.08984 62.8394 13.0771ZM52.6602 13.0771C52.6602 15.4332 54.0365 16.9866 56.1398 16.9866C58.2172 16.9866 59.5935 15.4332 59.5935 13.0771C59.5935 10.721 58.2172 9.16751 56.1398 9.16751C54.0365 9.16751 52.6602 10.721 52.6602 13.0771Z"/>
                                      <path fillRule="evenodd" clipRule="evenodd"
                                            d="M16.1866 19.6016L12.19 11.4977C13.9817 10.6174 15.0464 8.88271 15.0464 6.83731C15.0464 3.57503 12.7353 1.47785 9.17781 1.47785H0.5L0.525967 19.6016H4.05751V12.1709H8.58057L12.0838 19.6016H16.1866ZM4.05751 4.50711H8.6325C10.4502 4.50711 11.4889 5.38741 11.4889 6.83731C11.4889 8.28721 10.4502 9.14162 8.6325 9.14162H4.05751V4.50711Z"/>
                                      <path fillRule="evenodd" clipRule="evenodd"
                                            d="M26.9328 6.55251H30.2047V19.6016H26.9328V18.0999C26.2836 19.1356 24.8294 19.8088 23.1935 19.8088C19.2725 19.8088 16.9614 17.0643 16.9614 13.0771C16.9614 9.08984 19.2725 6.34538 23.1416 6.34538C24.7775 6.34538 26.1797 7.01855 26.9328 8.00241V6.55251ZM20.2073 13.0771C20.2073 15.4332 21.5835 16.9866 23.6609 16.9866C25.7643 16.9866 27.1405 15.4332 27.1405 13.0771C27.1405 10.721 25.7643 9.16751 23.6609 9.16751C21.5835 9.16751 20.2073 10.721 20.2073 13.0771Z"/>
                                      <path
                                          d="M41.7722 6.55251L41.5645 9.71122C41.0971 9.50409 40.4739 9.40053 39.9026 9.40053C38.0589 9.40053 36.397 10.9281 36.397 14.8118V19.6016H33.1252V6.55251H36.397V8.93449C37.0462 7.4587 38.76 6.34538 40.344 6.34538C40.8114 6.34538 41.3827 6.42305 41.7722 6.55251Z"/>
                                      <path d="M46.6865 19.6016H43.4147V6.55251H46.6865V19.6016Z"/>
                                      <path d="M65.0587 19.6016H68.3306V1.27072H65.0587V19.6016Z"/>
                                      <path fillRule="evenodd" clipRule="evenodd"
                                            d="M83.5746 12.6369C83.5746 9.60766 81.4193 6.34538 77.0049 6.34538C72.6684 6.34538 70.539 9.68533 70.539 13.0771C70.539 16.4688 72.8501 19.8088 77.1866 19.8088C80.2508 19.8088 82.5359 18.3589 83.263 15.8992L80.1988 15.0707C79.8613 16.3393 78.7706 17.0643 77.2386 17.0643C75.3689 17.0643 74.0965 15.8992 73.8109 13.9315H83.5226C83.5486 13.6726 83.5746 13.103 83.5746 12.6369ZM73.8888 11.5495C74.2523 9.78889 75.3949 8.83093 77.0049 8.83093C78.9005 8.83093 79.9132 9.99602 80.069 11.5495H73.8888Z"/>
                                      <path
                                          d="M43.0271 1.94336C43.0271 1.11493 43.6987 0.443359 44.5271 0.443359H45.6004C46.4288 0.443359 47.1004 1.11493 47.1004 1.94336V3.0166C47.1004 3.84503 46.4288 4.5166 45.6004 4.5166H44.5271C43.6987 4.5166 43.0271 3.84503 43.0271 3.0166V1.94336Z"/>
                                  </g>
                              </svg>
                          </div>
                      </a>


                      {
                          data.address === null ?
                              <div className="button_collection">
                                  <button className="connect_wallet_btn" onClick={connect_wallet}>Connect Wallet</button>
                                  <button className="dott">···</button>
                              </div> : <button className="connect_wallet_btn" onClick={disconnect_wallet}>Disconnect</button>
                      }
                  </nav>
              </div>

              {
                  data.address !== null ?
                      <div className="col d-flex justify-content-center align-items-center mt-5">
                          <div className="col-md-4">
                              <div className="card">
                                  <div className="card-header d-flex justify-content-center text-center align-items-center">
                                      <strong className="text-white fw-bold">ACCOUNT: {data.address}</strong>
                                  </div>
                              </div>
                          </div>
                      </div> :null
              }
          </div>
       </React.Fragment>
    )
};
export default Navbar;