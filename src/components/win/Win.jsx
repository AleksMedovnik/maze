import { NavLink } from "react-router-dom";

export const Win = () => {
    return (
        <section className='win'>
            <div className=" win__main">
                <h1 className='title'>Вы вышли из лабиринта!!!</h1>
                <NavLink to='/main' className='linkStart'>Следующий уровень</NavLink>
            </div>
        </section>
    )
}