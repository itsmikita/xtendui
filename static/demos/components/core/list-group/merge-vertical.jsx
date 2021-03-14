import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <form className="text-sm">
          <button type="button" className="xt-list flex-col group">
            <div className="xt-button text-xs py-2 px-3.5 rounded-t-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 group-hover:bg-primary-600 active:bg-primary-700 group-active:bg-primary-700">
              Search
            </div>

            <div className="xt-button text-xs py-2 px-3.5 rounded-b-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 group-hover:bg-gray-300 active:bg-gray-400 group-active:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-xl -my-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </button>
        </form>
      </div>
    )
  }
}

export default Demo
