import * as React from "react";
import * as ReactDOM from "react-dom";
import { Input, Checkbox } from "@progress/kendo-react-inputs";


 const MolSpec = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const usernameValidationMessage = React.useMemo(
    () => "Your username should contain only letters",
    []
  );
  const passwordValidationMessage = React.useMemo(
    () => "Please enter password between 6 and 16 characters",
    []
  );
  const confirmPasswordValidationMessage = React.useMemo(
    () => "Passwords does not match",
    []
  );

  const handleChange = (event) => {
    if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="row example-wrapper">
      <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
        <form className="k-form" onSubmit={handleSubmit}>
          <fieldset className="k-form-fieldset">
            <legend className="k-form-legend">Тест (для молодого специалиста)</legend>
            <div className="mb-3">
              <Input
                validityStyles={false}
                name="username"
                style={{
                  width: "100%",
                }}
                label="Имя"
                minLength={2}
                required={true}
                validationMessage={usernameValidationMessage}
              />
                <br/>
                <Input
                style={{
                  width: "100%",
                }}
                label="Фамилия"
                minLength={2}
                required={true}
                validationMessage={usernameValidationMessage}
              />
            </div>
            <div className="mb-3">
            <p>2. Что в наибольшей степени повлияло на выбор профессии учителя?</p>
            </div>
            <div className="mb-3">
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"1.	Собственное желание"}
              /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"2.	Совет родителей"}
                /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"3.	Пример любимого учителя"}
              /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"4.	Мнение друзей"}
              /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"5.	Гарантированная оплата труда"}
              />
              <br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"6.	Престиж профессии учителя"}
              />
                    <div className="mb-3">
                  <p>3. Какие мотивы побудили Вас прийти работать в образовательное учреждение?</p>
                    </div>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"1.	В городе, селе живут мои родители"}
              /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"2.	Перспектива профессионального роста"}
                /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"3.	Повышенная заработная плата"}
              />
                    <div className="mb-3">
                  <p>4. Что Вам нравится в педагогической работе?</p>
                    </div>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"1.	Учить и воспитывать детей"}
              /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"2.	Преподавать любимый предмет"}
                /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"3.	Творческий характер труда"}
                /><br/>
                <Checkbox
                  validityStyles={false}
                  id="ch3"
                  name="checkbox"
                  required={true}
                  label={"4.	Большой отпуск"}
                />
                    <div className="mb-3">
                  <p>5.	Удовлетворяет ли Вас уровень вашей профессиональной подготовки?</p>
                    </div>
                    <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"1.	Да"}
              /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"2.	Нет"}
                /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"3.	Частично"}
                />
                    <div className="mb-3">
                  <p>6.	Укажите, какие педагогические проблемы Вас волнуют?</p>
                    </div>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"1.	Старение педагогических кадров"}
              /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"2.	Большая учебная нагрузка педагогов"}
                /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"3.	Уход из учреждения учителей (воспитателей) пенсионного возраста"}
              /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"4.	Наличие в школе, детском саду вакансий"}
              /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"5.	Безразличное отношение коллег"}
              />
                    <div className="mb-3">
                  <p>7.	Что Вы испытываете в период адаптации на новом рабочем месте?</p>
                    </div>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"1.	Тревожность, неуверенность в своих силах"}
              /><br/>
              <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"2.	Пессимизм, чувство собственной неполноценности"}
                /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"3.	Снижение интереса к работе"}
              /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"4.	Боязнь класса (группы) и страх перед учениками или воспитанниками"}
              /><br/>
                <Checkbox
                validityStyles={false}
                id="ch3"
                name="checkbox"
                required={true}
                label={"5.	Отношения с коллегами"}
              />     
                    <div className="mb-3">
                  <p>8.	Обращаетесь ли Вы за помощью к коллегам?</p>
                    </div>
                    <div className="mb-3">
                  <p>9. Как Вы считаете, что главное для Вас в вашем отношении к работе?</p>
                    </div>
                    <div className="mb-3">
                  <p>10. Что вы считаете наиболее важным в работе?</p>
                    </div>
                    <div className="mb-3">
                  <p>11. С каким настроением Вы обычно идёте на работу?</p>
                    </div>
                    <div className="mb-3">
                  <p>12. Какие трудности есть у Вас в подготовке и проведении урока или учебного занятия:</p>
                    </div>
                    <div className="mb-3">
                  <p>13. Необходимы ли, на Ваш взгляд, встречи с коллегами молодыми специалистами:</p>
                    </div>
                    <div className="mb-3">
                  <p>14. Назовите интересную для Вас форму проведения таких встреч; укажите 3 наиболее полезных:</p>
                    </div>
                    <div className="mb-3">
                  <p>15. В каких направлениях организации образовательного процесса Вы испытываете трудности? Укажите 2 самых проблемных направления:</p>
                    </div>
            </div>
          </fieldset>
          <input
            type="submit"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            value="Завершить"
          />
        </form>
      </div>
      {success && (
        <div
          className="alert alert-success"
          style={{
            position: "absolute",
          }}
        >
          Form submitted!
        </div>
      )}
    </div>
  );
};


export default MolSpec