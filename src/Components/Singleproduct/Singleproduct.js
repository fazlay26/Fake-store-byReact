import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Singleproduct.css'

const Singleproduct = ({ product, setCartCount }) => {
    //console.log(product);
    return (
        <div data-aos="flip-left" className="col-md-4">
            <div className="card p-3">
                <img className='w-50 m-auto' src={product.image} alt="" />

                <h1>{product.title.slice(0, 10)}</h1>
                <div className='d-felx justify-content-between'>
                    <button onClick={setCartCount} className='btn btn-success mx-2'>Add to Cart</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <ReactModal product={product}></ReactModal>
                    {/* <button className='btn btn-info'>Detlais</button> */}


                </div>
            </div>

        </div>

    );
};

export default Singleproduct;