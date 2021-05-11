import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import HeroPage from '../component/share/HeroPage';
import MenuProject from '../component/project/MenuProject';
import ListProject from '../component/project/ListProject';
import ReadMoreBtn from '../component/project/ReadMoreBtn';
import '../style/project.scss'

export default function ProjectPage(){
    return(
        <>
        <MetaTags>
                <title>Dự án</title>
            </MetaTags>
        <Header />
        <HeroPage title="DỰ ÁN" title_sub="TRANG CHỦ / DỰ ÁN" />
        <MenuProject />
        <ListProject />
        <ReadMoreBtn />

        <Footer />
        </>
    )
}