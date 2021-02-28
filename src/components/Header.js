const Header = ({
  handleGetPrevMonth,
  handleGetNextMonth,
  currMonth,
  currYear,
}) => {
  return (
    <div className="header">
      <button className="header-btn" onClick={handleGetPrevMonth}>
        {`<`}
      </button>
      <h1 className="header-date">
        {currMonth} {currYear}
      </h1>
      <button className="header-btn" onClick={handleGetNextMonth}>
        {`>`}
      </button>
    </div>
  )
}

export default Header
