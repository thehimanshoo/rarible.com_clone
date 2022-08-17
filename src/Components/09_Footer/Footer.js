import React from "react";
import {Footer_main} from "./Footer_Styled_Component";
import "./Footer.css";

const footer = () => {
    return(
        <React.Fragment>
            <div className="controller">
                <Footer_main>
                    <div className="parent_div">
                        <div className="span_handler">
                            <span className="download">Download Rarible app</span>
                            <span className="track"> to track your NFT portfolio and discover drops</span>

                            {/* ------------------- Apple Store Button ------------------- */}
                            <div className="Button_group">
                                <div className="footer_button_handler">
                                    <a href="https://apps.apple.com/us/app/rarible-nft-browser/id1574704824" target="_blank" className="app_store">
                                        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" xmlns="http://www.w3.org/2000/svg"
                                             className="apple-logo">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M11.8683 2C11.9261 2.75473 11.6874 3.50226 11.203 4.08385C10.971 4.37239 10.6765 4.60453 10.3418 4.76278C10.0071 4.92103 9.64087 5.00128 9.27065 4.99746C9.24703 4.63452 9.29518 4.27049 9.41233 3.92616C9.52949 3.58184 9.71336 3.26398 9.95343 2.99076C10.4444 2.43149 11.1281 2.07774 11.8683 2ZM13.2185 7.49319C12.9726 7.92657 12.8402 8.41513 12.8338 8.91341C12.8344 9.47391 13 10.0218 13.3099 10.4888C13.6198 10.9559 14.0603 11.3213 14.5765 11.5397C14.3736 12.199 14.0676 12.8221 13.6701 13.3858C13.1361 14.1845 12.5763 14.9649 11.6878 14.9793C11.2652 14.989 10.9799 14.8675 10.6827 14.7409C10.3726 14.6088 10.0495 14.4712 9.54398 14.4712C9.0078 14.4712 8.67025 14.6132 8.3447 14.7503C8.06336 14.8687 7.79099 14.9833 7.40713 14.9992C6.56093 15.0305 5.91423 14.1467 5.36088 13.3555C4.2549 11.7397 3.3937 8.80192 4.54827 6.80296C4.8148 6.32401 5.20086 5.92226 5.66882 5.63687C6.13679 5.35147 6.6707 5.19216 7.21854 5.17446C7.69846 5.16459 8.15899 5.34957 8.56274 5.51174C8.87152 5.63577 9.1471 5.74646 9.37276 5.74646C9.57113 5.74646 9.83901 5.64014 10.1512 5.51623C10.643 5.32105 11.2447 5.08223 11.8579 5.14659C12.3279 5.16129 12.7879 5.28537 13.2016 5.50898C13.6152 5.73258 13.9709 6.04954 14.2406 6.4347C13.8161 6.69568 13.4645 7.05981 13.2185 7.49319Z"
                                                  fill="currentColor"/>
                                        </svg>
                                        App Store</a>

                                    {/* ------------------- Play Store Button ------------------- */}

                                    <a href="https://play.google.com/store/apps/details?id=com.rarible.android.release" target="_blank" className="play_store">
                                        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" xmlns="http://www.w3.org/2000/svg"
                                             className="play_store_svg">
                                            <path
                                                d="M5.5633 3.18986C5.41178 3.37152 5.33447 3.60504 5.34719 3.84261V14.156C5.33155 14.394 5.40922 14.6286 5.5633 14.8088L5.59549 14.8461L11.2925 9.06925V8.92937L5.59549 3.15723L5.5633 3.18986Z"
                                                fill="url(#paint0_linear_1745_83314)"/>
                                            <path
                                                d="M13.1777 10.995L11.2925 9.06938V8.92951L13.1777 7.00391L13.2191 7.03188L15.4767 8.32805C16.1204 8.69639 16.1204 9.30251 15.4767 9.67551L13.2283 10.9717L13.1777 10.995Z"
                                                fill="url(#paint1_linear_1745_83314)"/>
                                            <path
                                                d="M13.233 10.9666L11.2927 8.99902L5.56348 14.8085C5.69341 14.9257 5.85971 14.9932 6.03356 14.9992C6.20741 15.0051 6.37783 14.9492 6.51527 14.8411L13.233 10.9666Z"
                                                fill="url(#paint2_linear_1745_83314)"/>
                                            <path
                                                d="M13.233 7.03194L6.51527 3.16209C6.37872 3.05248 6.20843 2.9952 6.03435 3.00032C5.86027 3.00543 5.69354 3.07262 5.56348 3.19006L11.2927 8.99951L13.233 7.03194Z"
                                                fill="url(#paint3_linear_1745_83314)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_1745_83314" x1="10.7867" y1="3.73537"
                                                                x2="2.96381" y2="11.4502" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#00A0FF"/>
                                                    <stop offset="0.01" stopColor="#00A1FF"/>
                                                    <stop offset="0.26" stopColor="#00BEFF"/>
                                                    <stop offset="0.51" stopColor="#00D2FF"/>
                                                    <stop offset="0.76" stopColor="#00DFFF"/>
                                                    <stop offset="1" stopColor="#00E3FF"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1745_83314" x1="16.3181" y1="8.99945"
                                                                x2="5.19546" y2="8.99945" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFE000"/>
                                                    <stop offset="0.41" stopColor="#FFBD00"/>
                                                    <stop offset="0.78" stopColor="#FFA500"/>
                                                    <stop offset="1" stopColor="#FF9C00"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_1745_83314" x1="12.1801" y1="10.0714"
                                                                x2="1.56937" y2="20.5309" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF3A44"/>
                                                    <stop offset="1" stopColor="#C31162"/>
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_1745_83314" x1="4.11969" y1="-0.241518"
                                                                x2="8.8563" y2="4.42965" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#32A071"/>
                                                    <stop offset="0.07" stopColor="#2DA771"/>
                                                    <stop offset="0.48" stopColor="#15CF74"/>
                                                    <stop offset="0.8" stopColor="#06E775"/>
                                                    <stop offset="1" stopColor="#00F076"/>
                                                </linearGradient>
                                            </defs>
                                        </svg> Play Store
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="image_handler">
                            <img className="phone_img" src="https://rarible.com/public/8d5ac97f4f8ee5413775.png" alt="..." loading="lazy"/>
                        </div>

                        <div className="right_content_handler">
                            <div className="QR_handler">
                                <img className="QR_image" src="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAwSDRWMy45OTk5NFYyNFYyOEgwVjBaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik00IDBIMjhWMjhINFYyNEgyNEwyNCA0TDQgMy45OTk5NFYwWiIgZmlsbD0iIzE2MTYxQSIvPgo8cGF0aCBkPSJNNDAgMEg0NFY4SDM2VjEySDMyVjMuOTk5OTRINDBWMFoiIGZpbGw9IiMxNjE2MUEiLz4KPHBhdGggZD0iTTc2IDcySDcyVjc2SDc2VjcyWiIgZmlsbD0iIzE2MTYxQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4IDI4SDQ0VjE2SDQwVjEySDM2VjE2SDMyVjMySDI0VjM2SDMyVjQ4SDQwVjUySDQ0TDQ0IDYwSDI4TDI4IDU2SDM2VjUySDI4VjQ4SDI0VjUySDIwVjQ4TDE2IDQ4VjQwSDIwVjQ0SDI4VjQwSDIwVjM2SDE2VjMySDEyVjM2SDE2VjQwSDhWNDhMNC4wMDAwMiA0OFY1Mkg4TDggNDhIMTZWNTJIMTJWNjBINC4wMDAwMlY2NFY2OEgxMlY2NEgxNlY2OEgzMlY3Nkg0MFY4MEgzNlY4NEwzMiA4NFY4OEgzNlY5MkgzMlYxMDBINDRMNDQgOTZINDhMNDggMTAwSDU2Vjk2SDYwVjEwMEg4MFY5Nkg3NlY5Mkg3MlY5Nkg2OFY4NEg3NlY4OEg4MFY5Mkg4NEw4NCA5Nkg4OFY5Mkg5MlY4NEg5NlY3NkgxMDBWNjhIOTZWNzJIOTJWNjRIOTZWNjBIMTAwVjQ4SDkyVjUySDg4VjQ4SDg0VjU2SDgwVjUySDc2VjQ4TDcyIDQ4VjQ0SDgwVjQwSDc2VjM2SDg0VjMySDcyVjM2SDY0VjQwSDY4VjQ0TDY0IDQ0VjQ4SDYwVjQ0TDU2IDQ0VjM2SDYwVjMySDY0VjI4SDY4VjI0TDY0IDI0VjIwSDY4VjE2SDYwVjEySDY0VjRINjhWMEg1MlY4SDU2VjE2SDUyVjEySDQ4VjI4Wk01NiAyNEg1MlYyOEg0OEw0OCAzMkg1NlYyNFpNNjAgMjRWMTZINTZWMjRINjBaTTYwIDI0VjI4SDY0VjI0SDYwWk02MCA1MlY0OEg1NlY1Mkg2MFpNNTIgNjRWODBINjBWODRINjRWNzZINTZWNzJINjBWNjRINjhWNjBINzJWNjRIODBWNjBINzZWNTZINjRWNTJINjBWNTZINTZWNjRINTJaTTQ4IDY0SDUyVjQ4SDQ4VjY0Wk00OCA2NEg0NFY2OEg0MFY3Mkg0OEw0OCA2NFpNODggNjBMODggNTZIODRMODQgNjBIODhaTTkyIDYwVjY0SDg4TDg4IDYwSDkyWk05MiA2MFY1Mkg5NlY2MEg5MlpNOTIgNzJIODRWNzZIOTJWNzJaTTkyIDg0VjgwSDg0Vjg4SDg4Vjg0TDkyIDg0Wk00OCA4OEw0OCA5Mkg0NFY5NkgzNlY5Mkg0MFY4OEg0OFpNNDggODRINTZWODhINDhMNDggODRaTTQ4IDg0TDQ4IDc2SDQ0VjgwSDQwVjg0SDQ4Wk0yNCA1NkwyNCA2MEgyOEwyOCA2NEgxNlY1NkgyNFpNMjQgNTZMMjQgNTJIMjhMMjggNTZIMjRaTTMyIDM2SDQwVjQwSDM2VjQ0SDQ0TDQ0IDMySDQwVjIwSDM2VjMySDMyVjM2Wk04MCA4MFY2OEg2OFY4MEg4MFoiIGZpbGw9IiMxNjE2MUEiLz4KPHBhdGggZD0iTTgwIDhWMjBIOTJWOEg4MFoiIGZpbGw9IiMxNjE2MUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MiAwVjI4SDEwMFYwSDcyWk05NiAyNEg3NlY0SDk2VjI0WiIgZmlsbD0iIzE2MTYxQSIvPgo8cGF0aCBkPSJNOCA4VjIwSDIwVjhIOFoiIGZpbGw9IiMxNjE2MUEiLz4KPHBhdGggZD0iTTAgMzJINFYzNkgwVjMyWiIgZmlsbD0iIzE2MTYxQSIvPgo8cGF0aCBkPSJNOCAzMkg0VjM2SDhWMzJaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik04OCAzMkg5NlYzNkg4OFYzMloiIGZpbGw9IiMxNjE2MUEiLz4KPHBhdGggZD0iTTk2IDM2SDEwMFY0NEg5MlY0MEg5NlYzNloiIGZpbGw9IiMxNjE2MUEiLz4KPHBhdGggZD0iTTQgNDRIMFY1Mkg0LjAwMDAyVjQ4TDQgNDRaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik0wIDU2SDRMNC4wMDAwMiA2MEgwVjU2WiIgZmlsbD0iIzE2MTYxQSIvPgo8cGF0aCBkPSJNMCA2NEg0LjAwMDAyVjY4SDBWNjRaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik0wIDcySDRWNzZWOTZWMTAwSDBWNzJaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik00IDcyVjc2SDI0TDI0IDk2SDRWMTAwSDI4VjcySDRaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik04IDgwVjkySDIwVjgwSDhaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik05NiA4OEgxMDBWOTJIOTZWODhaIiBmaWxsPSIjMTYxNjFBIi8+CjxwYXRoIGQ9Ik05MiA5NlYxMDBIMTAwVjk2SDkyWiIgZmlsbD0iIzE2MTYxQSIvPgo8L3N2Zz4K"  alt=""/>
                            </div>

                            <div className='scan'>
                                <svg viewBox="0 0 24 24" fill="none" width="24" height="24"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.2261 5.83948C10.9165 5.56429 10.4424 5.59217 10.1672 5.90176L5.18942 11.5018C4.93683 11.7859 4.93683 12.2142 5.18942 12.4983L10.1672 18.0983C10.4424 18.4079 10.9165 18.4358 11.2261 18.1606C11.5356 17.8854 11.5635 17.4113 11.2883 17.1018L7.42012 12.7501H18.25C18.6642 12.7501 19 12.4143 19 12.0001C19 11.5858 18.6642 11.2501 18.25 11.2501H7.42011L11.2883 6.89831C11.5635 6.58872 11.5356 6.11466 11.2261 5.83948Z"
                                          fill="currentColor"/>
                                </svg>
                                <span className="scan_content">Scan to download Rarible app</span>
                            </div>
                        </div>
                    </div>
                </Footer_main>
            </div>
        </React.Fragment>
    )
};
export default footer;