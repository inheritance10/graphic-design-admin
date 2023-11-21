'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components

import {GeneralSetting} from "../../../../../sub-components";
import {PageHeading} from "../../../../../widgets";

// import sub components

const Settings = () => {
    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="General" />

            {/* General Settings */}
            <GeneralSetting />

        </Container>
    )
}

export default Settings