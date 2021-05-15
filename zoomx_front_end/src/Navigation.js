import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LibraryPage from './page/LibraryPage';
import ContactPage from './page/ContactPage';
import DetailProjectPage from './page/DetailProjectPage';
import DetailRecruitmentPage from './page/DetailRecruitmentPage';
import HomePage from './page/HomePage';
import InvestmentPage from './page/InvestmentPage';
import NewsPage from './page/NewsPage';
import ProjectPage from './page/ProjectPage';
import RecruitmentPage from './page/RecruitmentPage';
import ZoomXPage from './page/ZoomXPage';
import BlogDetailPage from './page/BlogDetailPage';
import AdminPage from './page/AdminPage';

export default function Navigation() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/library">
                    <LibraryPage />
                </Route>
                <Route exact path="/zoomX">
                    <ZoomXPage />
                </Route>
                <Route exact path="/contact">
                    <ContactPage />
                </Route>
                <Route exact path="/project">
                    <ProjectPage />
                </Route>
                <Route exact path="/detail-project">
                    <DetailProjectPage />
                </Route>
                <Route exact path="/news">
                    <NewsPage />
                </Route>
                <Route exact path="/investment">
                    <InvestmentPage />
                </Route>
                <Route exact path="/recruitment">
                    <RecruitmentPage />
                </Route>
                <Route exact path="/detail-recruitment">
                    <DetailRecruitmentPage />
                </Route>
                <Route exact path="/blog-detail">
                    <BlogDetailPage />
                </Route>
                <Route exact path="/admin">
                    <AdminPage />
                </Route>
            </Switch>
        </Router>
    )
}