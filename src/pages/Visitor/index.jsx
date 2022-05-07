import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import { Validation } from "utils/validation";
import Logo from "utils/links-logos";
import CardLink from "components/card-link";
import { Image, HeaderHome } from "./styles";
import { UserServices } from "services/api/user";
import { TagsNavigation } from "components/tags-navigation";
import DataNotFound from "components/data-not-found";
import LinkArea from "components/link-area";
import { formatDistance, subDays } from "date-fns";
import { enUS } from "date-fns/locale";
import CardSkeleton from "components/skeleton";
import SkeletonCards from "components/skeleton";
import ClipBoardArea from "components/clip-board-area";

const VisitorPage = () => {
    const validation = new Validation()
    const navigate = useNavigate();

    const { nickname } = useParams();
    const userService = new UserServices();
    const [user, setUser] = useState(undefined);
    const [showModal, setShowModal] = useState(false);
    const [links, setLinks] = useState([]);
    const [filterTag, setFilterTag] = useState("All");
    const [tags, setTags] = useState(["All", "Social", "Payment", "Contact"]);

    const handlerButton = () => setShowModal(true);
    const getUser = () => {
        const result = userService
            .visitor(nickname)
            .then((res) => {
                setUser(res.data);
                setLinks(res.data.body.links);
            })
            .catch((err) => navigate("/error", { replace: true }));
    };

    const userHaveAnLink = () => links.length > 0;
    const ShowAllLinkOfUser = () => {
        return links.map((link) => (
            <CardLink
                key={link.url}
                id={link.id_link}
                image={Logo[link.type.toLowerCase()] || Logo.customlink}
                name={link.type}
                link={validation.addHttps(link.context.toLowerCase())}
                createAt={formatDistance(new Date(link.createdAt), new Date(), {
                    addSuffix: true,
                    locale: enUS,
                })}
                visitor={true}
            />
        ));
    };
    const setFilter = (name) => {
        setFilterTag(name);
        if (name === "All") {
            setLinks(user.body.links);
        } else {
            const newLinks = user.body.links.filter(
                (link) => link.tag === name.toLowerCase()
            );
            setLinks(newLinks);
        }
    };
    useEffect(getUser, [showModal]);

    return (
        <HeaderHome>
            <section className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center my-md-2">
                        <img src={logoReduce} alt="" />
                    </div>
                </div>
                <section className="">
                    <div className="row">
                        <div className="col-md-12 header-image-avatar">
                            <Image
                                src={(user && user.body.pic_profile) || Avatar}
                                alt="avatar image profile"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-4 col-sm-12 rounded mh-25  "
                            style={{ maxHeight: "281px" }}
                        >
                            <div className="bg-white shadow-sm  mt-2 rounded  p-3">
                                <h4 className="text-dark mt-3">
                                    {user && user.body.nickname}
                                </h4>
                                <p className="text-black-50 fs-5">
                                    {user && user.body.email}
                                </p>
                                <p className="text-black-50">
                                    {user && user.body.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-md-1 position-relative link-column mt-lg-3">
                            <>
                                <TagsNavigation
                                    tags={tags}
                                    setFilter={setFilter}
                                    filter={filterTag}
                                />
                                {user ? (
                                    <>
                                        {userHaveAnLink() ? (
                                            ShowAllLinkOfUser()
                                        ) : (
                                            <DataNotFound />
                                        )}
                                    </>
                                ) : (
                                    <>{<SkeletonCards />}</>
                                )}
                            </>
                        </div>
                    </div>
                </section>
            </section>
        </HeaderHome>
    );
};

export default VisitorPage;
