import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { restaurants } from './../public/mock'

const RESTOURANTS = restaurants

const rootElement = document.getElementById('root');
if (rootElement != null) {

  // @ts-ignore
  createRoot(document.getElementById('root')).render(
    <>
      <h1>Рестораны</h1>
      <hr />
      <div>
        {
          RESTOURANTS.map((rest, i1) => {
            return (
              <div key={ i1 }>
                <h2 > Ресторан "{ rest.name }"</h2>
                <h3 > Меню</h3>
                <ul>
                  { rest.menu.map((dish, i2) => {
                    return (
                      <li key={ i2 }>{ dish.name }</li>
                    )
                  }) }
                </ul>
                <h3>Отзывы</h3>
                <ul>
                  { rest.reviews.map((resp, i3) => {
                    return (
                      <li key={ i3 }><i>{ resp.user }: { resp.text }</i></li>
                    )
                  }) }
                </ul>
                <br />
                <br />
              </div>
            )
          })
        }
      </div >
    </>
  )

}
