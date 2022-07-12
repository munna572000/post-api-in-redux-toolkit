import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './components/productSlice';



const ApiUse = () => {
    const dispatch = useDispatch();

    const  products = useSelector((state) => state.product);
    // const user = useSelector((state) => state.product.results);
    console.log("state",products)

    useEffect(() => {
    
        dispatch(fetchProducts());
     
    }, []);

  
    return (
       
     <div className="clearfix">
      <h1>Product pages</h1>
        <div className="row">
          <h1>{products.email}</h1>
          {/* {
            products.map((values)=>{
              return(
                <>
                <div className="col-md-4 animated fadeIn" key={values.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={values.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {values.name.first +
                      " " +
                      values.name.last}
                  </h5>
                  <p className="card-text">
                    {values.location.city +
                      ", " +
                      values.location.state}
                    <br />
                    <span className="phone">{values.phone}</span>
                  </p>
                </div>
              </div>
            </div>

                </>
              )
            })
          }
          */}
        </div>
        </div>
    );
};

export default ApiUse;

