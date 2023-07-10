import React from 'react'
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li>
                                <a href="javascript:void();">
                                    <Icon icon="fa-solid:angle-double-right" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void();">
                                    <Icon icon="fa-solid:angle-double-right" />
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void();">
                                    <Icon icon="fa-solid:angle-double-right" />
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void();">
                                    <Icon icon="fa-solid:angle-double-right" />
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void();">
                                    <Icon icon="fa-solid:angle-double-right" />
                                    Videos
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li>“BECAUSE YOUR SATISFACTION IS OUR BEST REWARD, WE ARE COMMITTED TO PROVIDING SERVICE THAT IS ALWAYS GUIDED BY EFFICIENCY. ALONE WE GO FASTER TOGETHER WE GO FURTHER”</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item">
                                <a href="javascript:void();">
                                    <Icon icon="fa-brands:facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void();">
                                    <Icon icon="fa-brands:twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void();">
                                    <Icon icon="fa-brands:instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void();">
                                    <Icon icon="fa-brands:google-plus" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void();" target="_blank">
                                    <Icon icon="fa-solid:envelope" />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        
                        <p className="h6">
                            © All right Reversed.
                            <a
                                className="text-green ml-2"
                                href="https://www.sunlimetech.com"
                                target="_blank"
                            >
                                ONCA Solution
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer