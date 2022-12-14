import React from "react";
// import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

import ApplicationLogo from "@/Components/ApplicationLogo";
const TopNavigation = () => {
    const { url, component } = usePage();
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <ApplicationLogo />
                {/* <img alt="MDB React Logo" className="img-fluid" src={logo}/> */}
            </a>
            <MDBListGroup className="list-group-flush">
                <Link
                    href="/dashboard"
                    className={url === "/dashboard" ? "activeClass" : ""}
                >
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3" />
                        Dashboard
                    </MDBListGroupItem>
                </Link>
                <Link
                    href="/books"
                    className={url === "/books" ? "activeClass" : ""}
                >
                    <MDBListGroupItem>
                        <MDBIcon icon="book" className="mr-3" />
                        Books
                    </MDBListGroupItem>
                </Link>
                <Link
                    href="/author"
                    className={url === "/author" ? "activeClass" : ""}
                >
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3" />
                        Author
                    </MDBListGroupItem>
                </Link>
                <Link
                    href="/publisher"
                    className={url === "/publisher" ? "activeClass" : ""}
                >
                    <MDBListGroupItem>
                        <MDBIcon fas icon="sync-alt" className="mr-3"  />
                        Publisher
                    </MDBListGroupItem>
                </Link>
                <Link
                    href="/genre"
                    className={url === "/genre" ? "activeClass" : ""}
                >
                    <MDBListGroupItem>
                    <MDBIcon fas icon="fas fa-book-open" className="mr-3"  />
                        Genre
                    </MDBListGroupItem>
                </Link>

                <Link href="/404">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3" />
                        404
                    </MDBListGroupItem>
                </Link>
            </MDBListGroup>
        </div>
    );
};

export default TopNavigation;
