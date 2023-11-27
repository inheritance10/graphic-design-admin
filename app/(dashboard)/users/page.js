'use client'
import {Container, Table} from "react-bootstrap";
import {PageHeading} from "../../../widgets";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";

const Users = () => {
    return(
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Kullanıcı Listesi" />
            <Table hover className="text-nowrap">
                <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th>İşlemler</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <CiEdit className='mx-2' color={'#657484'} size={22} onClick={() => alert('merhaba')}/>
                        <MdDelete  size={22} color={'red'}/>
                    </td>
                </tr>
                </tbody>
            </Table>

        </Container>

    )
}

export default Users
