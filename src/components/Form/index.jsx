import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CustomSelect from './CustomSelect'

const CustomForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        control,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Container className="px-4 py-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите Ваше имя"
                            {...register("name", {
                                required: "Введите имя",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
                                    message: "Ввод цифр и символов не допустим"
                                },
                            })}
                        />
                        <Form.Text
                            className={`${errors?.name?.message ? "text-danger" : "text-muted"}`}>
                            {errors?.name?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridText2">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите фамилию"
                            {...register("surname", {
                                required: "Введите фамилию",
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
                                    message: "Ввод цифр и символов не допустим"
                                },
                            })}
                        />
                        <Form.Text className={`${errors?.surname?.message ? "text-danger" : "text-muted"}`}>
                            {errors?.surname?.message}
                        </Form.Text>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите email"
                        {...register('email', {
                            required: 'Введите email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неверный формат ввода email address'
                            }
                        })} 
                    />
                    <Form.Text className={`${errors?.email?.message ? 'text-danger' : 'text-muted'}`}>
                       {errors?.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGridNumber" >
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Введите номер телефона"
                        {...register("phone", {
                            required: 'Введите номер телефона',
                            pattern: {
                                value: /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
                                message: 'Введите номер телефона формата Украины'
                            }
                        })} 
                    />
                    <Form.Text className={`${errors?.phone?.message ? 'text-danger' : 'text-muted'}`}>
                       {errors?.phone?.message}
                    </Form.Text>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            {...register("password", {
                                required: 'Введите пароль',
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
                                    message: 'Ненадежный пароль. Пароль должен содержать минимум 8 символов, минимум одну большу и маленькую латинские буквы.'
                                }
                            })}
                        />
                        {
                            errors.password?.message && 
                            <Form.Text className='text-danger'>{errors?.password?.message}</Form.Text>
                        }
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Подтвердите пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Подтвердите пароль"
                            {...register('repeatPassword', {
                                required: 'Подтвердите пароль',
                                validate: (value) => value === getValues('password') || 'Пароль не совпадает'
                            })} />
                            {
                                errors?.repeatPassword?.message && 
                                <Form.Text className='text-danger'>{errors?.repeatPassword?.message}</Form.Text>
                            }
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Label> Город</Form.Label>
                    <CustomSelect control={control} name={'select'}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Зарегистрироваться
                </Button>
            </Form>
        </Container>
    );
};

export default CustomForm;
