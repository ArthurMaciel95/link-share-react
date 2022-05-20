import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "context/AppContext";
import { Validation } from "utils/validation";
import { formatDistance, subDays } from "date-fns";
import { enUS } from "date-fns/locale";
import { Image, HeaderHome } from "./styles";
import { TagsNavigation } from "components/tags-navigation";
import logoReduce from "assets/svg/logo-reduce.svg";
import Avatar from "assets/images/avatar.jpeg";
import Logo from "utils/links-logos";
import CardLink from "components/card-link";
import DataNotFound from "components/data-not-found";
import LinkArea from "components/link-area";
import CardSkeleton from "components/skeleton";
import SkeletonCards from "components/skeleton";
import ClipBoardArea from "components/clip-board-area";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const VisitorPage = () => {
    const navigate = useNavigate()
    const { visitor, visitorLinks, getVisitor, showModal } = useAppContext();
    const { nickname } = useParams();
    const [linksFiltered, setLinksFiltered] = useState([]);
    const [filterTag, setFilterTag] = useState("All");
    const [tags, setTags] = useState(["All", "Social", "Payment", "Contact"]);

    function NavidateToLogin() {
        return navigate('/', { replace: true })
    }


    const handlerButton = () => setShowModal(true);
    const userHaveAnLink = () => linksFiltered.length > 0;
    const loadVisitor = () => getVisitor(nickname);

    useEffect(loadVisitor, [showModal]);
    useEffect(() => {
        setLinksFiltered(visitorLinks);
    }, [visitorLinks]);

    const ShowAllLinkOfUser = () => {
        return linksFiltered.map((link) => (
            <CardLink
                key={link.context}
                id={link.id_link}
                image={Logo[link.type.toLowerCase()] || Logo.customlink}
                name={link.type}
                link={Validation.addHttps(link.context.toLowerCase())}
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
        if (name === "All") setLinksFiltered(visitorLinks);
        else
            setLinksFiltered(
                visitorLinks.filter((l) => l.tag === name.toLowerCase())
            );
    };
    return (
        <HeaderHome>
            <section className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center my-2">
                        <img src={logoReduce} alt="" />
                        <Button
                            variant="outlined"
                            color="secondary"
                            className="btn-back"
                            onClick={NavidateToLogin}
                            startIcon={<LoginOutlinedIcon />}
                        >
                            Login/Signup
                        </Button>
                    </div>
                </div>
                <section className="">
                    <div className="row">
                        <div className="col-md-12 header-image-avatar">
                            <Image
                                src={
                                    (visitor && visitor.body.pic_profile) ||
                                    Avatar
                                }
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
                                    {visitor && visitor.body.nickname}
                                </h4>
                                <p className="text-black-50 fs-5">
                                    {visitor && visitor.body.email}
                                </p>
                                <p className="text-black-50">
                                    {visitor && visitor.body.description}
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
                                {visitor ? (
                                    <>
                                        {userHaveAnLink() ? (
                                            ShowAllLinkOfUser()
                                        ) : (
                                            <DataNotFound isVisitor={true} />
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
