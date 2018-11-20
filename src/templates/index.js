import React from 'react'
import { Helmet } from "react-helmet"

import MyContext, { ContextProviderComponent } from "../components/Context"
import Spinner from '../components/Spinner'
import SliderArea from "../components/SliderArea";
import AboutArea from "../components/AboutArea";
import Products from "../components/Products";
import BlogArea from "../components/BlogArea";


export default function index() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wild Coast Walks</title>
            </Helmet>

            <ContextProviderComponent>
                <MyContext.Consumer>
                    {({ data }) => {
                        return data.loadSpinner ? <Spinner /> : null;
                    }}
                </MyContext.Consumer>
                <SliderArea />
                <AboutArea />
                <Products />
                <BlogArea />
            </ContextProviderComponent>
        </div>
    )
}