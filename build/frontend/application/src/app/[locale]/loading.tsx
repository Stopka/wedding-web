import React, { ReactElement } from 'react'

export default function LocaleLoading (): ReactElement {
  return (
    <>
      <div className={'pulsingheart-wall'}>
        <div className={'placeholder-content placeholder-glow'}>
          <h1 className={''}><span className={'placeholder col-4'}></span></h1>
          <p className="">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>

        <div className="pulsingheart-wrapper">
          <div className="pulsingheart"></div>
        </div>
      </div>
    </>
  );
}
