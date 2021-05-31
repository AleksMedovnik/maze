import { NavLink } from "react-router-dom";

export const Win = () => {
    return (
        <section className='win'>
            <h1 className='title'>Вы вышли из лабиринта!!!</h1>
            <NavLink to='/main' className='linkStart'>Играть еще раз</NavLink>
        </section>
    )
}