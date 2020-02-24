import React from 'react';

// added 'placeholder' because we will probably need to make a lot of changes to this to incorporate redux

const SaleDetail = () => {
  const saleDetailsList = 'placeholder';
  const saleDetail = saleDetailsList.map(({ imageURL, title, condition, releaseDate, price, suggestedPrice, percentDiff, amountDiff }) => (
    <>
      <section>
        <h2>{title}</h2>
        <p>{releaseDate}</p>
        <img src={imageURL} />
      </section>
      <section>
        <p>Condition: {condition}</p>
        <p>Fair Market Price: {suggestedPrice}</p>
        <span>Price: {price}</span><span>+/-{percentDiff}%</span><span>+/- ${amountDiff}</span>
      </section>
    </>

  ));

  return (
    <>
      {saleDetail}
    </>
  );
};

export default SaleDetail;
