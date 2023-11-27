'use client'
import { Container } from 'react-bootstrap';


import {PageHeading} from "../../../../widgets";
import UserForm from "../partials/UserForm";

const AddUser = () => {
    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Kullanıcı Ekle" />


            <UserForm />

        </Container>
    )
}

export default AddUser
