// import node module libraries
import {Col, Row, Form, Card, Button} from 'react-bootstrap';
import React , {useState} from 'react';
import {FormSelect} from '../../../../widgets';

const UserForm = (props) => {
    const {id} = props;

    const [formData, setFormData] = useState({
        fullname: '',
        lastname: '',
        unvan: '',
        phone: '',
        category: '',
        website: ''
    });

    console.log(id)


    const countryOptions = [
        {value: 'India', label: 'India'},
        {value: 'US', label: 'US'},
        {value: 'UK', label: 'UK'},
        {value: 'UAE', label: 'UAE'}
    ];


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const categoryData = {
            id: '',
            value: ''
        }
        if(name === 'category'){
            categoryData.id = value;
            categoryData.value = value;
            setFormData((prevData) => ({
                ...prevData,
                [name]: categoryData
            }));
            return;
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data to the console
    };


    return (
        <Row className="mb-8">
            <Col xl={3} lg={4} md={12} xs={12}>
                <div className="mb-4 mb-lg-0">
                    <p className="mb-0 fs-5 text-muted">{!id ? 'Kullanıcı Ekleyebilirsiniz' : 'Kullanıcı Düzenleyebilirsiniz'}</p>
                </div>
            </Col>
            <Col xl={9} lg={8} md={12} xs={12}>
                <Card>
                    <Card.Body>
                        <div className=" mb-6">
                            <h4 className="mb-1">{!id ? 'Kullanıcı Ekleme Formu' : 'Kullanıcı Düzenleme Formu'}</h4>
                        </div>
                        <div>

                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullname">Ad
                                        Soyad</Form.Label>
                                    <Col sm={4} className="mb-3 mb-lg-0">
                                        <Form.Control type="text" placeholder="Ad" id="fullname" name='fullname'
                                                      required value={formData?.fullname}
                                                      onChange={handleInputChange}/>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Soyad" id="lastname" name='lastname'
                                                      required
                                                      value={formData.lastname}
                                                      onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>
                                {/* row */}
                                <Row className="mb-3">
                                    <Form.Label className="col-sm-4 col-form-label form-label">Unvan</Form.Label>
                                    <Col md={8} xs={12}>
                                        <Form.Control type="text" placeholder="Unvan" id="unvan" name='unvan' required
                                                      value={formData.unvan}
                                                      onChange={handleInputChange}

                                        />
                                    </Col>
                                </Row>
                                {/* row */}
                                <Row className="mb-3">
                                    <Form.Label className="col-sm-4" htmlFor="phone">Telefon Numarası</Form.Label>
                                    <Col md={8} xs={12}>
                                        <Form.Control type="text" placeholder="Telefon Numarası" id="phone"
                                                      name='phone'
                                                      required
                                                      value={formData.phone}
                                                      onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Label className="col-sm-4" htmlFor="category">Kategori</Form.Label>
                                    <Col md={8} xs={12}>
                                        <Form.Control as={FormSelect} placeholder="Kategori Seçin" name='category'
                                                      id="category" options={countryOptions}
                                                      required
                                                      value={formData.category}
                                                      onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Label className="col-sm-4" htmlFor="website">Web Sitesi</Form.Label>
                                    <Col md={8} xs={12}>
                                        <Form.Control type="text" placeholder="Web Sitesi" name='website' id="website"
                                                      required
                                                      value={formData.website}
                                                      onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>

                                <Button variant="primary" type="submit">
                                    Kaydet
                                </Button>
                            </Form>

                        </div>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    )
}

export default UserForm
