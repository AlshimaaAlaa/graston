import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css"
function HomeProducts() {
  return (
    <div className='homePrductsContainer mt-5'>
      <div className='d-flex justify-content-between'>
        <h2 className='fw-bolder'>Top Products</h2>
        <p>
          <Link className=' text-decoration-none' to={'/'}>View More </Link>
        </p>
      </div>
        <div className='products mt-5' >
          <div className='products__item'>
          <div className='d-flex justify-content-center'>
            <img src='/assets/med.png' alt='product-image' className='product-img'/>
            </div>
            <p className='fw-bolder mt-3'>Kollagen (Vegan Capsule)</p>
            <p className='fw-bolder'>$10</p>
            <button className='cartBtn '>Add to Cart <img width={'20px'} className='ms-2 mb-1' src='/assets/Vector (2).png' alt='cart'/></button>
          </div>

          <div className='products__item'>
            <div className='d-flex justify-content-center'>
            <img src='/assets/med.png' alt='product-image' className='product-img'/>
            </div>
            
            <p className='fw-bolder mt-3'>Kollagen (Vegan Capsule)</p>
            <p className='fw-bolder'>$10</p>
            <button className='cartBtn '>Add to Cart <img width={'20px'} className='ms-2 mb-1' src='/assets/Vector (2).png' alt='cart'/></button>
          </div>

          <div className='products__item'>
          <div className='d-flex justify-content-center'>
            <img src='/assets/med.png' alt='product-image' className='product-img'/>
            </div>
            <p className='fw-bolder mt-3'>Kollagen (Vegan Capsule)</p>
            <p className='fw-bolder'>$10</p>
            <button className='cartBtn '>Add to Cart <img width={'20px'} className='ms-2 mb-1' src='/assets/Vector (2).png' alt='cart'/></button>
          </div>
        </div>
      </div>
  )
}
export default HomeProducts