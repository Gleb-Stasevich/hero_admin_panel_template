import { v4 as uuidv4 } from 'uuid';

import { useRef } from "react";
import { useHttp } from "../../hooks/http.hook";
import { addHero } from "../../actions";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

import { createFilters } from '../../actions';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
// ВЫПОЛНЕНО

const HeroesAddForm = () => {

    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        request(`http://localhost:3001/filters/`, 'GET', null).then(data => dispatch(createFilters(data)));
    }, []);

    const displatch = useDispatch();
    const { request } = useHttp();

    let nameRef = useRef('');
    let descRef = useRef('');
    let elemRef = useRef('');

    const addHeroItem = (e) => {
        e.preventDefault();

        let id = uuidv4();
        let hero = {
            id: id,
            name: nameRef.current.value,
            description: descRef.current.value,
            element: elemRef.current.value
        };

        dispatch(addHero(hero));

        request(`http://localhost:3001/heroes/`, 'POST', JSON.stringify(hero));
    }

    const renderOptionList = (arr) => {
        return arr.map(({ type, id }) => {
            return <option key={id} value={type}>{type}</option>
        })
    }

    const elements = renderOptionList(filters);

    return (
        <form onSubmit={(e) => addHeroItem(e)} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    ref={nameRef}
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    ref={descRef}
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    ref={elemRef}
                    required
                    className="form-select"
                    id="element"
                    name="element">
                    {elements}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;