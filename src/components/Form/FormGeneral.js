import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Button } from "../Button";

import styled from "styled-components";

const FormGeneralWrapper = styled.div`
  max-width: 520px;
  button {
    padding: 0;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  .form-group {
    display: block;
    margin-bottom: 1.5rem;
    div {
      padding-top: 1rem;
      color: #962222;
      font-family: var(--font-geomanist);
      font-size: 0.9125rem;
      font-style: normal;
      font-weight: 500;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: rgb(var(--mint-300));
      font-family: var(--font-geomanist);
      font-size: 0.9125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.01625rem;
    }
  }
  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="password"],
  input[type="password"],
  textarea {
    color: rgb(var(--gray-700));
    font-family: var(--font-geomanist);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.01625rem;
    padding: 1rem 0.75rem;
    border-radius: 4px;
    width: 100%;
    display: block;
    border: 2px solid rgb(var(--mint-200));
    background: rgba(var(--nudge-300), 0.5);
    box-shadow: none;
    &:focus,
    &:focus-visible {
      border: 2px solid rgb(var(--teal));
      box-shadow: none;
    }
  }
  .button-group {
    margin-top: 2rem;
  }
`;

const FormGeneral = () => {
  return (
    <FormGeneralWrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Campo obrigatório";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Endereço de email inválido";
          }
          if (!values.nome) {
            errors.nome = "Campo obrigatório";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <Field type="text" id="nome" name="nome" />
              <ErrorMessage name="nome" component="div" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <Field as="textarea" id="mensagem" name="mensagem" />
            </div>
            <div className="button-group">
              <button type="submit" disabled={isSubmitting}>
                <Button text="Enviar mensagem" variation="primary" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </FormGeneralWrapper>
  );
};

export default FormGeneral;
