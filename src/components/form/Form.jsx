import React, { memo, useState } from "react";
import { ImagePicker } from "../imagePicker/ImagePicker";
import "./form.scss";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/inputs/Input";

export const Form = memo(() => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeLoginInput = (event) => {
    const value = event.target.value;
    setLogin(value);
  };

  const changeEmailInput = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const changePasswordInput = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(login);
    setEmail(email);
    setPassword(password);

    console.log(`вы ввели логин: ${login}`);
    console.log(`вы ввели email: ${email}`);
    console.log(`вы ввели пароль: ${password}`);

    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImagePicker />
      <Input value={login} setValue={changeLoginInput} />
      <Input value={email} setValue={changeEmailInput} />
      <Input value={password} setValue={changePasswordInput} />
      <Button />
    </form>
  );
});
