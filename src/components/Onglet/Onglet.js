import { useState } from 'react'
import './Onglet.css'

export default function Onglet() {

  const [toggleActive, setToggleActive] = useState(1);

  const goFr = () => {
    setToggleActive(1)
  }
  const goEn = () => {
    setToggleActive(2)
  }


  return (
    <div>
      <div className="contbtn">
        <div onClick={goFr} className={`onglet ${toggleActive === 1 ? "active" : ""}`}>Français</div>
        <div onClick={goEn} className={`onglet ${toggleActive === 2 ? "active" : ""}`}>Anglais</div>
      </div>
      <div className="container">
      {toggleActive === 1 ?
        <p className="contenu fr">
        FR Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, cumque dolorem incidunt dignissimos accusamus voluptatem, repellat, eveniet numquam aut aliquid eligendi ea nihil illo optio inventore eaque autem harum ad molestiae? Officia eum, eveniet quam inventore ipsa placeat quisquam. Quam quos facilis voluptate, voluptatem nulla eveniet eum et suscipit perspiciatis, in soluta fuga dolorem atque adipisci, autem cupiditate magnam iusto reiciendis hic dolor optio? Laboriosam inventore debitis facilis, aperiam earum explicabo vel doloribus voluptas fugit! Voluptates earum dolore dignissimos ullam voluptatem illum ipsum cupiditate officia, est ex consequatur magnam, eaque iste iure ea. Ratione nesciunt modi expedita dignissimos nisi.
        </p>
        :
        <p className="contenu en">
          EN Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae pariatur architecto autem repellendus praesentium illum ullam quidem accusamus excepturi culpa, nesciunt maiores voluptas assumenda in distinctio alias reprehenderit nobis delectus quisquam id beatae quia! Ratione facere cupiditate asperiores eius sed, vel placeat. Quia quis facere id ex cumque ullam aliquam sequi quod similique explicabo, voluptatibus totam accusamus illo, eos magni ea! Quaerat, eaque vitae a quod sapiente debitis! Sit, hic dolor. Placeat, consequatur accusamus quas deserunt cum quia voluptatum assumenda vel fugit quaerat officiis magni dolore aspernatur vitae nisi explicabo aperiam quis distinctio at! Non cumque blanditiis natus sunt!
        </p>
      }
      </div>

    </div>
  )
}
