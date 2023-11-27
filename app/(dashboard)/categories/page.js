'use client'
import { Container } from 'react-bootstrap';


import {GeneralSetting} from "../../../../../sub-components";
import {PageHeading} from "../../../../../widgets";

const Categories = () => {
    return (
        <Container fluid className="p-6">

            <PageHeading heading="Kategoriler" />

            <Table hover className="text-nowrap">
                <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>


        </Container>
    )
}

export default AddUser