'use client'
import { Container } from 'react-bootstrap';
import {PageHeading} from "../../../../widgets";
import UserForm from "../partials/UserForm";
import {useRouter} from "next/navigation";

const EditUser = () => {
    const router = useRouter();
    console.log(router);
    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Kullanıcı Düzenle" />


            <UserForm id={1}/>

        </Container>
    )
}

export default EditUser
