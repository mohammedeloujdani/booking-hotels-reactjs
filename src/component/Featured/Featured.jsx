import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
      <img className='featuredImg'
      src='https://img.freepik.com/photos-gratuite/vue-panoramique-plage-sable-plage-chaises-longues-parasols-ouverts-mer-montagnes-hotel-recours-tekirova-kemer-dinde_146671-18876.jpg?w=740&t=st=1672666877~exp=1672667477~hmac=b4e02b70beedfbac114f45da890a9e1bf60461b964d50fb9bb42820443e6f5e7'
       ></img>
       <div className='featuredTitles'>
        <h1>Dublin</h1>
        <h2>123 properties</h2>
       </div>
      </div>
      <div className='featuredItem'>
      <img className='featuredImg'
      src='https://img.freepik.com/photos-gratuite/hotel-emirates-palace_158595-1972.jpg?w=740&t=st=1672667108~exp=1672667708~hmac=2bbef89a4be6f12e04e54bf554403b59bdf35e6f7354929654e0ed7dfa6a3e31'
       ></img>
       <div className='featuredTitles'>
        <h1>Greezo</h1>
        <h2>93 properties</h2>
       </div>
      </div>
      <div className='featuredItem'>
      <img className='featuredImg'
      src='https://img.freepik.com/photos-gratuite/ancienne-pagode-au-wat-photharam-maha-wihan-chet-yot-chiang-man-chiang-mai-au-nord-thailande_554837-574.jpg?w=740&t=st=1672667147~exp=1672667747~hmac=60e7b5ce1a15b2c276afd1b5603241cc9d8b12611644c4069895983375d2f93a'
       ></img>
       <div className='featuredTitles'>
        <h1>Haway</h1>
        <h2>19 properties</h2>
       </div>
      </div>
    </div>
  )
}

export default Featured
