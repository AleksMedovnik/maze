import { NavLink } from "react-router-dom"

export const GameOver = () => {
    return (
        <section className='over'>
            <h1 className='title'>Вы выбрали неверный путь и зашли в тупик!</h1>
            <NavLink to='/main' className='linkStart'>Играть еще раз</NavLink>
        </section>
    )
}