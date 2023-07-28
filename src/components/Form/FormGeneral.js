import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

import { Button } from "../Button";
import { IconMailCheck, IconMailError } from "../Icons";

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
      color: rgb(var(--danger));
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
  .message {
    display: flex;
    padding: 1rem 2rem;
    grid-gap: 1rem;
    align-items: center;
    color: rgb(var(--gray-700));
    font-family: var(--font-geomanist);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.01625rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    a {
      text-decoration: underline;
    }
    &.message-sucess {
      border: 1px solid rgba(var(--teal), 0.5);
      background-color: rgba(var(--teal), 0.1);
      color: rgb(var(--teal));
    }
    &.message-error {
      border: 1px solid rgba(var(--danger), 0.5);
      background-color: rgba(var(--danger), 0.1);
      color: rgb(var(--danger));
    }
  }
`;

const FormGeneral = () => {
  //   Setting button text
  const [buttonText, setButtonText] = useState("Enviar mensagem");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setButtonText("Enviando...");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        name: values.nome,
        email: values.email,
        message: values.mensagem,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText("Enviar mensagem");

      return;
    }
    console.log("end form");
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText("Enviar mensagem");
    resetForm({ values: "" });
  };
  return (
    <FormGeneralWrapper>
      {showSuccessMessage && (
        <div className="message message-sucess">
          <div className="message-icon">
            <IconMailCheck />
          </div>
          <div className="message-content">
            Sua mensagem foi enviada com sucesso!
          </div>
        </div>
      )}
      {showFailureMessage && (
        <div className="message message-error">
          <div className="message-icon">
            <IconMailError />
          </div>
          <div className="message-content">
            Ops! Algo saiu mal! Tente outra vez em uns minutos ou entre em
            contato por{" "}
            <Link
              className="link-whats"
              href="https://api.whatsapp.com/send?phone=5511972576023"
            >
              WhatsApp
            </Link>
            .
          </div>
        </div>
      )}

      <Formik
        initialValues={{ nome: "", email: "", mensagem: "" }}
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          handleSubmit(values, { setSubmitting, resetForm });
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //     handleSubmit(values);
          //   }, 400);
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
                <Button text={buttonText} variation="primary" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </FormGeneralWrapper>
  );
};

export default FormGeneral;
