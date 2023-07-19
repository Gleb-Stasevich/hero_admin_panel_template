
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
// ВЫПОЛНЕНО
import { useSelector, useDispatch } from "react-redux";
import { filterHeroes } from "../../actions";

const HeroesFilters = () => {

    const { filters } = useSelector(store => store);
    const dispatch = useDispatch();

    const getFilterHeroes = (filter, btn) => {
        const btns = document.querySelector('.btns').children;
        for (let btn of btns) {
            btn.classList.remove('active');
        }
        btn.classList.add('active');
        dispatch(filterHeroes(filter));
    }

    const renderFilterList = (arr) => {
        return arr.map(({ type, btnClass, id }) => {
            return <button onClick={(e) => getFilterHeroes(type, e.target)} className={btnClass} key={id}>{type}</button>
        })
    }

    const elements = renderFilterList(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group btns">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;