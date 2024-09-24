import React from 'react'
import Navbar from './components/Navbar'
import Textbox from './components/Textbox'

const App = () => {
  return (
    <>
      <Navbar />
      <p style={{ backgroundColor: '#161616', padding: '16px 20px', borderRadius: '16px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit consequatur dolorum consequuntur totam molestias commodi at temporibus qui blanditiis, nisi sapiente aut aspernatur laborum rerum, placeat quis labore, vel maxime saepe ut earum! Ullam distinctio asperiores eaque, corrupti ipsa aperiam a delectus sapiente labore, excepturi in eligendi eius accusantium saepe debitis porro doloribus adipisci quae. Asperiores consectetur omnis, dolorem neque dignissimos quia sed perferendis numquam voluptatibus quos tempora inventore, voluptas cumque ab magni fugiat labore sit veniam? Eos iste nam debitis quam tenetur, tempore dignissimos id dicta ipsa corporis praesentium enim reiciendis in consectetur voluptatibus neque molestiae voluptatem cumque nemo voluptate temporibus. Numquam voluptates ut, voluptatibus dolorem excepturi corrupti. Doloremque dignissimos, deleniti deserunt tenetur enim rerum placeat saepe necessitatibus tempora ipsam soluta nam praesentium assumenda perferendis iste? Nemo ea quam voluptatem vitae debitis nulla consectetur provident velit perspiciatis ipsum cupiditate, soluta vero quas laudantium adipisci fugiat veritatis dolorum ab natus saepe, officia maxime aperiam iure eveniet. Inventore iste unde soluta molestiae voluptates eum deserunt esse eaque fuga optio delectus quibusdam veniam aspernatur reiciendis laudantium accusantium, repudiandae sed tempora quasi tenetur cupiditate consequatur quam voluptatem? Temporibus facilis quibusdam atque. Dicta ex doloremque iste non ipsa earum tenetur? Quisquam recusandae dolorem quia soluta, reprehenderit possimus consequuntur nemo aperiam doloribus quasi amet officia incidunt officiis quam, eos accusamus voluptates similique aspernatur voluptatum libero voluptatem veniam natus at? Ullam mollitia vitae libero ea soluta at harum explicabo, velit modi aliquid suscipit cum a beatae sunt quo quidem ipsam accusantium iste, ratione quis vero molestiae tenetur? Saepe iure iusto vitae officia aspernatur. Laborum consequuntur quaerat commodi quibusdam. Quia quas modi officia impedit, delectus tenetur? Modi aliquid ipsam non doloribus, sunt ea illo aspernatur ut aperiam reiciendis similique a assumenda laudantium dolore nam, iure tenetur illum cumque molestias. Corporis eum et laboriosam sit sequi deleniti tenetur autem, vel aperiam, ea excepturi blanditiis praesentium fugit sed! Recusandae unde suscipit itaque porro, iste optio voluptate.</p>
      <Textbox />
      <div style={{
        position: 'fixed',
        bottom: '0',
        height: '5rem',
        width: '100%',
        zIndex: '100',
        backgroundColor: 'black',
        backdropFilter: 'blur(8px)'
      }} />
    </>
  )
}

export default App