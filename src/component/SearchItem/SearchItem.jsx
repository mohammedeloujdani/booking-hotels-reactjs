import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="serchItem">
    
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square200/303511695.webp?k=046d9c62724e8992606ea58519baf8959763392023c6dd46e9a7adb3c93ea627&o=&s=1"
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">Tower Street Apartement</h1>
      <span className="siDistance">500m from center</span>
      <span className="siStaxOp">Free airport taxi</span>
      <span className="siSubtitle">
      Studio Aprtement with Air conditioning
      </span>
      <span className="siFeautures">
        Entire Studio * 1 bathroom * 21m full bed
      </span>
      <span className="siCancelOp">Free cancellation</span>
      <span className="ciCancelOpSubtitle">
        You can cancel later , so lock in this great price today !
      </span>
      </div>
    <div className="siDetails">

    <div className="siRating">
    <span>Exelent </span>
    <button>8.9</button>
    </div>
    <div className="siDetailText">
    <span className="siPrice">$123 </span>
    <span className="siTaxOp">includes taxes and fees</span>
    <button className="siCheckButton">See available</button>
    </div>
    </div>

    </div>
  )
}

export default SearchItem
