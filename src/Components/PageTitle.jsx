import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Books Corner | {title} </title>
        </Helmet>
    );
};

export default PageTitle;