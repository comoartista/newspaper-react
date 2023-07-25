import logo from '../../images/logo.svg'

const Head = () => {
  return (
    <>
    <section className='head'>
      <div className="container flexSB paddingTB">
      <div className="data">Thursday, February 25, 2021</div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button className='btn btn__subscribe'>Subscribe</button>
      </div>
    </section>
    </>
  )

}

export default Head