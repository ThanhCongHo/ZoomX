import React from 'react';
import '../style/library.scss';
import MenuLibrary from '../component/library/MenuLibrary';
import ListLibrary from '../component/library/ListLibrary';
import Paginator from '../component/library/Paginator';
import Header from '../component/share/Header';
import Footer from '../component/share/Footer';


export default function LibraryPage(){
    return(
        <>
            <Header />
            <MenuLibrary />
            <ListLibrary />
            <Paginator />
            <Footer />
        </>
    )
}