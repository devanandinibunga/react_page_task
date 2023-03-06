import './HeaderComponent.css'


export const HeaderComponent = () => {
  return (
    <div className='header-component-container'>
        <h1 className='header-component-header'>
        Getting Started
        </h1>
        <p className='header-component-description'>
          This page is an overview of the React documentation and related resources.
        </p>
        <p>
          <strong>React</strong> is a JavaScript library for building user interfaces. 
          Learn what React is all about on <a href='/' className='header-component-list-anchor'>our homepage</a> or <a href='/' className='header-component-list-anchor'>in the tutorial</a>.
        </p>
        <hr/>
        <ul>
          <li className='header-component-list'>
            <a href='/' className='header-component-list-anchor'>Try React</a>
          </li>
          <li className='header-component-list'>
            <a href='/' className='header-component-list-anchor'>Learn React</a>
          </li>
          <li className='header-component-list'>
            <a href='/' className='header-component-list-anchor'>Staying Informed</a>
          </li>
          <li className='header-component-list'>
            <a href='/' className='header-component-list-anchor'>Versioned Documentation</a>
          </li>
          <li className='header-component-list'>
            <a href='/' className='header-component-list-anchor'>Something Missing?</a>
          </li>
        </ul>
        <hr/>
    </div>
      
  )
}