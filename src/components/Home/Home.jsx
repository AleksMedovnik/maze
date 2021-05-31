import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className='main'>
      <h1 className='textShadow'>Цифровой <br /> Лабиринт</h1>
      <NavLink to='/main' className='linkStart'>Начать игру</NavLink>
    </div>
  )
}