import React from 'react'
import network from '../network.svg'
const LandingPage = () => {
  return (
    <div>
      <section1 className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>AI_BASED <span className="text-warning">CYBER SECURITY </span>ANALYST</h1>
              <p className="lead my-4">
                <small>
                  This is a software application to detect network intrusion by monitoring a network or system for malicious activity and predicts whether it is Normal or Abnormal.
                </small>
              </p>
            </div>
            <img className="img-fluid  w-50  d-none d-sm-block" src={network}alt="" />
          </div>
        </div>
      </section1>
    </div>
  )
}

export default LandingPage
